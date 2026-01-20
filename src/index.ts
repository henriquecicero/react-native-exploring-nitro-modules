import { type HybridObject, NitroModules } from 'react-native-nitro-modules'

export interface Math extends HybridObject<{
  ios: 'c++'
  android: 'c++'
}> {
  add(a: number, b: number): number
}

export interface Logbook extends HybridObject<{
  android: 'c++'
  ios: 'swift'
}> {
  getSamplesSize(input: string): number
  getSamplesCount(input: string): number
  getConcatString(input: string): string
  getConcatStringZeroCopy(input: string): ArrayBuffer
}

export function getMath(): Math {
  return NitroModules.createHybridObject<Math>('Math')
}

export function getLogbook(): Logbook {
  return NitroModules.createHybridObject<Logbook>('Logbook')
}
