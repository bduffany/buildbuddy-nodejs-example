load("@npm//@bazel/rollup:index.bzl", "rollup_bundle")
load("@npm//@bazel/typescript:index.bzl", "ts_devserver", "ts_library")

package(default_visibility = ["//visibility:public"])

ts_library(
    name = "app",
    srcs = glob(["*.tsx"]),
    deps = [
        "@npm//@types/react",
        "@npm//@types/react-dom",
        "@npm//react",
        "@npm//react-dom",
        "@npm//typescript",
    ],
)

rollup_bundle(
    name = "app_bundle",
    config_file = "rollup.config.js",
    entry_point = ":app.tsx",
    deps = [
        ":app",
        "@npm//events",
        "@npm//rollup-plugin-commonjs",
        "@npm//rollup-plugin-node-resolve",
        "@npm//rollup-plugin-replace",
    ],
)

ts_devserver(
    name = "devserver",
    entry_module = "nodejs_example/app/app",
    port = 8083,
    deps = [
        ":app",
        ":umd_modules_for_devserver",
    ],
)

filegroup(
    name = "umd_modules_for_devserver",
    srcs = [
        "@npm//react:react__umd",
        "@npm//react-dom:react-dom__umd",
    ],
    visibility = ["//visibility:private"],
)
