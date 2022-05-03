load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")
load("//:defs.bzl", "ts_node_project")

package(default_visibility = ["//visibility:public"])

ts_node_project(
    name = "lib",
    srcs = glob(["*.ts"]),
    deps = [
        "//proto:greeting_node_proto",
        "@npm//@types/cors",
        "@npm//@types/express",
        "@npm//@types/google-protobuf",
        "@npm//@types/node",
        "@npm//chalk",
        "@npm//cors",
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
    env = select({
        "//:fastbuild": {"NODE_ENV": "development"},
        "//conditions:default": {"NODE_ENV": "production"},
    }),
    tags = [
        "ibazel_live_reload",
        "ibazel_notify_changes",
    ],
)
