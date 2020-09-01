import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const App = () => {

    const [coursedGoals, setCoursedGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = (addedGoal) => {
        setCoursedGoals(prevState => [
            ...prevState,
            {id: Math.random().toString(), value: addedGoal}
        ]);
        setIsAddMode(false)
    };

    const removeGoalHandler = goalId => {
        setCoursedGoals(prevState => {
            return prevState.filter(goal => goal.id !== goalId);
        })
    };

    const cancelGoalAdditionHandler = () => {
        setIsAddMode(false);
    };

    return (
        <View style={styles.screen}>
            <Button title="Add new item" onPress={() => setIsAddMode(true)}/>
            <GoalInput
                visible={isAddMode}
                onAddGoal={addGoalHandler}
                onCancel={cancelGoalAdditionHandler}
            />

            <FlatList
                keyExtractor={item => item.id}
                data={coursedGoals}
                renderItem={itemData => <GoalItem title={itemData.item.value} id={itemData.item.id}
                                                  onDelete={removeGoalHandler}/>}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    }
});

export default App;