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
 * Validate a contact form payload.
 * @param {{ name: string, email: string, company: string, message: string }} fields
 * @returns {{ valid: boolean, errors: Record<string, string> }}
 */
export function validateContactForm(fields) {
  const errors = {};

  if (!fields.name || fields.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!fields.email || !isValidEmail(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!fields.message || fields.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
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
