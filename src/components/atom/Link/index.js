import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Link = ({title, size, align}) => {
    return (
        <View>
            <Text style = {styles.Text(size, align)} > {title} </Text>
        </View>

    )
}
export default Link;
const styles = StyleSheet.create({
    Text: (size, align) => ({
        fontSize: size,
        color: "#7D8797",
        fontFamily: "Nunito-Regular",
        textDecorationLine: "underline",
        textAlign: align,
    })
});