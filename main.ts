import pino from "npm:pino";

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  pino().info("Hello World");
  pino().info("Add 2 + 3 =", add(2, 3));
  pino().info("Subtract 2 - 3 =", subtract(2, 3));
}
