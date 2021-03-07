load("@npm//@bazel/typescript:index.bzl", "ts_project")

ts_project(
    name = "testing",
    testonly = 1,
    srcs = ["test_server.ts"],
    tsconfig = "//:tsconfig_node",
    visibility = ["//test/integration:__subpackages__"],
    deps = [
        "@npm//@types/isomorphic-fetch",
        "@npm//@types/node",
        "@npm//isomorphic-fetch",
        "@npm//tslib",
    ],
)
