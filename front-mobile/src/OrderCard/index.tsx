import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function OrderCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.orderName}>Pedido1</Text>
        <Text style={styles.orderPrice}>R$ 50,00</Text>
      </View>
      <Text style={styles.text}>Há 30 min.</Text>
      <View style={styles.productsList}>
        <Text style={styles.text}>Pizza Calabresa</Text>
        <Text style={styles.text}>Pizza Quatro Queijos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: '2%',
    marginTop: '10%',
    padding: 15,
    backgroundColor: '#FFF',
    shadowOpacity: 0.25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 20,
    borderRadius: 10,
    elevation: 5
  },
  header : {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  orderName: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: '#263238',
    fontFamily: 'OpenSans_700Bold'
  },
  orderPrice: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'right',
    letterSpacing: -0.24,
    color: '#DA5C5C',
    fontFamily: 'OpenSans_700Bold'
  },
  text: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: -0.24,
    color: '#9E9E9E',
    fontFamily: 'OpenSans_400Regular'
  },
  productsList: {
    borderTopWidth: 1,
    borderTopColor: '#E6E6E6',
    marginTop: 20,
    paddingTop: 15
  }
});

export default OrderCard;
