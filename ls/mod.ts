/**
 * @module
 * This module exports the function tree() to list files in a directory
 * 
 * @example
 * ```ts
 * import { tree } from "jsr:@soisfranc/ls";
 * import * as Plot from "npm:@observablehq/plot";
 *
 * const files = await tree("../..");
 * Plot.plot({
 *   marks: [ Plot.tree(files) ],
 *   axis: null,
 *   margin: 100,
 *   document
 * });
 * ```
 */

// Copied from the deno presentation on YouTube "Announcing Deno 2"

// This module can be published to the jsr
// and then used in a Jupyter notebook
// https://docs.deno.com/runtime/reference/cli/jupyter/

import { walk } from "jsr:@std/fs@1";
import { relative } from "node:path";

/** Directory listing, recusively for all files */
export async function tree(dir: string): Promise<string[]> {
  const out = [];
  for await (const entry of walk(dir)) {
    // To allow plotting to work, replace DOS \ with Unix /
    out.push(relative(dir, entry.path).replaceAll("\\", "/"));
  }
  return out;
}

if (import.meta.main) {
  const files = await tree(Deno.args[0]);

  // Use CSS to change the console background colour
  console.log("%c" + files.join("\n"), "background-color: darkblue");
}
