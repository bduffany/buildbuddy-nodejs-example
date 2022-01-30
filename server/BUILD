load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")
load("//:defs.bzl", "ts_project")

package(default_visibility = ["//visibility:public"])

ts_project(
    name = "lib",
    srcs = glob(["*.ts"]),
    deps = [
        "@npm//@types/express",
        "@npm//@types/node",
        "@npm//arg",
        "@npm//express",
        "@npm//tslib",
    ],
)

nodejs_binary(
    name = "server",
    data = [
        ":lib",
        "//app:app_bundle",
        "//static",
    ],
    entry_point = ":main.ts",
)
