#include <jni.h>
#include "NitroExploringNitroModulesOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::exploringnitromodules::initialize(vm);
}
