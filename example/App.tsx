import { useEffect, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { getMath } from 'react-native-exploring-nitro-modules';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    try {
      const math = getMath();
      const sum = math.add(5, 7);
      setResult(sum);
    } catch (error) {
      console.error('Error calling Nitro module:', error);
    }
  }, []);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Nitro Modules Example</Text>
        <Text style={styles.subtitle}>Testing Math.add(5, 7)</Text>
        <Text style={styles.result}>
          {result ? `Result: ${result}` : 'Error'}
        </Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  result: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
