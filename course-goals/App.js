import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const [coursedGoals, setCoursedGoals] = useState([]);

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        setCoursedGoals(prevState => [
            ...prevState,
            {id: Math.random().toString(), value: enteredGoal}
        ]);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />

                <Button
                    title="ADD"
                    onPress={addGoalHandler}
                />
            </View>

            <FlatList
                keyExtractor={item => item.id}
                data={coursedGoals}
                renderItem={itemData => (
                <View style={styles.listItem}>
                    <Text>{itemData.item.value}</Text>
                </View>
            )}/>
        </View>
    );
}

export default App;

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
    }
});
