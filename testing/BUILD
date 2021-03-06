load("@npm//@bazel/typescript:index.bzl", "ts_library")

ts_library(
    name = "server",
    testonly = 1,
    srcs = ["server.ts"],
    visibility = ["//test/integration:__subpackages__"],
    deps = [
        "@npm//@types/isomorphic-fetch",
        "@npm//@types/node",
        "@npm//isomorphic-fetch",
        "@npm//tslib",
    ],
)
