workspace(
    name = "nodejs_example",
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "2b2004784358655f334925e7eadc7ba80f701144363df949b3293e1ae7a2fb7b",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.4.0/rules_nodejs-5.4.0.tar.gz"],
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
    sha256 = "206a89aae3a04831123b43962a3864e8ab1652b703c4af58d84b04174360137d",
    strip_prefix = "rules_swc-0.4.0",
    url = "https://github.com/aspect-build/rules_swc/archive/refs/tags/v0.4.0.tar.gz",
)

load("@aspect_rules_swc//swc:dependencies.bzl", "rules_swc_dependencies")

rules_swc_dependencies()

load("@aspect_rules_swc//swc:repositories.bzl", "swc_register_toolchains")

swc_register_toolchains(
    name = "swc",
    swc_version = "v1.2.141",
)

# gRPC (for making client -> server requests)

http_archive(
    name = "rules_proto_grpc",
    sha256 = "507e38c8d95c7efa4f3b1c0595a8e8f139c885cb41a76cab7e20e4e67ae87731",
    strip_prefix = "rules_proto_grpc-4.1.1",
    urls = ["https://github.com/rules-proto-grpc/rules_proto_grpc/archive/4.1.1.tar.gz"],
)

load("@rules_proto_grpc//:repositories.bzl", "rules_proto_grpc_repos", "rules_proto_grpc_toolchains")

rules_proto_grpc_toolchains()

rules_proto_grpc_repos()

load("@rules_proto//proto:repositories.bzl", "rules_proto_dependencies", "rules_proto_toolchains")

rules_proto_dependencies()

rules_proto_toolchains()

load("@rules_proto_grpc//js:repositories.bzl", rules_proto_grpc_js_repos = "js_repos")

rules_proto_grpc_js_repos()
