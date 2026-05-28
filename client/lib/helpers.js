import { clsx } from "clsx";

/**
 * Merge class names conditionally — thin wrapper around clsx.
 */
export function cn(...inputs) {
  return clsx(inputs);
}

/**
 * Format a price as currency string.
 * @param {number|null} amount
 * @param {string} currency
 * @returns {string}
 */
export function formatPrice(amount, currency = "USD") {
  if (amount === null || amount === undefined) return "Custom";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Truncate a string to a given length and append ellipsis.
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(str, maxLength = 120) {
  if (!str) return "";
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trimEnd() + "…";
}

/**
 * Slugify a string.
 * @param {string} str
 * @returns {string}
 */
export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Validate an email address.
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Validate contact form fields (EmailJS — same rules as legacy site).
 * @param {{ name: string, company_name: string, user_email: string, mobile_number: string, message?: string }} fields
 * @returns {{ valid: boolean, errors: Record<string, string> }}
 */
export function validateContactForm(fields) {
  const errors = {};

  if (!fields.name || fields.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!fields.company_name || fields.company_name.trim().length < 1) {
    errors.company_name = "Please enter your company name.";
  }

  if (!fields.user_email || !isValidEmail(fields.user_email)) {
    errors.user_email = "Please enter a valid email address.";
  }

  const phoneDigits = String(fields.mobile_number || "").replace(/\D/g, "");
  if (!phoneDigits) {
    errors.mobile_number = "Please enter your contact number.";
  } else if (phoneDigits.length !== 10) {
    errors.mobile_number = "Please enter a valid 10-digit mobile number.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Stagger delay utility — returns CSS delay string for index n.
 * @param {number} index
 * @param {number} base - ms per step
 * @returns {string}
 */
export function staggerDelay(index, base = 100) {
  return `${index * base}ms`;
}

/**
 * Smooth scroll to an element by ID.
 * @param {string} id
 */
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
