/* eslint-disable no-magic-numbers */
import always from "./index";

test(() => {
  expect(always("a")()).toEqual("a");
});

test(() => {
  expect(always(true)()).toEqual(true);
});

test(() => {
  expect(always(null)()).toEqual(null);
});

test(() => {
  expect(always("a")(0)).toEqual("a");
});

test(() => {
  expect(always(true)("a")).toEqual(true);
});

test(() => {
  expect(always(null)(false)).toEqual(null);
});
