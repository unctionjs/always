/* eslint-disable no-magic-numbers */
import {test} from "tap"

import always from "./index"

test(({same, end}) => {
  same(
    always("a")(),
    "a"
  )

  end()
})

test(({same, end}) => {
  same(
    always(true)(),
    true
  )

  end()
})

test(({same, end}) => {
  same(
    always(null)(),
    null
  )

  end()
})

test(({same, end}) => {
  same(
    always("a")(0),
    "a"
  )

  end()
})

test(({same, end}) => {
  same(
    always(true)("a"),
    true
  )

  end()
})

test(({same, end}) => {
  same(
    always(null)(false),
    null
  )

  end()
})
