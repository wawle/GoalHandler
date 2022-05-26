import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { IGoal } from "../interfaces/goal";

interface IGoalItem {
  itemData: {
    item: IGoal;
  };
  setCourseGoals: Function;
}

const GoalItem: FC<IGoalItem> = ({ itemData, setCourseGoals }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210640" }}
        onPress={setCourseGoals.bind(this, itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}> {itemData.item.text} </Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
