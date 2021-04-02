import React, {useState} from 'react';
import { StyleSheet, Text, View } from "react-native";
import {colors} from '../../utils'
import ListDoctor from '../../components/atom/molekul/listdoctor';
import {DummyDokter1, DummyDokter2, DummyDokter3} from '../../assets/dumy';

const Message = () => {
    const [doctors] = useState ([
        {
            id: 1,
            profile: DummyDokter1,
            name: 'Alexander Jannie',
            desc: 'Baik ibu, terima kasih banyak atas wakt...'
        },
        {
            id: 2,
            profile: DummyDokter2,
            name: 'Nairobi Putri Hayza',
            desc: 'Oh tentu saja tidak karena jeruk it...'
        },
        {
            id: 3,
            profile: DummyDokter3,
            name: 'John McParker Steve',
            desc: 'Oke menurut pak dokter bagaimana unt...'
        },
    ])
    return(
        <View style={styles.page} >
            <View style={styles.content} >
                <Text style={styles.title} >Messages</Text>
                {doctors.map(doctor => {
                        return (
                        <ListDoctor 
                        key={doctor.id} 
                        profile={doctor.profile}
                        name={doctor.name} 
                        desc={doctor.desc}  />
                    );
                })}
            </View>
        </View>
    )
}
export default Message;
const styles = StyleSheet.create({
    page:{
        backgroundColor: "#112340",
        flex: 1
    },
    content:{
        backgroundColor: "white",
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    title:{
        fontSize: 20,
        fontFamily: "Nunito-SemiBold",
        fontWeight: "600",
        color: colors.text.primary,
        marginLeft: 16,
        marginTop: 30
    }
});