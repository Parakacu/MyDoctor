import { faAllergies } from "@fortawesome/free-solid-svg-icons";
import  React  from "react";
import { Alert, StyleSheet, Text ,  View } from "react-native";
import { Button, Gap, Input } from "../../components/atom";
import Header from "../../components/atom/molekul/Header";
import { colors } from "../../utils";

const Register = ({navigation}) => {
    return (
        <View style = {styles.page}>
            <Header onPress={() => navigation.goBack()} title = "Daftar Akun"  />
            <View style = {styles.page2}>
            <Input label = {"Nama Lengkap"} />
            <Gap height = {24}/>
            <Input label = {"Pekerjaan"} />
            <Gap height = {24}/>
            <Input label = {"Email Addres"} />
            <Gap height = {24}/>
            <Input label = {"Password"} />
            <Gap height = {40}/>
            <Button title = {"Continue"} onPress={() => navigation.navigate("UploadPhoto")} />
            </View>
        </View>
    )
}
export default Register
const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    page2: {
        padding: 40,
        paddingTop: 0,
        fontFamily: "Nunito-Regular",
    }
});