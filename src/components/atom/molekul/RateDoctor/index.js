import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { DummyDokter1 } from '../../../../assets/dumy';
import { IcStarts } from '../../../../assets/icon';
import { colors } from '../../../../utils';

const RateDoctor = () => {
    return(
        <View style={styles.container} >
            <Image source = {DummyDokter1} style={styles.avatar}/>
            <View style={styles.profile} >
                <Text style={styles.name} >Alexa Rachel</Text>
                <Text style={styles.profesi} >Pediatrician</Text>
            </View>
            <View style={styles.rate} >
                <IcStarts/>
                <IcStarts/>
                <IcStarts/>
                <IcStarts/>
                <IcStarts/>
                <IcStarts/>
            </View>
        </View> 
    )
}
export default RateDoctor;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingBottom: 16
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        
    },
    rate: {
        flexDirection: 'row'
    },
    name:{
        fontSize: 16,
        fontFamily: "Nunito-SemiBold",
        fontWeight: "600",
        paddingLeft: 12,
        color:colors.text.secondary
    },
    profesi: {
        fontSize: 12,
        fontFamily: "Nunito-Reguler",
        fontWeight: "400",
        marginTop: 2,
        paddingLeft: 12,
        color: colors.text.secondary
    },
    profile:{
        flex: 1
    }
});