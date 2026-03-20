"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/helpers";
import SectionWrapper from "../branding-questionnaire/form/SectionWrapper";
import InputField from "../branding-questionnaire/form/InputField";
import TextAreaField from "../branding-questionnaire/form/TextAreaField";
import CheckboxGroup from "../branding-questionnaire/form/CheckboxGroup";
import RadioGroup from "../branding-questionnaire/form/RadioGroup";
import { STEPS, OPTIONS } from "./websiteQuestionnaireConfig";
import WebsiteQuestionnaireShareBar from "./WebsiteQuestionnaireShareBar";
import WebsiteQuestionnairePrintSummary from "./WebsiteQuestionnairePrintSummary";

function getInitialFormState() {
  return {
    businessName: "",
    websiteExisting: "",
    industry: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
    websiteTypes: [],
    mainGoals: [],
    oneLineGoal: "",
    audienceWho: "",
    audienceAction: "",
    audienceProblem: "",
    hasSitemap: "",
    sitemapFile: null,
    sitemapFileName: "",
    requiredPages: [],
    customPages: "",
    features: [],
    customFunctionality: "",
    brandGuidelines: "",
    preferredStyle: [],
    websitesLike: "",
    designLikes: "",
    contentReady: "",
    contentProvide: [],
    contentServices: [],
    preferredTech: "",
    techNeeds: [],
    crm: "",
    emailMarketing: "",
    paymentGatewayIntegration: "",
    thirdPartyTools: "",
    needSeoSetup: "",
    runAds: [],
    trackingSetup: [],
    expectedTraffic: "",
    performanceNeeds: [],
    launchDate: "",
    budgetRange: "",
    ongoingSupport: "",
    contentManager: "",
    privacyPolicyNeeded: "",
    termsNeeded: "",
    gdprNotes: "",
    successMetrics: [],
    additionalNotes: "",
    constraints: "",
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
        "fixed bottom-6 left-1/2 z-[100] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 animate-fade-in rounded-2xl border border-neutral-200 bg-neutral-900 px-5 py-4 text-center text-sm text-white shadow-lg md:left-auto md:right-8 md:translate-x-0 md:text-left print:hidden",
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

export default function WebsiteQuestionnaire({
  serviceSlug = "website-landing-page-development",
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

  const handleSitemapFile = (e) => {
    const file = e.target.files?.[0] ?? null;
    setForm((prev) => ({
      ...prev,
      sitemapFile: file,
      sitemapFileName: file ? file.name : "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmitError(null);
    setIsSubmitting(true);

    const payload = {
      ...form,
      sitemapFile: form.sitemapFile
        ? {
            name: form.sitemapFile.name,
            size: form.sitemapFile.size,
            type: form.sitemapFile.type,
          }
        : null,
    };

    try {
      const res = await fetch("/api/generate-proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ proposalType: "website", data: payload }),
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

  const showEcommerceHint = form.websiteTypes.includes("ecommerce");

  const stepContent = (() => {
    switch (step.id) {
      case 1:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="How we reach you and context for the build."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <InputField
                label="Business name"
                value={form.businessName}
                onChange={update("businessName")}
                placeholder="Company name"
              />
              <InputField
                label="Website (if existing)"
                type="url"
                value={form.websiteExisting}
                onChange={update("websiteExisting")}
                placeholder="https://"
              />
              <InputField
                label="Industry"
                value={form.industry}
                onChange={update("industry")}
                placeholder="e.g. B2B SaaS, retail"
              />
              <InputField
                label="Contact person"
                value={form.contactPerson}
                onChange={update("contactPerson")}
                placeholder="Full name"
              />
              <InputField
                label="Email"
                type="email"
                value={form.contactEmail}
                onChange={update("contactEmail")}
                placeholder="you@company.com"
              />
              <InputField
                label="Phone"
                type="tel"
                value={form.contactPhone}
                onChange={update("contactPhone")}
                placeholder="+1 …"
              />
            </div>
          </SectionWrapper>
        );
      case 2:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Scope and outcomes — this keeps revisions predictable."
          >
            <CheckboxGroup
              label="What type of website do you need?"
              options={OPTIONS.websiteTypes}
              value={form.websiteTypes}
              onChange={update("websiteTypes")}
            />
            {showEcommerceHint && (
              <p className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-600">
                E-commerce selected — we&apos;ll align on products, payments, and fulfillment in discovery.
              </p>
            )}
            <CheckboxGroup
              label="Main goal of this website"
              options={OPTIONS.mainGoals}
              value={form.mainGoals}
              onChange={update("mainGoals")}
            />
            <TextAreaField
              label="In one line: what should this website achieve for your business?"
              value={form.oneLineGoal}
              onChange={update("oneLineGoal")}
              placeholder="Primary outcome you need from this build…"
            />
          </SectionWrapper>
        );
      case 3:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Who we design and write for."
          >
            <TextAreaField
              label="Who will use this website?"
              value={form.audienceWho}
              onChange={update("audienceWho")}
              placeholder="Roles, segments, regions…"
            />
            <TextAreaField
              label="What action do you want them to take?"
              value={form.audienceAction}
              onChange={update("audienceAction")}
              placeholder="Call, form fill, purchase, sign up…"
            />
            <TextAreaField
              label="What problem are they trying to solve?"
              value={form.audienceProblem}
              onChange={update("audienceProblem")}
              placeholder="Jobs-to-be-done, pain points…"
            />
          </SectionWrapper>
        );
      case 4:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Structure informs timeline and estimate."
          >
            <RadioGroup
              label="Do you have a sitemap?"
              name="hasSitemap"
              options={[
                { id: "yes", label: "Yes" },
                { id: "no", label: "No" },
              ]}
              value={form.hasSitemap}
              onChange={update("hasSitemap")}
            />
            {form.hasSitemap === "yes" && (
              <div className="space-y-2">
                <span className="text-sm font-medium text-neutral-800">Attach sitemap (optional)</span>
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50/50 px-4 py-8 text-center text-sm text-neutral-600">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.txt,.md,.png,.jpg,.svg"
                    className="sr-only"
                    onChange={handleSitemapFile}
                  />
                  <span className="font-medium text-neutral-800">
                    {form.sitemapFileName || "Click to upload"}
                  </span>
                </label>
              </div>
            )}
            <CheckboxGroup
              label="Required pages"
              options={OPTIONS.requiredPages}
              value={form.requiredPages}
              onChange={update("requiredPages")}
            />
            <TextAreaField
              label="Any custom pages?"
              value={form.customPages}
              onChange={update("customPages")}
              placeholder="URLs, names, or brief descriptions…"
            />
          </SectionWrapper>
        );
      case 5:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Features drive architecture and integrations."
          >
            <CheckboxGroup
              label="Select required features"
              options={OPTIONS.features}
              value={form.features}
              onChange={update("features")}
            />
            <TextAreaField
              label="Any custom functionality?"
              value={form.customFunctionality}
              onChange={update("customFunctionality")}
              placeholder="Workflows, calculators, portals…"
            />
          </SectionWrapper>
        );
      case 6:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Visual and reference direction."
          >
            <RadioGroup
              label="Do you have brand guidelines?"
              name="brandGuidelines"
              options={[
                { id: "yes", label: "Yes" },
                { id: "no", label: "No" },
              ]}
              value={form.brandGuidelines}
              onChange={update("brandGuidelines")}
            />
            <CheckboxGroup
              label="Preferred style"
              options={OPTIONS.preferredStyle}
              value={form.preferredStyle}
              onChange={update("preferredStyle")}
            />
            <InputField
              label="Websites you like (links)"
              value={form.websitesLike}
              onChange={update("websitesLike")}
              placeholder="https:// …"
            />
            <TextAreaField
              label="What do you like about them?"
              value={form.designLikes}
              onChange={update("designLikes")}
              placeholder="Layout, tone, motion, clarity…"
            />
          </SectionWrapper>
        );
      case 7:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Content readiness affects schedule."
          >
            <RadioGroup
              label="Do you have content ready?"
              name="contentReady"
              options={[
                { id: "yes", label: "Yes" },
                { id: "no", label: "No (need content writing)" },
              ]}
              value={form.contentReady}
              onChange={update("contentReady")}
            />
            <CheckboxGroup
              label="You will provide"
              options={OPTIONS.contentProvide}
              value={form.contentProvide}
              onChange={update("contentProvide")}
            />
            <CheckboxGroup
              label="You need"
              options={OPTIONS.contentServices}
              value={form.contentServices}
              onChange={update("contentServices")}
            />
          </SectionWrapper>
        );
      case 8:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Helps us propose the right stack."
          >
            <TextAreaField
              label="Any preferred technology or constraints?"
              value={form.preferredTech}
              onChange={update("preferredTech")}
              placeholder="Hosting, compliance, in-house stack…"
            />
            <CheckboxGroup
              label="Direction"
              options={OPTIONS.techNeeds}
              value={form.techNeeds}
              onChange={update("techNeeds")}
            />
          </SectionWrapper>
        );
      case 9:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Tools we’ll connect or replace."
          >
            <InputField label="CRM (which one?)" value={form.crm} onChange={update("crm")} />
            <InputField
              label="Email marketing (e.g. Mailchimp)"
              value={form.emailMarketing}
              onChange={update("emailMarketing")}
            />
            <InputField
              label="Payment gateway"
              value={form.paymentGatewayIntegration}
              onChange={update("paymentGatewayIntegration")}
            />
            <TextAreaField
              label="Other third-party tools"
              value={form.thirdPartyTools}
              onChange={update("thirdPartyTools")}
              placeholder="Analytics, support, LMS, APIs…"
            />
          </SectionWrapper>
        );
      case 10:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Measurement and growth hooks."
          >
            <RadioGroup
              label="Do you need SEO setup?"
              name="needSeoSetup"
              options={[
                { id: "yes", label: "Yes" },
                { id: "no", label: "No" },
              ]}
              value={form.needSeoSetup}
              onChange={update("needSeoSetup")}
            />
            <CheckboxGroup
              label="Will you run ads on this website?"
              options={OPTIONS.runAds}
              value={form.runAds}
              onChange={update("runAds")}
            />
            <CheckboxGroup
              label="Tracking setup"
              options={OPTIONS.trackingSetup}
              value={form.trackingSetup}
              onChange={update("trackingSetup")}
            />
          </SectionWrapper>
        );
      case 11:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Scale and non-functional requirements."
          >
            <InputField
              label="Expected traffic volume"
              value={form.expectedTraffic}
              onChange={update("expectedTraffic")}
              placeholder="e.g. 5K MAU, launch spike…"
            />
            <CheckboxGroup
              label="Do you need"
              options={OPTIONS.performanceNeeds}
              value={form.performanceNeeds}
              onChange={update("performanceNeeds")}
            />
          </SectionWrapper>
        );
      case 12:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Rough ranges keep proposals realistic."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <InputField
                label="Expected launch date"
                value={form.launchDate}
                onChange={update("launchDate")}
                placeholder="Month / quarter / hard date"
              />
              <InputField
                label="Budget range"
                value={form.budgetRange}
                onChange={update("budgetRange")}
                placeholder="Ballpark or bracket"
              />
            </div>
          </SectionWrapper>
        );
      case 13:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Post-launch ownership."
          >
            <RadioGroup
              label="Do you need ongoing support?"
              name="ongoingSupport"
              options={[
                { id: "yes", label: "Yes" },
                { id: "no", label: "No" },
              ]}
              value={form.ongoingSupport}
              onChange={update("ongoingSupport")}
            />
            <RadioGroup
              label="Who will manage content after launch?"
              name="contentManager"
              options={[
                { id: "client", label: "Client" },
                { id: "webfudge", label: "Webfudge" },
              ]}
              value={form.contentManager}
              onChange={update("contentManager")}
            />
          </SectionWrapper>
        );
      case 14:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="Policies and compliance."
          >
            <RadioGroup
              label="Privacy policy needed?"
              name="privacyPolicyNeeded"
              options={[
                { id: "yes", label: "Yes" },
                { id: "no", label: "No" },
              ]}
              value={form.privacyPolicyNeeded}
              onChange={update("privacyPolicyNeeded")}
            />
            <RadioGroup
              label="Terms & conditions needed?"
              name="termsNeeded"
              options={[
                { id: "yes", label: "Yes" },
                { id: "no", label: "No" },
              ]}
              value={form.termsNeeded}
              onChange={update("termsNeeded")}
            />
            <TextAreaField
              label="GDPR / data compliance notes"
              value={form.gdprNotes}
              onChange={update("gdprNotes")}
              placeholder="Regions, data types, processors…"
            />
          </SectionWrapper>
        );
      case 15:
        return (
          <SectionWrapper
            step={step.id}
            title={step.title}
            description="How we’ll judge success together."
          >
            <CheckboxGroup
              label="Success metrics"
              options={OPTIONS.successMetrics}
              value={form.successMetrics}
              onChange={update("successMetrics")}
            />
          </SectionWrapper>
        );
      case 16:
        return (
          <>
            <SectionWrapper
              step={step.id}
              title={step.title}
              description="Final context, edge cases, or must-haves."
            >
              <TextAreaField
                label="Anything else we should know?"
                value={form.additionalNotes}
                onChange={update("additionalNotes")}
              />
              <TextAreaField
                label="Constraints or requirements"
                value={form.constraints}
                onChange={update("constraints")}
                placeholder="Legal, brand, technical…"
              />
            </SectionWrapper>
            <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center md:p-10 print:hidden">
              <p className="mx-auto max-w-xl font-serif text-xl italic leading-relaxed text-neutral-800 md:text-2xl">
                This form helps us build a high-performing website, not just a design. Please answer
                thoughtfully.
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
      id="website-questionnaire"
      className="questionnaire-section !py-14 lg:!py-20 print:!bg-white print:!py-8"
    >
      <Container size="wide">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-8 text-sm text-neutral-500 print:hidden">
            <Link href="/services" className="hover:text-neutral-900">
              Services
            </Link>
            <span className="mx-2 text-neutral-300">/</span>
            <Link href={`/services/${serviceSlug}`} className="hover:text-neutral-900">
              Website &amp; Landing Page Development
            </Link>
            <span className="mx-2 text-neutral-300">/</span>
            <span className="text-neutral-900">Questionnaire</span>
          </nav>

          <header className="mb-10 space-y-6 print:hidden md:mb-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0 max-w-2xl space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Website &amp; landing pages
                </p>
                <h2 className="font-serif text-3xl italic text-neutral-900 md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                  Website Development Discovery Questionnaire
                </h2>
                <p className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700">
                  This form helps us build a <strong className="font-medium">high-performing website</strong>,
                  not just a design. Please answer thoughtfully — it controls scope, reduces revisions, and
                  aligns business goals with design and development.
                </p>
                <p className="text-base leading-relaxed text-neutral-600">
                  A structured briefing so we can align on IA, features, stack, and delivery before we build.
                </p>
              </div>
              <WebsiteQuestionnaireShareBar className="w-full shrink-0 lg:max-w-[340px] xl:max-w-[380px]" />
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
                      Step <span className="font-semibold text-neutral-900">{stepIndex + 1}</span> of{" "}
                      {totalSteps}
                      <span className="hidden sm:inline">
                        {" "}
                        — <span className="text-neutral-900">{step.title}</span>
                      </span>
                    </p>
                    <span className="text-xs font-medium tabular-nums text-neutral-500">{progress}%</span>
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
                  <label className="sr-only" htmlFor="website-questionnaire-step">
                    Jump to section
                  </label>
                  <select
                    id="website-questionnaire-step"
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
                  <WebsiteQuestionnairePrintSummary form={form} />
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
                      onClick={() => setStepIndex((i) => Math.min(totalSteps - 1, i + 1))}
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
        title="Proposal ready"
        description="Your proposal.pdf should download automatically. If email is set up on our side, we also sent a copy to your inbox."
      />
    </Section>
  );
}
