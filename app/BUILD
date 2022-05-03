load("//:defs.bzl", "ts_project")
load("@npm//@bazel/esbuild:index.bzl", "esbuild")

package(default_visibility = ["//visibility:public"])

ts_project(
    name = "App",
    srcs = ["App.tsx"],
    deps = [
        "//proto:greeting_js_proto",
        "@npm//@types/google-protobuf",
        "@npm//@types/react",
        "@npm//react",
    ],
)

ts_project(
    name = "index",
    srcs = ["index.tsx"],
    deps = [
        ":App",
        "@npm//@types/react",
        "@npm//@types/react-dom",
        "@npm//react",
        "@npm//react-dom",
        "@npm//typescript",
    ],
)

esbuild(
    name = "app_bundle",
    args = {
        "resolveExtensions": [
            ".mjs",
            ".js",
        ],
    },
    define = select({
        "//:fastbuild": {"process.env.NODE_ENV": '"development"'},
        "//conditions:default": {"process.env.NODE_ENV": '"production"'},
    }),
    entry_points = ["index.tsx"],
    minify = select({
        "//:fastbuild": False,
        "//conditions:default": True,
    }),
    deps = [
        ":index",
    ],
)
