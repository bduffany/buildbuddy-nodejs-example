workspace(
    name = "nodejs_example",
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "a09edc4ba3931a856a5ac6836f248c302d55055d35d36e390a0549799c33145b",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.0.2/rules_nodejs-5.0.2.tar.gz"],
)

load("@build_bazel_rules_nodejs//:repositories.bzl", "build_bazel_rules_nodejs_dependencies")

build_bazel_rules_nodejs_dependencies()

load("@rules_nodejs//nodejs:repositories.bzl", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "nodejs",
    node_version = "16.9.0",
)

load("@rules_nodejs//nodejs:yarn_repositories.bzl", "yarn_repositories")

yarn_repositories(
    name = "yarn",
    yarn_version = "1.22.10",
)

load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    symlink_node_modules = True,
    yarn_lock = "//:yarn.lock",
)

# esbuild (for bundling JS)

load("@build_bazel_rules_nodejs//toolchains/esbuild:esbuild_repositories.bzl", "esbuild_repositories")

esbuild_repositories(npm_repository = "npm")

# SWC (for transpiling TS -> JS)

http_archive(
    name = "aspect_rules_swc",
    sha256 = "b58c8f3681215af30842bc3eeec30c9d2047cdf63302bba7d2e86c55a5c77edf",
    strip_prefix = "rules_swc-0.3.1",
    url = "https://github.com/aspect-build/rules_swc/archive/v0.3.1.tar.gz",
)

load("@aspect_rules_swc//swc:dependencies.bzl", "rules_swc_dependencies")

rules_swc_dependencies()

load("@aspect_rules_swc//swc:repositories.bzl", "swc_register_toolchains")

swc_register_toolchains(
    name = "swc",
    swc_version = "v1.2.118",
)
