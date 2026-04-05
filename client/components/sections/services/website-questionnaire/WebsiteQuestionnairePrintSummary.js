import { OPTIONS } from "./websiteQuestionnaireConfig";

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

function yn(v) {
  if (v === "yes") return "Yes";
  if (v === "no") return "No";
  return "—";
}

function Row({ label, children }) {
  return (
    <div className="break-inside-avoid border-b border-neutral-200 py-2.5 last:border-0">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-neutral-500">{label}</p>
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
      <div>{children}</div>
    </section>
  );
}

export default function WebsiteQuestionnairePrintSummary({ form }) {
  return (
    <div className="text-neutral-900">
      <header className="mb-10 border-b-2 border-neutral-900 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Webfudge</p>
        <h1 className="mt-2 font-serif text-3xl italic">Website Development Discovery Questionnaire</h1>
        <p className="mt-3 max-w-2xl text-sm text-neutral-600">
          Exported answers (draft). Attachments referenced by filename only.
        </p>
      </header>

      <Block title="1. Basic information">
        <Row label="Business name">{val(form.businessName)}</Row>
        <Row label="Website (if existing)">{val(form.websiteExisting)}</Row>
        <Row label="Industry">{val(form.industry)}</Row>
        <Row label="Contact person">{val(form.contactPerson)}</Row>
        <Row label="Email">{val(form.contactEmail)}</Row>
        <Row label="Phone">{val(form.contactPhone)}</Row>
      </Block>

      <Block title="2. Project overview">
        <Row label="Website type">{fromIds(form.websiteTypes, OPTIONS.websiteTypes)}</Row>
        <Row label="Main goals">{fromIds(form.mainGoals, OPTIONS.mainGoals)}</Row>
        <Row label="What should this website achieve?">{val(form.oneLineGoal)}</Row>
      </Block>

      <Block title="3. Target audience">
        <Row label="Who will use this website?">{val(form.audienceWho)}</Row>
        <Row label="Desired action">{val(form.audienceAction)}</Row>
        <Row label="Problem they are solving">{val(form.audienceProblem)}</Row>
      </Block>

      <Block title="4. Pages & sitemap">
        <Row label="Sitemap ready?">{yn(form.hasSitemap)}</Row>
        <Row label="Sitemap file">{val(form.sitemapFileName)}</Row>
        <Row label="Required pages">{fromIds(form.requiredPages, OPTIONS.requiredPages)}</Row>
        <Row label="Custom pages">{val(form.customPages)}</Row>
      </Block>

      <Block title="5. Features & functionalities">
        <Row label="Features">{fromIds(form.features, OPTIONS.features)}</Row>
        <Row label="Custom functionality">{val(form.customFunctionality)}</Row>
      </Block>

      <Block title="6. Design direction">
        <Row label="Brand guidelines?">{yn(form.brandGuidelines)}</Row>
        <Row label="Preferred style">{fromIds(form.preferredStyle, OPTIONS.preferredStyle)}</Row>
        <Row label="Websites you like">{val(form.websitesLike)}</Row>
        <Row label="What you like about them">{val(form.designLikes)}</Row>
      </Block>

      <Block title="7. Content">
        <Row label="Content ready?">{yn(form.contentReady)}</Row>
        <Row label="You will provide">{fromIds(form.contentProvide, OPTIONS.contentProvide)}</Row>
        <Row label="You need">{fromIds(form.contentServices, OPTIONS.contentServices)}</Row>
      </Block>

      <Block title="8. Technology">
        <Row label="Preferred tech / notes">{val(form.preferredTech)}</Row>
        <Row label="Stack direction">{fromIds(form.techNeeds, OPTIONS.techNeeds)}</Row>
      </Block>

      <Block title="9. Integrations">
        <Row label="CRM">{val(form.crm)}</Row>
        <Row label="Email marketing">{val(form.emailMarketing)}</Row>
        <Row label="Payment gateway">{val(form.paymentGatewayIntegration)}</Row>
        <Row label="Third-party tools">{val(form.thirdPartyTools)}</Row>
      </Block>

      <Block title="10. SEO & marketing">
        <Row label="SEO setup needed?">{yn(form.needSeoSetup)}</Row>
        <Row label="Ads">{fromIds(form.runAds, OPTIONS.runAds)}</Row>
        <Row label="Tracking">{fromIds(form.trackingSetup, OPTIONS.trackingSetup)}</Row>
      </Block>

      <Block title="11. Performance & security">
        <Row label="Expected traffic">{val(form.expectedTraffic)}</Row>
        <Row label="Needs">{fromIds(form.performanceNeeds, OPTIONS.performanceNeeds)}</Row>
      </Block>

      <Block title="12. Timeline & budget">
        <Row label="Expected launch">{val(form.launchDate)}</Row>
        <Row label="Budget range">{val(form.budgetRange)}</Row>
      </Block>

      <Block title="13. Maintenance & support">
        <Row label="Ongoing support?">{yn(form.ongoingSupport)}</Row>
        <Row label="Content management after launch">
          {form.contentManager === "client"
            ? "Client"
            : form.contentManager === "webfudge"
              ? "Webfudge"
              : "—"}
        </Row>
      </Block>

      <Block title="14. Legal & compliance">
        <Row label="Privacy policy needed?">{yn(form.privacyPolicyNeeded)}</Row>
        <Row label="Terms & conditions?">{yn(form.termsNeeded)}</Row>
        <Row label="GDPR / data compliance">{val(form.gdprNotes)}</Row>
      </Block>

      <Block title="15. Success metrics">
        <Row label="How we measure success">{fromIds(form.successMetrics, OPTIONS.successMetrics)}</Row>
      </Block>

      <Block title="16. Additional notes">
        <Row label="Anything else">{val(form.additionalNotes)}</Row>
        <Row label="Constraints">{val(form.constraints)}</Row>
      </Block>
    </div>
  );
}
