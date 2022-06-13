/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface Props {
  text: string;
  backgroundColor?: string;
  zero?: boolean;
  action?: (number: string) => void;
}

const CalculatorButton = ({
  text,
  backgroundColor = '#2D2D2D',
  zero,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.container,
          backgroundColor: backgroundColor,
          width: zero ? 180 : 80,
        }}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CalculatorButton;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '500',
  },
});
