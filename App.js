import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [alcoholPrice, setAlcoholPrice] = useState('');
  const [gasPrice, setGasPrice] = useState('');
  const [result, setResult] = useState('');
  const [savings, setSavings] = useState('');
	
// 	Inicio do calculo de input

  const calculate = () => {
    const alcohol = parseFloat(alcoholPrice);
    const gas = parseFloat(gasPrice);

    if (!isNaN(alcohol) && !isNaN(gas)) {
      const ratio = alcohol / gas;
      if (ratio < 0.7) {
        setResult('Abastecer com Álcool');
        const savedAmount = (0.7 - ratio) * gas;
        setSavings(`Você economizará aproximadamente R$${savedAmount.toFixed(2)} por litro.`);
      } else {
        setResult('Abastecer com Gasolina');
        const savedAmount = (ratio - 0.7) * alcohol;
        setSavings(`Você economizará aproximadamente R$${savedAmount.toFixed(2)} por litro.`);
      }
    } else {
      setResult('Por favor, insira valores válidos');
      setSavings('');
    }
  };
	
// 	Fim do calculo de input
	
// 	Inicio do calculo de limpar

  const clearInputs = () => {
    setAlcoholPrice('');
    setGasPrice('');
    setResult('');
    setSavings('');
  };
	
// 	Fim do calculo de limpar
	
// 	Inicio dos comandos de retorno

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Álcool ou Gasolina?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Preço do Álcool"
            keyboardType="decimal-pad"
            value={alcoholPrice}
            onChangeText={(text) => setAlcoholPrice(text)}
          />
          <Text style={styles.inputLabel}>R$</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Preço da Gasolina"
            keyboardType="decimal-pad"
            value={gasPrice}
            onChangeText={(text) => setGasPrice(text)}
          />
          <Text style={styles.inputLabel}>R$</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Calcular" onPress={calculate} />
          <TouchableOpacity style={styles.clearButton} onPress={clearInputs}>
            <Text style={styles.clearButtonText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.result}>{result}</Text>
        {savings ? (
          <Text style={styles.savings}>{savings}</Text>
        ) : (
          <Text style={styles.info}>Insira os preços para calcular a economia</Text>
        )}
        <Text style={styles.note}>
          *Este aplicativo é apenas uma estimativa e não leva em conta outros fatores como
          consumo do veículo, rendimento e condições da estrada.
        </Text>
      </View>
		  <Text style={styles.footer}>&copy; 2023 Nikolah More</Text>
    </View>
  );
}

// Fim dos comandos de retorno

// Inicio da estilização

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2DE1FC',
  },
  card: {
    backgroundColor: '#214F4B',
    borderRadius: 8,
    padding: 16,
    width: '35%',
    elevation: 3,
	borderWidth: 3,
	borderColor: '#000000'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#000000',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
	Color: '#2AFC98',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#2AFC98',
    borderWidth: 1,
    paddingHorizontal: 8,
    fontSize: 16,
    backgroundColor: '#16C172',
  },
  inputLabel: {
    fontSize: 18,
    marginLeft: 8,
    color: '#000000',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
	Color: '#000000'
  },
  clearButton: {
    backgroundColor: '#2AFC98',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  clearButtonText: {
    color: '#000000',
    fontSize: 16,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  savings: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },
  note: {
    fontSize: 12,
    color: '#000000',
    textAlign: 'center',
    marginTop: 24,
  },
  footer: {
    marginTop: 16,
    fontSize: 12,
    color: '#000000',
    textAlign: 'center',
  },
});

// Fim da estilização