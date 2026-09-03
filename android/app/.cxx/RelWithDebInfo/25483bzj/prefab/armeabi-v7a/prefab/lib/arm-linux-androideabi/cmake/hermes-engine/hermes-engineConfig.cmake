if(NOT TARGET hermes-engine::hermesvm)
add_library(hermes-engine::hermesvm SHARED IMPORTED)
set_target_properties(hermes-engine::hermesvm PROPERTIES
    IMPORTED_LOCATION "C:/Users/USER-2026/.gradle/caches/9.3.1/transforms/432f1effb5d7767355ba26d6d2efffdf/workspace/transformed/hermes-android-250829098.0.14-release/prefab/modules/hermesvm/libs/android.armeabi-v7a/libhermesvm.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/USER-2026/.gradle/caches/9.3.1/transforms/432f1effb5d7767355ba26d6d2efffdf/workspace/transformed/hermes-android-250829098.0.14-release/prefab/modules/hermesvm/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

