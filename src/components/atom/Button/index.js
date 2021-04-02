import  React  from "react";
import { StyleSheet, Text ,  Touchable,  View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../../utils";
import IconOnly from "./BUttoniconon;y";

const Button = ({type, title, onPress, icon}) => {
    if( type === "icon-only" ) {
        return (
            <IconOnly icon={icon} onPress = {onPress} />
        )
    }
    return (
        <TouchableOpacity style = {styles.Button1 (type)} onPress = {onPress}>
            <Text style = {styles.text1 (type)}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
export default Button;

const styles = StyleSheet.create({
    Button1: (type) => ({
        backgroundColor: type === "secondery" ? colors.button.secondary.background : colors.button.primary.background,
        paddingVertical: 10,
        borderRadius: 10
    }),
    text1: (type) => ({
        fontSize: 16,
        textAlign: "center",
        fontFamily: "Nunito-SemiBold",
        color: type === "secondery" ? colors.button.secondary.text : colors.button.primary.text,
    })
});