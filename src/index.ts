import { type HybridObject, NitroModules } from 'react-native-nitro-modules'

interface Math extends HybridObject<{
  ios: 'c++'
  android: 'c++'
}> {
  add(a: number, b: number): number
}

const math = NitroModules.createHybridObject<Math>('Math')
const result = math.add(5, 7) // --> 12
console.log(result)
