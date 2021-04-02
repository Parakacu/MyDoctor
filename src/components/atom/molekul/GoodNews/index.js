import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { DummyGedung } from '../../../../assets/dumy';
import { colors } from '../../../../utils';

const GoodNews = () => {
    return(
        <View style={styles.container}>
            <View style={styles.titlewrapper} >
                <Text style={styles.title} >Is it safe to stay at home during coronavirus?</Text>
                <Text style={styles.date} >Today</Text>
            </View>
            <Image source = {DummyGedung} stylee={styles.image} />
        </View>
    )
}
export default GoodNews;
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: colors.border.primary,
        paddingBottom: 12,
        paddingTop: 16,
        paddingHorizontal: 16
    },
    titlewrapper:{
        flex: 1
    },
    title:{
        fontSize: 16,
        fontFamily: "Nunito-SemiBold",
        fontWeight: "800",
        color: colors.text.primary,
    },
    date:{
        fontSize:12,
        fontFamily:"Nunito-Reguler",
        fontWeight:"400",
        color:colors.text.secondary,
        marginTop: 4
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 11
    }
});