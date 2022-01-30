load("@npm//@bazel/typescript:index.bzl", _ts_project = "ts_project")
load("@npm//@bazel/jasmine:index.bzl", "jasmine_node_test")

def ts_project(tsconfig = "//:tsconfig_browser", **kwargs):
    _ts_project(
        tsconfig = tsconfig,
        composite = True,
        **kwargs
    )

def ts_node_project(tsconfig = "//:tsconfig_node", **kwargs):
    ts_project(
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
