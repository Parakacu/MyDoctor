import  React, { useEffect }  from "react";
import { StyleSheet, Text ,  View } from "react-native";
import { ILLogo } from "../../assets/illustration";

const Splash = ({navigation}) => {
    useEffect (() => {
        setTimeout (() => {
            navigation.replace ("GetStarted");
        }, 3000);
    }, []);
    return (
        <View style = {styles.page} >
            <ILLogo/>
            <Text style = {styles.title} >
                My Doctor
            </Text>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({

    page: {
    backgroundColor: "white", 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center"
    },

    title: {
        fontSize: 25,
        fontFamily: "Nunito-Bold",
        marginTop: 20
    }

});