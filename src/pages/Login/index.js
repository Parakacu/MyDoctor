import  React  from "react";
import { StyleSheet, Text , View } from "react-native";
import { ILLogo } from "../../assets/illustration";
import { Button, Gap, Input, Link } from "../../components/atom";

const Login = ({navigation}) => {
    return (
        <View style = {styles.page}>
            <ILLogo/>
            <Text style = {styles.titlw} >Masuk dan mulai berkonsultasi</Text>
            <Input label = {"Email Addres"} />
            <Gap height = {24} />
            <Input label = {"Password"} />
            <Gap height = {10} />
            <Link title = {"Forgot My Password"} size = {12} />
            <Gap height = {40}/>
            <Button title = {"Sign In"} onPress={() => navigation.replace("MainApp")} />
            <Gap height = {30}/>
            <Link title = {"Create New Account"} size = {16} align = {"center"} />
        </View>
    )
}
export default Login
const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 40,
        backgroundColor: "white",
    },  
    titlw: {
        fontSize: 20,
        color: "black",
        fontFamily: "Nunito-Bold",
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 200,
    }
});