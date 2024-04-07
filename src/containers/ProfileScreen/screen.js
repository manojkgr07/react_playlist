import React from "react";

import { StyleSheet, View, Image, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from 'react-native-vector-icons/AntDesign';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


function ProfileScreen({ backHandler, logoutHandler,profileDet }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => backHandler()}>
                <AntDesign name="arrowleft" size={25} color="#000" style={styles.icon} />
                </TouchableOpacity>
                <View>
                    <Text style={{ color: "black", fontSize: 20, color: "black",fontWeight:"bold" }}>Profile</Text>
                </View>
            </View>
            <View style={{ alignItems: "center", paddingTop: hp('5%') }}>
                <View style={styles.avatarContainer}>
                    <Image source={{ uri: "https://robohash.org/Jeanne.png?set=set4" }} style={styles.avatar} />
                </View>
            </View>

            <View style={{ paddingTop: 15, alignItems: "center" }}>
                <Text style={{ color: "black", fontSize: 20, color: "black", fontWeight: "bold" }}>{profileDet.firstName} {profileDet.lastName}</Text>
            </View>
            <View style={{ paddingTop: 5, alignItems: "center" }}>
                <Text style={{ color: "black", fontSize: 20, color: "black" }}>{profileDet.email}</Text>
            </View>
            <View style={{ paddingTop: 5, alignItems: "center" }}>
                <Text style={{ color: "black", fontSize: 20, color: "black" }}>{profileDet.phone}</Text>
            </View>

            <View style={styles.horizontalLine}></View>

            <View style={{ paddingTop: 10, paddingLeft: 20 }}>
                <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>Details</Text>
            </View>

            <View style={{ paddingTop: 15, alignItems: "flex-end", flexDirection: "row", paddingLeft: 20 }}>
                <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>Gender</Text>
                <Text style={{ color: "black", fontSize: 20, fontWeight: "bold", marginHorizontal: 20 }}>:</Text>
                <Text style={{ color: "black", fontSize: 20 }}>{profileDet.gender}</Text>
            </View>
            <View style={{ paddingTop: 15, alignItems: "flex-end", flexDirection: "row", paddingLeft: 20 }}>
                <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>Age</Text>
                <Text style={{ color: "black", fontSize: 20, fontWeight: "bold", marginHorizontal: 20 }}>:</Text>
                <Text style={{ color: "black", fontSize: 20 }}>{profileDet.age}</Text>
            </View>
            <View style={{ paddingTop: 15, alignItems: "flex-end", flexDirection: "row", paddingLeft: 20 }}>
                <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>Date of Birth</Text>
                <Text style={{ color: "black", fontSize: 20, fontWeight: "bold", marginHorizontal: 10 }}>:</Text>
                <Text style={{ color: "black", fontSize: 20 }}>{profileDet.birthDate}</Text>
            </View>
            <View style={{ paddingTop: 15, alignItems: "flex-end", flexDirection: "row", paddingLeft: 20 }}>
                <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>Blood Group</Text>
                <Text style={{ color: "black", fontSize: 20, fontWeight: "bold", marginHorizontal: 10 }}>:</Text>
                <Text style={{ color: "black", fontSize: 20 }}>{profileDet.bloodGroup}</Text>
            </View>
            <View style={{ paddingTop: 15, alignItems: "flex-end", flexDirection: "row", paddingLeft: 20 }}>
                <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>Height</Text>
                <Text style={{ color: "black", fontSize: 20, fontWeight: "bold", marginHorizontal: 10 }}>:</Text>
                <Text style={{ color: "black", fontSize: 20 }}>{profileDet.height}</Text>
            </View>
            <View style={{ paddingTop: 15, alignItems: "flex-end", flexDirection: "row", paddingLeft: 20 }}>
                <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>Weight</Text>
                <Text style={{ color: "black", fontSize: 20, fontWeight: "bold", marginHorizontal: 10 }}>:</Text>
                <Text style={{ color: "black", fontSize: 20 }}>{profileDet.weight}</Text>
            </View>
            <View style={{alignItems:"center"}}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => logoutHandler()}>
                    <Text style={styles.loginButtonContainer}>Logout</Text>
                </TouchableOpacity>
            </View>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    avatarContainer: {
        width: 150, // Adjust size as needed
        height: 150, // Adjust size as needed
        borderRadius: 40, // Half of width and height for a perfect circle
        overflow: 'hidden', // Clip the image to the circle

    },
    avatar: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    icon: {
        marginRight: 10,
        paddingLeft: wp('2%'),
    },
    horizontalLine: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginTop: 15,
        marginHorizontal: 15, // Adjust margin as needed
    },
    buttonContainer: {
        height: hp('8%'),
        width: wp('70%'), backgroundColor: "darkblue", marginTop: hp('10%'), borderRadius: 15, alignItems: "center", justifyContent: "center"
    },
    loginButtonContainer: { color: "white", fontSize: 20, fontWeight: "bold" },
});

export default ProfileScreen;

