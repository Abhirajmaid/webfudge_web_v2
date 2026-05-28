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

/** Optional +, country code (1–3 digits), then subscriber number (E.164, max 15 digits). */
const PHONE_DIGITS_PATTERN = /^(?:\d{10}|[1-9]\d{10,14})$/;

/**
 * @param {string} value
 * @returns {boolean}
 */
export function isValidPhoneNumber(value) {
  const digits = String(value || "").replace(/\D/g, "");
  return PHONE_DIGITS_PATTERN.test(digits);
}

/**
 * Validate contact form fields.
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

  const mobile = String(fields.mobile_number || "").trim();
  if (!mobile) {
    errors.mobile_number = "Please enter your contact number.";
  } else if (!isValidPhoneNumber(mobile)) {
    errors.mobile_number = "Please enter a valid phone number.";
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
