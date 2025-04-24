import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Statistics({ total, userWins, machineWins }) {
  return (
    <View style={styles.container}>
      <Text style={styles.total}>Total de sorteios: {total}</Text>
      <Text style={styles.vitoria}>Acertos do usuário: {userWins}</Text>
      <Text style={styles.derrota}>Vitórias da máquina: {machineWins}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#233b81',
  },
  total: {
    color: '#fff',
    fontSize: 20,
  },
  vitoria: {
    color: '#70ed56',
    fontSize: 20,
  },
  derrota: {
    color: '#d62e2e',
    fontSize: 20,

  },
});