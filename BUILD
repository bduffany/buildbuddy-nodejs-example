load("@npm//@bazel/typescript:index.bzl", "ts_config")

package(default_visibility = ["//visibility:public"])

exports_files(
    srcs = [
        ".swcrc",
    ],
)

# tsconfig is used as the tsconfig for any TS code that
# runs in the browser when compiled.
ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
)

# tsconfig_node is used as the tsconfig for any TS code that
# runs on node when compiled.
ts_config(
    name = "tsconfig_node",
    src = "tsconfig.node.json",
)

config_setting(
    name = "fastbuild",
    values = {"compilation_mode": "fastbuild"},
)
