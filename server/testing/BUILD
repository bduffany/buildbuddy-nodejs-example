load("@npm//@bazel/typescript:index.bzl", "ts_project")

ts_project(
    name = "testing",
    testonly = 1,
    srcs = ["test_server.ts"],
    composite = True,
    data = ["//server:main"],
    extends = "//:tsconfig_node",
    tsconfig = ":tsconfig.json",
    # TODO: Re-enable validation once https://github.com/bazelbuild/rules_nodejs/pull/2512
    # is merged and released
    validate = False,
    visibility = ["//test/integration:__subpackages__"],
    deps = [
        "@npm//@types/isomorphic-fetch",
        "@npm//@types/node",
        "@npm//isomorphic-fetch",
        "@npm//tslib",
    ],
)
