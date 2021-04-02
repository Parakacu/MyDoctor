import  React  from "react";
import { StyleSheet, Text ,  View } from "react-native";
import { IconBackDark } from "../../../../assets/icon";
import { colors } from "../../../../utils";
import Button from "../../Button";
import Gap from "../Gap";

const Header = ({onPress, title}) => {
    return (
        <View style = {styles.container}>
            {/* <IconBackDark/> */}
            <Button type = "icon-only" icon = "dark-icon" onPress={onPress} />
            <Text style = {styles.Text} > {title} </Text>
            <Gap width = {24}/>
        </View>
    )
}
export default Header;
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: colors.white,
        flexDirection: "row",
        alignItems: "center"
    },
    Text: {
        textAlign: "center",
        fontSize: 20,
        fontFamily: "Nonito-Bold",
        flex: 1,
        color: colors.text.primary,
    }
});