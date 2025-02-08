#!/usr/bin/env node
import { createBanner, listFonts } from "../src/banner.js";
import fs from "fs";
import chalk from "chalk";

const params = ["--font", "--color", "--output"]

const args = process.argv.slice(2);
console.log(`args ${args}`);

if (args.length === 0) {
  console.log("Usage: text-banner <text> [--font <font-name>] [--list-fonts]");
  process.exit(1);
}

if (args.includes("--list-fonts")) {
  listFonts();
  process.exit(0);
}

const fontIndex = args.indexOf("--font");
const font = fontIndex !== -1 ? args[fontIndex + 1] : "Standard"; // Default font

const text = args.filter((arg, index, arr) => {
    return !params.includes(arg) && !params.includes(arr[index - 1]);
  }).join(" ");

const colorIndex = args.indexOf("--color");
const color = colorIndex !== -1 ? args[colorIndex + 1] : "blue"; // Default color


const banner = createBanner(text, font, color);

const outputIndex = args.indexOf("--output");
const outputFile = outputIndex !== -1 ? args[outputIndex + 1] : null;

console.log(`args2 ${font} ${color} ${outputFile}`);

if (outputFile) {
    fs.writeFileSync(outputFile, chalk[color](banner));
    console.log(`Banner saved to ${outputFile}`);
  } else {
    console.log(chalk[color](banner));
  }