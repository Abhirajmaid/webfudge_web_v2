"use client";

import { useEffect } from "react";

/**
 * @lordicon/element touches `document` at module load — must not be imported on the server.
 */
export default function LordIconInit() {
  useEffect(() => {
    let cancelled = false;
    import("@lordicon/element")
      .then(({ defineElement }) => {
        if (!cancelled) defineElement();
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);
  return null;
}
