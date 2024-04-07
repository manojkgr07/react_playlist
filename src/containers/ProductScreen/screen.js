import React from "react";

import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";

function ProductScreen({ searchText, searchHandler, testjson, productsHandler, profileHandler,editHandler, deleteHandler,userDet,onSearchHandler}) {

    const renderNodata = () => {
        return (
            <>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: "bold"}}>No data found</Text>
                </View>
            </>
        );
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{marginBottom:hp('2%')}} onPress={() => productsHandler(item)}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Image source={{ uri: item.thumbnail }} style={{ height: 200, width: 320, resizeMode: 'contain' }} />
                </View>

                <View style={{ paddingTop: 20, alignItems: "center" }}>
                    <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>{item.title} [{item.brand}]</Text>
                </View>
                <View style={{ paddingTop: 10, alignItems: "center" }}>
                    <Text style={{ color: "black", fontSize: 15, fontWeight: "500" }}>{item.description}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ paddingTop: 10, alignItems: "flex-end", flexDirection: "row", justifyContent: "flex-start" }}>
                        <TouchableOpacity style={{ paddingLeft: 10 }} onPress={()=>editHandler()}>
                            <AntDesign name="edit" size={25} color="blue" style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingLeft: 10 }} onPress={()=>deleteHandler(item)}>
                            <AntDesign name="delete" size={25} color="red" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: 10, alignItems: "flex-end", flexDirection: "row", justifyContent: "flex-end", paddingRight: 10 }}>
                        <Text style={{ color: "green", fontSize: 30, fontWeight: "500" }}>₹{item.price}</Text>
                        <Text style={{ color: "green", fontSize: 20, fontWeight: "500" }}>.00</Text>
                    </View>
                </View>
                <View style={styles.horizontalLine}></View>
            </TouchableOpacity>

        );

    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
            <View style={styles.headerContainer}>
                <View style={{ padding: 10,flexDirection:"row" }}>
                    <Text style={styles.welcomeText}>Welcome User!</Text>
                </View>
                <TouchableOpacity style={{ paddingRight: 10, paddingTop: 5 }} onPress={() => profileHandler()}>
                    <View style={styles.avatarContainer}>
                        <Image source={{ uri: "https://robohash.org/Jeanne.png?set=set4" }} style={styles.avatar} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
                <Icon name="search" size={20} color="#000" style={styles.icon} />
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="black"
                    style={styles.input}
                    value={searchText}
                    onChangeText={(value) => searchHandler(value)}
                />
            </View>
            <View style={{alignItems:"center"}}>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>onSearchHandler()}>
            <Text style={styles.loginButtonContainer}>Search</Text>
           </TouchableOpacity>
            </View>
           
            <View style={{
                marginTop: hp('3%'),
                padding: 10,
                elevation: 2,
                backgroundColor: "white",

                marginHorizontal: 5,

            }}>
                <FlatList
                    data={testjson}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={renderNodata}
                    renderItem={renderItem}
                />
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // backgroundColor:"red"
    },
    headerContainer: {
        height: hp('10%'), flexDirection: 'row', justifyContent: 'space-between',
    },
    welcomeText: {
        color: "black", fontSize: 25, fontWeight: "bold"
    },
    avatarContainer: {
        width: 40, // Adjust size as needed
        height: 40, // Adjust size as needed
        borderRadius: 40, // Half of width and height for a perfect circle
        overflow: 'hidden', // Clip the image to the circle

    },
    icon: {
        marginRight: 10,
        paddingLeft: wp('2%'),
    },
    avatar: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "darkgrey",
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 2,
        marginHorizontal: 20,
    },
    buttonContainer: { height: hp('6%'),
    width: wp('80%'),backgroundColor:"darkblue",marginTop:hp('2%'),borderRadius:15,alignItems:"center",justifyContent:"center"},
    loginButtonContainer: {color:"white",fontSize:20,fontWeight:"bold"},
    icon: {
        marginRight: 10,
        paddingLeft: wp('2%'),
    },
    horizontalLine: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        marginTop: 15,
        marginHorizontal: 15, // Adjust margin as needed
      },
    input: {
        flex: 1,
        color: "black",
        fontSize: 15
    },
});

export default ProductScreen;