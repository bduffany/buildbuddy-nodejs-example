load("@npm//@bazel/jasmine:index.bzl", "jasmine_node_test")
load("@npm//@bazel/typescript:index.bzl", "ts_library")

ts_library(
    name = "lib",
    testonly = 1,
    srcs = ["initial_html_test.ts"],
    deps = [
        "//testing:server",
        "@npm//@types/jasmine",
    ],
)

jasmine_node_test(
    name = "initial_html_test",
    deps = [
        ":lib",
        "//testing:server",
    ],
)
