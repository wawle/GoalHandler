import { useState } from "react";
import { IGoal } from "./interfaces/goal";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [courseGoals, setCourseGoals] = useState<IGoal[]>([]);

  function deleteGoalHandler(goalId: string) {
    setCourseGoals((currentGoals: IGoal[]) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#b180f0"
          onPress={() => setModalIsVisible(true)}
        />
        {modalIsVisible && (
          <GoalInput
            visible={modalIsVisible}
            setCourseGoals={setCourseGoals}
            setModalIsVisible={setModalIsVisible}
          />
        )}

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            alwaysBounceVertical={false}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData}
                  setCourseGoals={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
