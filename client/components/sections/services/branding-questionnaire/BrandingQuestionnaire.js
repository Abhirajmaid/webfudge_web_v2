"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/helpers";
import SectionWrapper from "./form/SectionWrapper";
import InputField from "./form/InputField";
import TextAreaField from "./form/TextAreaField";
import CheckboxGroup from "./form/CheckboxGroup";
import RadioGroup from "./form/RadioGroup";
import { STEPS, OPTIONS } from "./questionnaireConfig";
import QuestionnaireShareBar from "./QuestionnaireShareBar";
import QuestionnairePrintSummary from "./QuestionnairePrintSummary";

function getInitialFormState() {
  return {
    businessName: "",
    tagline: "",
    website: "",
    industryNiche: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    businessWhat: "",
    businessProducts: "",
    businessProblem: "",
    businessUnique: "",
    audienceAge: "",
    audienceGender: "",
    audienceLocation: "",
    audienceIncome: "",
    audienceIdealCustomer: "",
    audienceAttract: "",
    audienceBrandFeeling: "",
    brandPersonality: [],
    brandAsPerson: "",
    visionLongTerm: "",
    vision35Year: "",
    brandGoals: [],
    competitors: "",
    competitorsLikes: "",
    competitorsDislikes: "",
    competitorsDifferentiation: "",
    existingLogo: "",
    logoFile: null,
    logoFileName: "",
    logoFormats: [],
    logoIdeas: "",
    designStyles: [],
    designFeeling: "",
    colorsPreferred: "",
    colorsAvoid: "",
    colorsExisting: "",
    typographyStyles: [],
    typographyReferences: "",
    inspirationBrands: "",
    inspirationLikes: "",
    logoUsage: [],
    deliverables: [],
    timeline: "",
    budget: "",
    notesExtra: "",
    notesRestrictions: "",
  };
}

function SuccessToast({ visible, onDismiss, className, title, description }) {
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(onDismiss, 5500);
    return () => clearTimeout(t);
  }, [visible, onDismiss]);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 z-[100] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 animate-fade-in rounded-2xl border border-neutral-200 bg-neutral-900 px-5 py-4 text-center text-sm text-white shadow-lg md:left-auto md:right-8 md:translate-x-0 md:text-left",
        className
      )}
      role="status"
    >
      <p className="font-medium">{title ?? "Questionnaire submitted"}</p>
      <p className="mt-1 text-neutral-300">
        {description ??
          "Thank you — we'll review your answers and be in touch shortly."}
      </p>
      <button
        type="button"
        onClick={onDismiss}
        className="mt-3 text-xs text-neutral-400 underline underline-offset-2 hover:text-white"
      >
        Dismiss
      </button>
    </div>
  );
}

export default function BrandingQuestionnaire({
  serviceSlug = "brand-identity-design",
}) {
  const [form, setForm] = useState(getInitialFormState);
  const [stepIndex, setStepIndex] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const dismissSuccess = useCallback(() => setShowSuccess(false), []);

  const totalSteps = STEPS.length;
  const progress = useMemo(
    () => Math.round(((stepIndex + 1) / totalSteps) * 100),
    [stepIndex, totalSteps]
  );

  const update = useCallback((key) => (v) => {
    setForm((prev) => ({ ...prev, [key]: v }));
  }, []);

  const handleLogoFile = (e) => {
    const file = e.target.files?.[0] ?? null;
    setForm((prev) => ({
      ...prev,
      logoFile: file,
      logoFileName: file ? file.name : "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmitError(null);
    setIsSubmitting(true);

    const payload = {
      ...form,
      logoFile: form.logoFile
        ? { name: form.logoFile.name, size: form.logoFile.size, type: form.logoFile.type }
        : null,
    };

    try {
      const res = await fetch("/api/generate-proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ proposalType: "branding", data: payload }),
      });

      const ct = res.headers.get("content-type") || "";
      if (!res.ok) {
        if (ct.includes("application/json")) {
          const j = await res.json();
          throw new Error(j.error || "Could not generate proposal");
        }
        throw new Error("Could not generate proposal");
      }
      if (!ct.includes("application/pdf")) {
        throw new Error("Unexpected response from server");
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "proposal.pdf";
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);

      setShowSuccess(true);
      setStepIndex(0);
      setForm(getInitialFormState());
    } catch (err) {
      console.error(err);
      setSubmitError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const step = STEPS[stepIndex];
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === totalSteps - 1;

  const stepContent = (() => {
    switch (step.id) {
      case 1:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Tell us who you are and how we can reach you."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <InputField
                label="Business name"
                name="businessName"
                value={form.businessName}
                onChange={update("businessName")}
                placeholder="Acme Inc."
              />
              <InputField
                label="Tagline"
                name="tagline"
                value={form.tagline}
                onChange={update("tagline")}
                placeholder="Your one-line promise"
              />
              <InputField
                label="Website"
                name="website"
                type="url"
                value={form.website}
                onChange={update("website")}
                placeholder="https://"
                autoComplete="url"
              />
              <InputField
                label="Industry / niche"
                name="industryNiche"
                value={form.industryNiche}
                onChange={update("industryNiche")}
                placeholder="e.g. B2B SaaS, wellness"
              />
              <InputField
                label="Contact person name"
                name="contactName"
                value={form.contactName}
                onChange={update("contactName")}
                placeholder="Full name"
                autoComplete="name"
              />
              <InputField
                label="Contact email"
                name="contactEmail"
                type="email"
                value={form.contactEmail}
                onChange={update("contactEmail")}
                placeholder="you@company.com"
                autoComplete="email"
              />
              <div className="sm:col-span-2">
                <InputField
                  label="Contact phone"
                  name="contactPhone"
                  type="tel"
                  value={form.contactPhone}
                  onChange={update("contactPhone")}
                  placeholder="+1 …"
                  autoComplete="tel"
                />
              </div>
            </div>
          </SectionWrapper>
        );
      case 2:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Help us understand your business at a glance."
          >
            <TextAreaField
              label="What does your business do?"
              name="businessWhat"
              value={form.businessWhat}
              onChange={update("businessWhat")}
              placeholder="Core offer, mission, and day-to-day value…"
            />
            <TextAreaField
              label="Products / services"
              name="businessProducts"
              value={form.businessProducts}
              onChange={update("businessProducts")}
              placeholder="List main offerings or tiers…"
            />
            <TextAreaField
              label="Problem you are solving"
              name="businessProblem"
              value={form.businessProblem}
              onChange={update("businessProblem")}
              placeholder="For whom, and why it matters…"
            />
            <TextAreaField
              label="What makes you unique?"
              name="businessUnique"
              value={form.businessUnique}
              onChange={update("businessUnique")}
              placeholder="Differentiators, proof, or POV…"
            />
          </SectionWrapper>
        );
      case 3:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Who should this brand speak to first?"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <InputField
                label="Age group"
                name="audienceAge"
                value={form.audienceAge}
                onChange={update("audienceAge")}
                placeholder="e.g. 25–40"
              />
              <InputField
                label="Gender"
                name="audienceGender"
                value={form.audienceGender}
                onChange={update("audienceGender")}
                placeholder="How you segment (if relevant)"
              />
              <InputField
                label="Location"
                name="audienceLocation"
                value={form.audienceLocation}
                onChange={update("audienceLocation")}
                placeholder="Markets or regions"
              />
              <InputField
                label="Income level"
                name="audienceIncome"
                value={form.audienceIncome}
                onChange={update("audienceIncome")}
                placeholder="Optional — helps tone and cues"
              />
            </div>
            <TextAreaField
              label="Ideal customer description"
              name="audienceIdealCustomer"
              value={form.audienceIdealCustomer}
              onChange={update("audienceIdealCustomer")}
              placeholder="Behaviors, motivations, objections…"
            />
            <TextAreaField
              label="What customers do you want to attract?"
              name="audienceAttract"
              value={form.audienceAttract}
              onChange={update("audienceAttract")}
              placeholder="New segments or upgraded perception…"
            />
            <TextAreaField
              label="Brand feeling"
              name="audienceBrandFeeling"
              value={form.audienceBrandFeeling}
              onChange={update("audienceBrandFeeling")}
              placeholder="How should people feel when they interact with you?"
            />
          </SectionWrapper>
        );
      case 4:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Select all traits that fit. We’ll balance them in the system."
          >
            <CheckboxGroup
              label="Brand traits"
              options={OPTIONS.brandPersonality}
              value={form.brandPersonality}
              onChange={update("brandPersonality")}
            />
            <TextAreaField
              label="If your brand were a person, how would you describe them?"
              name="brandAsPerson"
              value={form.brandAsPerson}
              onChange={update("brandAsPerson")}
              placeholder="Voice, values, how they show up in a room…"
            />
          </SectionWrapper>
        );
      case 5:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Where should this identity take you?"
          >
            <TextAreaField
              label="Long-term vision"
              name="visionLongTerm"
              value={form.visionLongTerm}
              onChange={update("visionLongTerm")}
              placeholder="The brand you’re building toward…"
            />
            <TextAreaField
              label="3–5 year goal"
              name="vision35Year"
              value={form.vision35Year}
              onChange={update("vision35Year")}
              placeholder="Concrete outcomes or milestones…"
            />
            <CheckboxGroup
              label="Primary intent"
              options={OPTIONS.brandGoals}
              value={form.brandGoals}
              onChange={update("brandGoals")}
            />
          </SectionWrapper>
        );
      case 6:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Context from your market sharpens differentiation."
          >
            <TextAreaField
              label="Competitors"
              name="competitors"
              value={form.competitors}
              onChange={update("competitors")}
              placeholder="Names or links — direct and adjacent…"
            />
            <TextAreaField
              label="What do you like about them?"
              name="competitorsLikes"
              value={form.competitorsLikes}
              onChange={update("competitorsLikes")}
              placeholder="Clarity, craft, positioning…"
            />
            <TextAreaField
              label="What do you dislike?"
              name="competitorsDislikes"
              value={form.competitorsDislikes}
              onChange={update("competitorsDislikes")}
              placeholder="What you want to avoid…"
            />
            <TextAreaField
              label="How should you be different?"
              name="competitorsDifferentiation"
              value={form.competitorsDifferentiation}
              onChange={update("competitorsDifferentiation")}
              placeholder="Your wedge, story, or proof…"
            />
          </SectionWrapper>
        );
      case 7:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Logo direction and any existing assets."
          >
            <RadioGroup
              label="Do you have an existing logo?"
              name="existingLogo"
              options={[
                { id: "yes", label: "Yes" },
                { id: "no", label: "No" },
              ]}
              value={form.existingLogo}
              onChange={update("existingLogo")}
            />
            {form.existingLogo === "yes" && (
              <div className="space-y-2">
                <span className="text-sm font-medium text-neutral-800">
                  Upload current logo (optional)
                </span>
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50/50 px-4 py-8 text-center text-sm text-neutral-600 transition-colors hover:border-neutral-400 hover:bg-neutral-50">
                  <input
                    type="file"
                    accept="image/*,.pdf,.svg"
                    className="sr-only"
                    onChange={handleLogoFile}
                  />
                  <span className="font-medium text-neutral-800">
                    {form.logoFileName || "Click to choose a file"}
                  </span>
                  <span className="mt-1 text-xs text-neutral-500">
                    PNG, JPG, SVG, or PDF
                  </span>
                </label>
              </div>
            )}
            <CheckboxGroup
              label="Logo format interests"
              options={OPTIONS.logoFormats}
              value={form.logoFormats}
              onChange={update("logoFormats")}
            />
            <TextAreaField
              label="Logo ideas"
              name="logoIdeas"
              value={form.logoIdeas}
              onChange={update("logoIdeas")}
              placeholder="Symbols, metaphors, letters, references…"
            />
          </SectionWrapper>
        );
      case 8:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Visual language for the identity system."
          >
            <CheckboxGroup
              label="Style directions"
              options={OPTIONS.designStyles}
              value={form.designStyles}
              onChange={update("designStyles")}
            />
            <TextAreaField
              label="Overall design feeling"
              name="designFeeling"
              value={form.designFeeling}
              onChange={update("designFeeling")}
              placeholder="Mood, references, or adjectives…"
            />
          </SectionWrapper>
        );
      case 9:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Color builds recognition — share what you love and what to skip."
          >
            <InputField
              label="Preferred colors"
              name="colorsPreferred"
              value={form.colorsPreferred}
              onChange={update("colorsPreferred")}
              placeholder="e.g. deep navy, warm sand, electric blue"
            />
            <InputField
              label="Colors to avoid"
              name="colorsAvoid"
              value={form.colorsAvoid}
              onChange={update("colorsAvoid")}
              placeholder="e.g. neon green, corporate red"
            />
            <InputField
              label="Existing brand colors (if any)"
              name="colorsExisting"
              value={form.colorsExisting}
              onChange={update("colorsExisting")}
              placeholder="Hex codes or names"
            />
          </SectionWrapper>
        );
      case 10:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Typography sets tone alongside the mark."
          >
            <CheckboxGroup
              label="Type directions"
              options={OPTIONS.typography}
              value={form.typographyStyles}
              onChange={update("typographyStyles")}
            />
            <TextAreaField
              label="Typography references"
              name="typographyReferences"
              value={form.typographyReferences}
              onChange={update("typographyReferences")}
              placeholder="Fonts you like, brands, or links…"
            />
          </SectionWrapper>
        );
      case 11:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="North stars help us align quickly."
          >
            <TextAreaField
              label="Reference brands / logos"
              name="inspirationBrands"
              value={form.inspirationBrands}
              onChange={update("inspirationBrands")}
              placeholder="Names or URLs — not to copy, but to calibrate taste…"
            />
            <TextAreaField
              label="What do you like in them?"
              name="inspirationLikes"
              value={form.inspirationLikes}
              onChange={update("inspirationLikes")}
              placeholder="Simplicity, boldness, craft, color…"
            />
          </SectionWrapper>
        );
      case 12:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Where will the identity need to perform?"
          >
            <CheckboxGroup
              label="Primary touchpoints"
              options={OPTIONS.logoUsage}
              value={form.logoUsage}
              onChange={update("logoUsage")}
            />
          </SectionWrapper>
        );
      case 13:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Scope what you need from this engagement."
          >
            <CheckboxGroup
              label="Deliverables"
              options={OPTIONS.deliverables}
              value={form.deliverables}
              onChange={update("deliverables")}
            />
          </SectionWrapper>
        );
      case 14:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Rough ranges are fine — they keep proposals realistic."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <InputField
                label="Timeline"
                name="timeline"
                value={form.timeline}
                onChange={update("timeline")}
                placeholder="e.g. launch in Q2, 6 weeks ideal"
              />
              <InputField
                label="Budget"
                name="budget"
                value={form.budget}
                onChange={update("budget")}
                placeholder="Range or ballpark"
              />
            </div>
          </SectionWrapper>
        );
      case 15:
        return (
          <>
            <SectionWrapper
              step={step.id}
              title={step.title}
              description="Anything else we should know — legal, partners, or must-haves."
            >
              <TextAreaField
                label="Extra information"
                name="notesExtra"
                value={form.notesExtra}
                onChange={update("notesExtra")}
                placeholder="Links, stakeholders, campaigns…"
              />
              <TextAreaField
                label="Restrictions"
                name="notesRestrictions"
                value={form.notesRestrictions}
                onChange={update("notesRestrictions")}
                placeholder="Mandatories, taboos, trademark notes…"
              />
            </SectionWrapper>
            <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center md:p-10 print:hidden">
              <p className="mx-auto max-w-xl font-serif text-xl italic leading-relaxed text-neutral-800 md:text-2xl">
                The more detailed your answers, the better and faster we can create
                a brand that actually converts.
              </p>
              {submitError ? (
                <p className="mx-auto mt-6 max-w-lg text-sm text-red-700" role="alert">
                  {submitError}
                </p>
              ) : null}
              <div className="mt-8 flex justify-center">
                <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Generating proposal…" : "Submit & download proposal"}
                </Button>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  })();

  return (
    <Section
      variant="muted"
      id="branding-questionnaire"
      className="questionnaire-section !py-14 lg:!py-20 print:!bg-white print:!py-8"
    >
      <Container size="wide">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-8 text-sm text-neutral-500 print:hidden">
            <Link href="/services" className="hover:text-neutral-900">
              Services
            </Link>
            <span className="mx-2 text-neutral-300">/</span>
            <Link
              href={`/services/${serviceSlug}`}
              className="hover:text-neutral-900"
            >
              Brand Identity Design
            </Link>
            <span className="mx-2 text-neutral-300">/</span>
            <span className="text-neutral-900">Questionnaire</span>
          </nav>

          <header className="mb-10 space-y-6 print:hidden md:mb-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0 max-w-2xl space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Brand identity
                </p>
                <h2 className="font-serif text-3xl italic text-neutral-900 md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                  Branding &amp; Logo Discovery Questionnaire
                </h2>
                <p className="text-base leading-relaxed text-neutral-600">
                  A structured briefing so we can align on strategy, craft, and delivery
                  before we design. Save time by completing it in one go or step by step.
                </p>
              </div>
              <QuestionnaireShareBar className="w-full shrink-0 lg:max-w-[340px] xl:max-w-[380px]" />
            </div>
          </header>

          <form onSubmit={isLast ? handleSubmit : (e) => e.preventDefault()}>
            <div className="lg:grid lg:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]">
              <aside className="mb-8 hidden print:hidden lg:block">
                <div className="sticky top-28 space-y-1">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
                    Sections
                  </p>
                  {STEPS.map((s, i) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setStepIndex(i)}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-xs transition-colors",
                        i === stepIndex
                          ? "bg-neutral-900 font-medium text-white"
                          : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                      )}
                    >
                      <span className="tabular-nums opacity-60">{s.id}.</span>
                      <span className="truncate">{s.short}</span>
                    </button>
                  ))}
                </div>
              </aside>

              <div className="min-w-0 space-y-6">
                <div className="space-y-3 print:hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm text-neutral-600">
                      Step{" "}
                      <span className="font-semibold text-neutral-900">
                        {stepIndex + 1}
                      </span>{" "}
                      of {totalSteps}
                      <span className="hidden sm:inline">
                        {" "}
                        — <span className="text-neutral-900">{step.title}</span>
                      </span>
                    </p>
                    <span className="text-xs font-medium tabular-nums text-neutral-500">
                      {progress}%
                    </span>
                  </div>
                  <div
                    className="h-1 overflow-hidden rounded-full bg-neutral-200"
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-full rounded-full bg-neutral-900 transition-[width] duration-300 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="lg:hidden print:hidden">
                  <label className="sr-only" htmlFor="questionnaire-step">
                    Jump to section
                  </label>
                  <select
                    id="questionnaire-step"
                    value={stepIndex}
                    onChange={(e) => setStepIndex(Number(e.target.value))}
                    className="w-full rounded-full border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  >
                    {STEPS.map((s, i) => (
                      <option key={s.id} value={i}>
                        {s.id}. {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="print:hidden">{stepContent}</div>

                <div className="questionnaire-print-only hidden print:block">
                  <QuestionnairePrintSummary form={form} />
                </div>

                {!isLast && (
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-100 pt-8 print:hidden">
                    <Button
                      type="button"
                      variant="ghost"
                      size="md"
                      showIcon={false}
                      disabled={isFirst}
                      onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      variant="primary"
                      size="md"
                      onClick={() =>
                        setStepIndex((i) => Math.min(totalSteps - 1, i + 1))
                      }
                    >
                      Continue
                    </Button>
                  </div>
                )}

                {isLast && (
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-100 pt-8 print:hidden">
                    <Button
                      type="button"
                      variant="ghost"
                      size="md"
                      showIcon={false}
                      disabled={isFirst}
                      onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
                    >
                      Back
                    </Button>
                    <p className="text-xs text-neutral-500">
                      By submitting, you agree we may contact you about this project.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </Container>
      <SuccessToast
        visible={showSuccess}
        onDismiss={dismissSuccess}
        className="print:hidden"
        title="Proposal ready"
        description="Your proposal.pdf should download automatically. If email is set up on our side, we also sent a copy to your inbox."
      />
    </Section>
  );
}
