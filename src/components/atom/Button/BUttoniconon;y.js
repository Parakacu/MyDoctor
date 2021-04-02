import  React, { useEffect }  from "react";
import { StyleSheet, Text ,  View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IconBackDark } from "../../../assets/icon";

const IconOnly = ({onPress, icon}) => {
    const Icon = () => {
        if(icon === "dark-icon"){
            return<IconBackDark/>
        }
        // if(icon === "light-icon"){
        //     return<IconBackDark/>
        // }
        return <IconBackDark/>;
    };
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon/>
        </TouchableOpacity>
    )
}
export default IconOnly;