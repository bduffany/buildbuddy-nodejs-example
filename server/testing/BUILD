load("//:defs.bzl", "ts_node_project")

ts_node_project(
    name = "testing",
    testonly = 1,
    srcs = ["test_server.ts"],
    data = ["//server"],
    visibility = ["//test/integration:__subpackages__"],
    deps = [
        "@npm//@types/isomorphic-fetch",
        "@npm//@types/node",
        "@npm//isomorphic-fetch",
        "@npm//tslib",
    ],
)
