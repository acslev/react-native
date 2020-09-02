import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        // android shadow
        elevation: 5,
        // ios shadow
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0,
            height: 2
        }
    }
});

export default Card;