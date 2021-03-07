load("@npm//@bazel/jasmine:index.bzl", "jasmine_node_test")
load("@npm//@bazel/typescript:index.bzl", "ts_project")

ts_project(
    name = "lib",
    testonly = 1,
    srcs = ["initial_html_test.ts"],
    extends = "//:tsconfig_node",
    tsconfig = ":tsconfig.json",
    # TODO: remove once https://github.com/bazelbuild/rules_nodejs/pull/2512
    # is merged and released
    validate = False,
    deps = [
        "//server/testing",
        "@npm//@types/jasmine",
    ],
)

jasmine_node_test(
    name = "initial_html_test",
    size = "small",
    deps = [":lib"],
)
