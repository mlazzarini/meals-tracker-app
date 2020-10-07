import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function MealRow(props) {
  const { label, value, setValue } = props;
  
  return (
    <View style={styles.container}>
      <View style={styles.mealTextContainer}>
        <Text style={styles.mealText}>{label}:</Text>
      </View>
      <View style={styles.mealInputContainer}>
        <TextInput
          style={styles.mealInput}
          onChangeText={text => setValue(text)}
          value={value}
          clearButtonMode={'always'}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  mealTextContainer: {
    //flex: 1,
  },
  mealInputContainer: {
    //flex: 3,
  },
  mealInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 180,
  }
});
