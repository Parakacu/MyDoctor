import React from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { DoctorCategory, GoodNews, HomeProfiles, RateDoctor } from '../../components/atom/molekul';
import Gap from '../../components/atom/molekul/Gap';
import { colors } from '../../utils';
import JSONDoctorCategory, { JSONCategoryDoctor } from '../../assets';
const Doctor = () => {
    return(
        <View style = {styles.page} >
            <View style={styles.page2} >
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style = {styles.content} >
                        <Gap height= {30}/>
                        <HomeProfiles />
                        <Text style = {styles.welcome} >Mau konsultasi dengan siapa hari ini?</Text>
                    </View>
                    <View style = {styles.wrapperScroll}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        <View style = {styles.category} >
                            <Gap width ={32}/>
                            {
                                JSONCategoryDoctor.data.map(item => {
                                    return <DoctorCategory key={item.id} category={item.category} />
                                })
                            }
                            <Gap width ={22}/>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.content} >
                    <Text>Top Rated Doctors</Text>
                    <Gap height={16}/>
                    <RateDoctor/>
                    <RateDoctor/>
                    <RateDoctor/>
                    <Text>Good News</Text>
                </View>
                <GoodNews/>
                <GoodNews/>
                <GoodNews/>
                <Gap height={30}/>
                </ScrollView>
            </View>
        </View>
    )
}
export default Doctor;
const styles = StyleSheet.create({
    page:{
        backgroundColor: "#112340",
        flex: 1
    },
    page2:{
        backgroundColor: "white",
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    welcome:{
        fontSize: 20,
        fontFamily: "Nunito-SemiBold",
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 18,
        maxWidth: 209
    },
    category: {
        flexDirection: "row"
    },
    wrapperScroll:{
        marginHorizontal: -16
    },
    content:{
        paddingHorizontal: 16
    },
});