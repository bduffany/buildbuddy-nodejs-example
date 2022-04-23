# Bazel / Node.js / React / TypeScript / BuildBuddy template

This repository serves as a starter project for a Node.js / React / TypeScript app
built with Bazel and [BuildBuddy](https://buildbuddy.io).

## Technologies used

- [x] **Bazel**: Build system built and maintained by Google that enables
      **fast** and **correct** builds

- [x] **BuildBuddy**: Makes Bazel even faster and more useful:

  - Allows cached artifacts to be shared across developer machines (remote
    Bazel cache)
  - Enables massively parallel remote build execution, by running build
    actions in the cloud instead of locally
  - Provides a Web UI to view and share your build logs, details, timing profile, and much more.
  - Automatically runs Bazel tests and reports the results to GitHub,
    so that branches can only be merged if tests pass.

- [x] **rules_nodejs**: Bazel rules for frontend projects.

- [x] **TypeScript**: A language that extends JavaScript with types.

- [x] **React**: A popular frontend framework for building modern Web apps.

- [x] **nodejs**: Allows building server-side apps with JavaScript. In
      this example, the backend is also written in TypeScript.

- [x] **swc**: Used to transpile TypeScript to JavaScript. By default,
      the `ts_project` rule will use `tsc` to transpile TS to JS, but this
      project includes a macro in `//:defs.bzl` to use SWC instead. SWC
      is much faster than `tsc` but does not do type checking. Instead, type
      checking happens when running `bazel test //...`, via auto-generated
      `_typecheck_test` rules. See https://blog.aspect.dev/typescript-speedup

- [x] **esbuild**: Used to bundle and minify the resulting JS.

## How to use this template

Make sure you have `git` and `bazel` installed. Then:

1.  Make a copy of this repo (with `git clone`)

2.  Push your repo to GitHub (using your account or GitHub org).

3.  Set up BuildBuddy CI, so that BuildBuddy runs all tests on each
    push or pull request commit: https://app.buildbuddy.io/workflows/

4.  Highly recommended: set up branch protection rules to prevent code
    from being merged if it doesn't pass all tests.

## Running the server locally

Run `yarn dev` and then visit http://localhost:8082. If you make changes
to the app, the app will automatically be re-built, and any open pages will
be reloaded in the browser. This is done using [ibazel](https://github.com/bazelbuild/bazel-watcher).

## Running tests

Run `bazel test //...` to run tests.
