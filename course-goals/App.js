import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const App = () => {

    const [coursedGoals, setCoursedGoals] = useState([]);

    const addGoalHandler = (addedGoal) => {
        setCoursedGoals(prevState => [
            ...prevState,
            {id: Math.random().toString(), value: addedGoal}
        ]);
    };

    return (
        <View style={styles.screen}>
            <GoalInput onAddGoal={addGoalHandler}/>

            <FlatList
                keyExtractor={item => item.id}
                data={coursedGoals}
                renderItem={itemData => <GoalItem title={itemData.item.value}/>}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    }
});

export default App;