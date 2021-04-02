import { faBold } from "@fortawesome/free-solid-svg-icons";
import  React  from "react";
import { StyleSheet, Text , View, Image } from "react-native";
import { IconTtambah } from "../../assets/icon";
import { ILNullPhoto } from "../../assets/illustration";
import Button from "../../components/atom/Button";
import Link from "../../components/atom/Link";
import Gap from "../../components/atom/molekul/Gap";
import Header from "../../components/atom/molekul/Header";
import { colors } from "../../utils";

const UploadPhoto = () => {
    return (
        <View style = {styles.page}>
            <Header title = "UploadPhoto"/>
            <View style = {styles.content} >
                <View style = {styles.profile} >
                    <View style = {styles.avatarWrapper}>
                        <Image source = {ILNullPhoto} style = {styles.avatar} />
                        <IconTtambah style = {styles.add} />
                    </View>
                    <Text style = {styles.name} >Bagas Haryadi</Text>
                    <Text style = {styles.proffesion} >Developer</Text>
                </View>
                <View>
                    <Button title = "Upload and Continue" />
                    <Gap height = {30} />
                    <Link title = "Skip for this" align="center" size={16} />
                </View>
            </View>
        </View>
    )
}
export default UploadPhoto;
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
    },
    avatar: {
        width: 110,
        height: 110,
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border.primary,
        borderRadius: 130 / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    add: {
        position: "absolute",
        bottom: 8,
        right: 6
    },
    name:{
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: "Nunito-SemiBold",
        textAlign: 'center'
    },
    proffesion: {
        fontSize: 18,
        fontFamily: "Nunito-Reguler",
        textAlign: "center",
        color: colors.text.secondary
    },
    content: {
        paddingHorizontal: 40,
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-between",
        paddingBottom: 64
    },
    profile: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    }
});