import { assertEquals } from "jsr:@std/assert";
import { tree } from "./mod.ts";
import { exists } from "jsr:@std/fs/exists";

Deno.test("dir with one file test", async () => {
  const e = await exists("./one_file", { isDirectory: true });
  if (e) {
    // Run from the "ls" directory, not the root of the git repo
    const actual = await tree("./one_file/");
    assertEquals(actual, ["", "one_file.txt"]);
  } else {
    // Run from the root of the git repo, not the "ls" directory
    const actual = await tree("ls/one_file/");
    assertEquals(actual, ["", "one_file.txt"]);
  }
});
