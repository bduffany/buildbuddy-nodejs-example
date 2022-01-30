# Bazel / Node.js / React / TypeScript / BuildBuddy template

This repository serves as a starter project for a Node.js / React / TypeScript app
built with Bazel and [BuildBuddy](https://buildbuddy.io).

## Technologies used

- [x] **Bazel**: Build system built and maintained by Google that enables **fast**
      and **correct** builds

- [x] **BuildBuddy**: Makes Bazel _even faster_ for large, complex
      projects by allowing cached artifacts to be shared across developer
      machines (remote cache), and enabling massively parallel build
      execution. Also provides a nice UI for your builds so you can
      navigate build logs easily and visualize where all the time is being
      spent in your build.

- [x] **rules_nodejs**: Bazel rules for frontend projects. Includes a working setup of
      **ts_devserver** which allows you to make changes to your frontend code and see
      the changes immediately in your browser.

- [x] **TypeScript**, **React**, **esbuild**, **Node.js**, **express**:
      popular technology choices for building modern Web apps, each with a rich community.

## How to use this template

1.  Make a copy of this repo (with `git clone`)

2.  Set up GitHub secrets for your BuildBuddy organization following
    the [GitHub secrets for BuildBuddy](https://www.buildbuddy.io/docs/rbe-github-actions#github-secrets)
    section of the RBE guide. This will enable CI builds to run _privately_
    within your BuildBuddy organization. For this example repo, CI builds will
    fail until you set up these secrets.

3.  If you want commit statuses to appear in the GitHub UI (e.g. the green checkmark
    at the top of this repo page), be sure to link your BuildBuddy account to GitHub;
    see https://app.buildbuddy.io/settings/.

## Running the server locally

Run `yarn dev` and then visit http://localhost:8082.

The Web page will automatically refresh whenever you edit any frontend code,
and the server will automatically restart whenever you edit any server code.

## Running tests

Run `bazel test //...` to run tests. This will run integration tests under the
`//test` directory.
