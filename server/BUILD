load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")
load("@npm//@bazel/typescript:index.bzl", "ts_project")

# tsconfig.node.json is used for anything running on node.
exports_files(
    srcs = ["tsconfig.node.json"],
    visibility = ["//server:__subpackages__"],
)

ts_project(
    name = "server",
    srcs = glob(["*.ts"]),
    tsconfig = "//:tsconfig_node",
    deps = [
        "@npm//@types/express",
        "@npm//@types/node",
        "@npm//arg",
        "@npm//express",
        "@npm//tslib",
    ],
)

SERVER_DATA = [
    ":server",
    "//static",
]

nodejs_binary(
    name = "main",
    data = SERVER_DATA + ["//app:app_bundle.js"],
    entry_point = ":main.ts",
)

# When running ts_devserver for the frontend, this server
# target should be used instead, since it does not include
# the app_bundle dependency (which is slow to build).
nodejs_binary(
    name = "main_dev",
    data = SERVER_DATA,
    entry_point = ":main.ts",
    templated_args = ["--use-devserver"],
)
