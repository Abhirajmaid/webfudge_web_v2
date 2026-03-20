import { OPTIONS } from "./questionnaireConfig";

function val(s) {
  const t = (s ?? "").trim();
  return t || "—";
}

function fromIds(ids, list) {
  if (!ids?.length) return "—";
  return ids
    .map((id) => list.find((o) => o.id === id)?.label ?? id)
    .join(", ");
}

function Row({ label, children }) {
  return (
    <div className="break-inside-avoid border-b border-neutral-200 py-2.5 last:border-0">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-neutral-500">
        {label}
      </p>
      <p className="mt-1 whitespace-pre-wrap text-sm text-neutral-900">{children}</p>
    </div>
  );
}

function Block({ title, children }) {
  return (
    <section className="mb-8 break-inside-avoid">
      <h3 className="mb-3 border-b border-neutral-900 pb-2 font-serif text-lg italic text-neutral-900">
        {title}
      </h3>
      <div className="space-y-0">{children}</div>
    </section>
  );
}

/**
 * Full answer summary — visible only when printing (see parent print:hidden siblings).
 */
export default function QuestionnairePrintSummary({ form }) {
  const existing =
    form.existingLogo === "yes"
      ? "Yes"
      : form.existingLogo === "no"
        ? "No"
        : "—";

  return (
    <div className="questionnaire-print-summary text-neutral-900">
      <header className="mb-10 border-b-2 border-neutral-900 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
          Webfudge — Brand identity
        </p>
        <h1 className="mt-2 font-serif text-3xl italic">
          Branding &amp; Logo Discovery Questionnaire
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-neutral-600">
          Exported answers (draft). File attachments are not included in this summary.
        </p>
      </header>

      <Block title="1. Basic information">
        <Row label="Business name">{val(form.businessName)}</Row>
        <Row label="Tagline">{val(form.tagline)}</Row>
        <Row label="Website">{val(form.website)}</Row>
        <Row label="Industry / niche">{val(form.industryNiche)}</Row>
        <Row label="Contact person">{val(form.contactName)}</Row>
        <Row label="Contact email">{val(form.contactEmail)}</Row>
        <Row label="Contact phone">{val(form.contactPhone)}</Row>
      </Block>

      <Block title="2. Business overview">
        <Row label="What does your business do?">{val(form.businessWhat)}</Row>
        <Row label="Products / services">{val(form.businessProducts)}</Row>
        <Row label="Problem you are solving">{val(form.businessProblem)}</Row>
        <Row label="What makes you unique?">{val(form.businessUnique)}</Row>
      </Block>

      <Block title="3. Target audience">
        <Row label="Age group">{val(form.audienceAge)}</Row>
        <Row label="Gender">{val(form.audienceGender)}</Row>
        <Row label="Location">{val(form.audienceLocation)}</Row>
        <Row label="Income level">{val(form.audienceIncome)}</Row>
        <Row label="Ideal customer">{val(form.audienceIdealCustomer)}</Row>
        <Row label="Customers to attract">{val(form.audienceAttract)}</Row>
        <Row label="Brand feeling">{val(form.audienceBrandFeeling)}</Row>
      </Block>

      <Block title="4. Brand personality">
        <Row label="Traits">
          {fromIds(form.brandPersonality, OPTIONS.brandPersonality)}
        </Row>
        <Row label="Brand as a person">{val(form.brandAsPerson)}</Row>
      </Block>

      <Block title="5. Vision & goals">
        <Row label="Long-term vision">{val(form.visionLongTerm)}</Row>
        <Row label="3–5 year goal">{val(form.vision35Year)}</Row>
        <Row label="Primary intent">
          {fromIds(form.brandGoals, OPTIONS.brandGoals)}
        </Row>
      </Block>

      <Block title="6. Competitor analysis">
        <Row label="Competitors">{val(form.competitors)}</Row>
        <Row label="Likes about competitors">{val(form.competitorsLikes)}</Row>
        <Row label="Dislikes">{val(form.competitorsDislikes)}</Row>
        <Row label="Differentiation">{val(form.competitorsDifferentiation)}</Row>
      </Block>

      <Block title="7. Logo preferences">
        <Row label="Existing logo?">{existing}</Row>
        <Row label="Current logo file">{val(form.logoFileName)}</Row>
        <Row label="Logo format interests">
          {fromIds(form.logoFormats, OPTIONS.logoFormats)}
        </Row>
        <Row label="Logo ideas">{val(form.logoIdeas)}</Row>
      </Block>

      <Block title="8. Design style">
        <Row label="Style directions">
          {fromIds(form.designStyles, OPTIONS.designStyles)}
        </Row>
        <Row label="Design feeling">{val(form.designFeeling)}</Row>
      </Block>

      <Block title="9. Color preferences">
        <Row label="Preferred colors">{val(form.colorsPreferred)}</Row>
        <Row label="Colors to avoid">{val(form.colorsAvoid)}</Row>
        <Row label="Existing brand colors">{val(form.colorsExisting)}</Row>
      </Block>

      <Block title="10. Typography">
        <Row label="Type directions">
          {fromIds(form.typographyStyles, OPTIONS.typography)}
        </Row>
        <Row label="Typography references">{val(form.typographyReferences)}</Row>
      </Block>

      <Block title="11. Inspiration">
        <Row label="Reference brands / logos">{val(form.inspirationBrands)}</Row>
        <Row label="What you like in them">{val(form.inspirationLikes)}</Row>
      </Block>

      <Block title="12. Logo usage">
        <Row label="Touchpoints">
          {fromIds(form.logoUsage, OPTIONS.logoUsage)}
        </Row>
      </Block>

      <Block title="13. Deliverables">
        <Row label="Required">
          {fromIds(form.deliverables, OPTIONS.deliverables)}
        </Row>
      </Block>

      <Block title="14. Timeline & budget">
        <Row label="Timeline">{val(form.timeline)}</Row>
        <Row label="Budget">{val(form.budget)}</Row>
      </Block>

      <Block title="15. Additional notes">
        <Row label="Extra information">{val(form.notesExtra)}</Row>
        <Row label="Restrictions">{val(form.notesRestrictions)}</Row>
      </Block>
    </div>
  );
}
