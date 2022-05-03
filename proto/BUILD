load("@rules_proto//proto:defs.bzl", "proto_library")
load("@rules_proto_grpc//js:defs.bzl", "js_grpc_node_library", "js_grpc_web_library")

package(default_visibility = ["//visibility:public"])

proto_library(
    name = "greeting_proto",
    srcs = [":greeting.proto"],
)

js_grpc_node_library(
    name = "greeting_node_proto",
    protos = [":greeting_proto"],
)

js_grpc_web_library(
    name = "greeting_js_proto",
    protos = [":greeting_proto"],
)
