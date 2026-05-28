"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { validateContactForm } from "@/lib/helpers";

const initialForm = {
  name: "",
  company_name: "",
  user_email: "",
  mobile_number: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { valid, errors: validationErrors } = validateContactForm(form);

    if (!valid) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    setErrors({});
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
        throw new Error(data.error || "Unable to send message right now.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setSubmitError(error?.message || "Unable to send message right now.");
      setStatus("error");
    }
  };

  return (
    <Section variant="default" id="contact">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 text-primary-700 px-4 py-1.5 text-sm font-medium w-fit">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 max-w-sm">
                Let&apos;s build something great together
              </h2>
              <p className="max-w-sm text-neutral-600 leading-relaxed">
                Tell us about your project. We typically respond within 24 hours and offer a free 30-minute discovery call.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-4 mt-2"
            >
              {[
                {
                  icon: "mdi:email-outline",
                  label: "Email",
                  value: "contact@webfudge.in",
                  href: "mailto:contact@webfudge.in",
                },
                {
                  icon: "mdi:phone-outline",
                  label: "Phone",
                  value: "+91 7385302967",
                  href: "tel:+917385302967",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 text-neutral-600 hover:text-primary transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <Icon icon={item.icon} className="w-4 h-4" aria-hidden />
                  </span>
                  <span className="text-sm">{item.value}</span>
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            {status === "success" ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-10 flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">Thanks for contacting us!</h3>
                  <p className="text-sm text-neutral-500">
                    We&apos;ll get back to you soon.
                  </p>
                </div>
                <Button variant="secondary" size="sm" onClick={() => setStatus("idle")}>
                  Send another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-3xl border border-neutral-100 bg-white p-8 sm:p-10 flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    name="name"
                    placeholder="First Name Last Name"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                    className="[&_input]:rounded-xl [&_input]:py-3.5 [&_input]:border-neutral-200 [&_label]:text-neutral-900"
                  />
                  <Input
                    label="Company Name"
                    name="company_name"
                    placeholder="ABC Limited"
                    value={form.company_name}
                    onChange={handleChange}
                    error={errors.company_name}
                    required
                    className="[&_input]:rounded-xl [&_input]:py-3.5 [&_input]:border-neutral-200 [&_label]:text-neutral-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    label="Email Address"
                    name="user_email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.user_email}
                    onChange={handleChange}
                    error={errors.user_email}
                    required
                    className="[&_input]:rounded-xl [&_input]:py-3.5 [&_input]:border-neutral-200 [&_label]:text-neutral-900"
                  />
                  <Input
                    label="Contact Number"
                    name="mobile_number"
                    type="tel"
                    placeholder="+91"
                    value={form.mobile_number}
                    onChange={handleChange}
                    error={errors.mobile_number}
                    required
                    className="[&_input]:rounded-xl [&_input]:py-3.5 [&_input]:border-neutral-200 [&_label]:text-neutral-900"
                  />
                </div>

                <Input
                  label="Message"
                  name="message"
                  multiline
                  rows={5}
                  placeholder="Tell us about your project, goals, and timeline…"
                  value={form.message}
                  onChange={handleChange}
                  className="[&_textarea]:rounded-xl [&_textarea]:py-3.5 [&_textarea]:border-neutral-200 [&_label]:text-neutral-900"
                />

                {status === "error" && (
                  <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">
                    {submitError || "Something went wrong. Please try again or email us directly."}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full rounded-full"
                  disabled={status === "submitting"}
                  showIcon={status !== "submitting"}
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
