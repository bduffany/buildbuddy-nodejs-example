load("@npm//@bazel/typescript:index.bzl", _ts_project = "ts_project")
load("@npm//@bazel/jasmine:index.bzl", "jasmine_node_test")
load("@npm//@bazel/esbuild:index.bzl", "esbuild")
load("@aspect_rules_swc//swc:swc.bzl", "swc_transpiler")

def _ts_base_project(name, srcs, **kwargs):
    _ts_project(
        name = name,
        srcs = srcs,
        composite = True,
        **kwargs
    )

def _swc(name, swcrc = "//:.swcrc", **kwargs):
    swc_transpiler(
        name = name,
        swcrc = swcrc,
        **kwargs
    )

def ts_project(tsconfig = "//:tsconfig", **kwargs):
    _ts_base_project(
        tsconfig = tsconfig,
        transpiler = _swc,
        **kwargs
    )

def ts_node_project(tsconfig = "//:tsconfig_node", **kwargs):
    _ts_base_project(
        tsconfig = tsconfig,
        **kwargs
    )

def ts_jasmine_node_test(name, srcs, deps = [], size = "small", **kwargs):
    ts_node_project(
        name = "%s_lib" % name,
        testonly = 1,
        srcs = srcs,
        deps = deps + [
            "@npm//@types/jasmine",
        ],
        **kwargs
    )

    jasmine_node_test(
        name = name,
        size = "small",
        deps = [":%s_lib" % name],
        **kwargs
    )
