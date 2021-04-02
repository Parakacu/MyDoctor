import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '../../../utils';

const Input = ({label}) => {
    return (
        <View>
            <Text style = {styles.label}> {label} </Text>
            <TextInput style = {styles.Input} />
        </View>

    )
}
export default Input;
const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        color: colors.text.secondary,
        marginBottom: 6,
        fontFamily: "Nunito-Regular",
    },
    input: {
        borderWidth: 5,
        borderColor: colors.border.primary,
        borderRadius: 10,
        padding: 12
    }
});