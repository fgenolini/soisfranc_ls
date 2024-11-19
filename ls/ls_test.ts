import { assertEquals } from "jsr:@std/assert";
import { tree } from "./mod.ts";

Deno.test("dir with one file test", async () => {
  // Expect the test to be run from the root of the git repo, not the ls directory
  const actual = await tree("ls/one_file/");
  assertEquals(actual, ["","one_file.txt"]);
});