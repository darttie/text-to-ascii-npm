#!/usr/bin/env node
import { createBanner } from "../src/banner.js";

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("Usage: text-banner <your-text>");
  process.exit(1);
}

const text = args.join(" ");
createBanner(text);