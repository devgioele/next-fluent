# next-fluent

The most natural-sounding way to translate your Next.js apps.

Like [next-i18next](https://github.com/i18next/next-i18next),
but using [Fluent](https://projectfluent.org/),
the successor of [i18next](https://www.i18next.com/).

# WIP 🚧

This is a WIP and there are currently two main obstacles that I don't know how to solve:
- The first load JS is about 175 kB, which is unacceptably big
- The SSG example does not work

## Setup

*Coming soon...*

## How it works

Makes a bridge between [@fluent/react](https://github.com/projectfluent/fluent.js/tree/master/fluent-react)
and [Next.js](https://nextjs.org/) using [internationalized routing](https://nextjs.org/docs/advanced-features/i18n-routing).

Uses [cheerio](https://cheerio.js.org/) for the SSR of localized components
using [React Overlays](https://github.com/projectfluent/fluent.js/wiki/React-Overlays).
