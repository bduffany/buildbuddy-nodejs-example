load("@npm//@bazel/typescript:index.bzl", "ts_config")

package(default_visibility = ["//visibility:public"])

# tsconfig_browser is used as the tsconfig for any TS code that
# runs in the browser when compiled.
ts_config(
    name = "tsconfig_browser",
    src = "tsconfig.browser.json",
    deps = ["tsconfig.base.json"],
)

# tsconfig_node is used as the tsconfig for any TS code that
# runs on node when compiled.
ts_config(
    name = "tsconfig_node",
    src = "tsconfig.node.json",
    deps = ["tsconfig.base.json"],
)
