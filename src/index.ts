import { type HybridObject, NitroModules } from 'react-native-nitro-modules'

export interface Math extends HybridObject<{
  ios: 'c++'
  android: 'c++'
}> {
  add(a: number, b: number): number
}

export function getMath(): Math {
  return NitroModules.createHybridObject<Math>('Math')
}
