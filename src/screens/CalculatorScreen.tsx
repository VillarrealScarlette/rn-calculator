import {Text, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CalculatorButton from '../components/CalculatorButton';

const CalculatorScreen = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const clean = () => {
    setNumber('0');
  };

  const buildNumber = (selectedNumber: string) => {
    setNumber(number + selectedNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.previousResult}>{previousNumber}</Text>
      <Text style={styles.result}>{number}</Text>
      <View style={styles.row}>
        <CalculatorButton text="C" backgroundColor="#9B9B9B" />
        <CalculatorButton text="+/-" backgroundColor="#9B9B9B" />
        <CalculatorButton text="del" backgroundColor="#9B9B9B" />
        <CalculatorButton text="/" backgroundColor="#FF9427" />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="7" action={buildNumber} />
        <CalculatorButton text="8" action={buildNumber} />
        <CalculatorButton text="9" action={buildNumber} />
        <CalculatorButton text="X" backgroundColor="#FF9427" />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="4" />
        <CalculatorButton text="5" />
        <CalculatorButton text="6" />
        <CalculatorButton text="-" backgroundColor="#FF9427" />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="1" />
        <CalculatorButton text="2" />
        <CalculatorButton text="3" />
        <CalculatorButton text="+" backgroundColor="#FF9427" />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="0" zero action={clean} />
        <CalculatorButton text="." />
        <CalculatorButton text="=" backgroundColor="#FF9427" />
      </View>
    </View>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  result: {
    color: '#FFFFFF',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  previousResult: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
  },
});
