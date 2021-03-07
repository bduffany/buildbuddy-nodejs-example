load("@npm//@bazel/jasmine:index.bzl", "jasmine_node_test")
load("@npm//@bazel/typescript:index.bzl", "ts_project")

ts_project(
    name = "lib",
    testonly = 1,
    srcs = ["initial_html_test.ts"],
    tsconfig = "//:tsconfig_node",
    deps = [
        "//server/testing",
        "@npm//@types/jasmine",
    ],
)

jasmine_node_test(
    name = "initial_html_test",
    deps = [":lib"],
)
