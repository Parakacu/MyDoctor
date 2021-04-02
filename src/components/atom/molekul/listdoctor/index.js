import React from 'react';
import { Image, StyleSheet, Text, View, } from "react-native";
import { colors } from '../../../../utils';

const ListDoctor = ({profile, name, desc}) => {
    return(
        <View style = {styles.container} >
            <Image source={profile} style = {styles.avatar} />
            <View  >
                <Text style = {styles.name} >{name}</Text>
                <Text style = {styles.riwayat} >{desc}</Text>
            </View>
        </View>
    )
}
export default ListDoctor;
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border.primary,
        alignItems: "center"
    },  
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginLeft: 12
    },
    name :{
        fontSize: 16,
        fontFamily: "Nunito-SemiBold",
        fontWeight : "400",
        color: colors.text.primary,
        paddingLeft: 12
    },
    riwayat: {
        fontSize: 12,
        fontFamily: "Nunito-Reguler",
        fontWeight: "300",
        color:  colors.text.secondary,
        paddingLeft: 12
    }
});