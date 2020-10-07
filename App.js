import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, ScrollView } from 'react-native';
import MealRow from './MealRow';

export default function App() {
  const days = ['Lunedi', 'Martedi', 'Mercoledi', 'Giovedi', 'Venerdi', 'Sabato', 'Domenica'];

  const initialMeals = days.reduce((acc, day) => { 
    return {...acc, [day]: ['', '']}
  }, {} );
  const [meals, setMeals] = useState(initialMeals);

  const setMealValue = (value, day, mealNr) => {
    const mealsOfTheDay = meals[day];
    const newMealsOfTheDay = mealNr === 0 ? [value, mealsOfTheDay[1]] : [mealsOfTheDay[0], value];
    setMeals({...meals, [day]: newMealsOfTheDay});
  };

  const clearAll = () => {
    setMeals(initialMeals);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      {days.map(day =>
        <View key={day}>
          <MealRow label={`${day} pranzo`} value={meals[day][0]} setValue={value => setMealValue(value, day, 0)} />
          <MealRow label={`${day} cena`} value={meals[day][1]} setValue={value => setMealValue(value, day, 1)} />
        </View>
      )}
      </ScrollView>
      <Button title="Clear all" onPress={clearAll}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
