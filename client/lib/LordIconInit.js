"use client";

import { useEffect } from "react";
import { defineElement } from "@lordicon/element";

export default function LordIconInit() {
  useEffect(() => {
    defineElement();
  }, []);
  return null;
}
