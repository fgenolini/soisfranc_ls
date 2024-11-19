import { assertEquals } from "jsr:@std/assert";
import { tree } from "./mod.ts";

Deno.test("dir with one file test", async () => {
  const actual = await tree("one_file/");
  assertEquals(actual, ["","one_file.txt"]);
});