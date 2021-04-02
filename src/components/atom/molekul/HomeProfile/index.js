import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { DummyUser } from '../../../../assets/dumy';
import { colors } from '../../../../utils';

const HomeProfiles = () => {
    return(
        <View style = {styles.container} >
            <Image source={DummyUser} style = {styles.avatar} />
            <View>
                <Text style = { styles. name} >Bagas Haryadi</Text>
                <Text style = {styles.profesion} >Developer</Text>    
            </View>
        </View>
    )
}
export default HomeProfiles;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight: 12
    },
    name: {
        fontSize: 16,
        fontFamily: "Nunito-SemiBold",
        color: colors.text.primary
    },
    profesion:{
        fontSize: 12,
        fontFamily: "Nunito-Reguler",
        color: colors.text.secondary
    }
});