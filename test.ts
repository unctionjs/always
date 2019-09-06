/* eslint-disable no-magic-numbers */
import always from "./index";

test("works", () => {
  expect(always("a")()).toEqual("a");
});

test("works", () => {
  expect(always(true)()).toEqual(true);
});

test("works", () => {
  expect(always(null)()).toEqual(null);
});

test("works", () => {
  expect(always("a")(0)).toEqual("a");
});

test("works", () => {
  expect(always(true)("a")).toEqual(true);
});

test("works", () => {
  expect(always(null)(false)).toEqual(null);
});
