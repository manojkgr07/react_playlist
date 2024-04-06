import React from "react";

import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Icon from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";

function ProductScreen({ searchText, searchHandler, testjson,productsHandler }) {

    const renderNodata = () => {
        return (
            <>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: FontMagneta.bold }}>No data found</Text>
                </View>
            </>
        );
    };

    const renderItem = ({ item }) => {
      return(
        <TouchableOpacity onPress={() => productsHandler(item)}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image source={{ uri: item.thumbnail }} style={{ height: 200, width: 320, resizeMode: 'contain' }} />
        </View>

        <View style={{ paddingTop: 20, alignItems: "center" }}>
            <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>{item.title} [{item.brand}]</Text>
        </View>
        <View style={{ paddingTop: 10, alignItems: "center" }}>
            <Text style={{ color: "black", fontSize: 15, fontWeight: "500" }}>{item.description}</Text>
        </View>
        <View style={{ paddingTop: 10, alignItems: "flex-end", flexDirection: "row", justifyContent: "flex-end", paddingRight: 20 }}>
            <Text style={{ color: "green", fontSize: 30, fontWeight: "500" }}>₹{item.price}</Text>
            <Text style={{ color: "green", fontSize: 20, fontWeight: "500" }}>.00</Text>
        </View>
    </TouchableOpacity>
        // <TouchableOpacity onPress={()=>productsHandler()}>
        //     <View style={{alignItems:"center",justifyContent:"center"}}>
        //     <Image source={{uri:item.thumbnail}}
        //     style={{height:hp('20%'),width:wp('80%'),
        // resizeMode:'contain'}}
        //     />
        //     </View>
            
        //     <View style={{paddingTop:hp('2%'),alignItems:"center"}}>
        //     <Text style={{color:"black",fontSize:20,fontWeight:"bold"}}>{item.title} [ 
        //         {item.brand} ]</Text>
        //     </View>
        //     <View style={{paddingTop:hp('1%'),alignItems:"center"}}>
        //     <Text style={{color:"black",fontSize:15,fontWeight:"500"}}>{item.description}</Text>
        //     </View>
        //     <View style={{paddingTop:hp('1%'),alignItems:"flex-end",flexDirection:"row",justifyContent:"flex-end",paddingRight:wp('5%')}}>
        //     <Text style={{color:"green",fontSize:30,fontWeight:"500",}}>₹{item.price}</Text>
        //     <Text style={{color:"green",fontSize:20,fontWeight:"500",}}>.00</Text>
        //     </View>
        // </TouchableOpacity>
      );
        
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <View style={{ padding: 10 }}>
                    <Text style={styles.welcomeText}>Welcome User!</Text>
                </View>
                <TouchableOpacity style={{ paddingRight: 10 }}>
                    <Image source={require('../../assets/person-circle.png')} style={{ width: 50, height: 40 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
                <Icon name="search" size={20} color="#000" style={styles.icon} />
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="black"
                    style={styles.input}
                    value={searchText}
                    onChangeText={() => searchHandler()}
                />
            </View>
            <View style={{
                marginTop: hp('5%'),
                padding: 10,
                elevation:2,
                backgroundColor:"white",
                
                marginHorizontal: 5,
               
            }}>
                <FlatList 
                data={testjson} 
                keyExtractor={item=>item.id}
                ListEmptyComponent={renderNodata}
                renderItem={renderItem}
                />
            </View>
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "darkgrey",
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 2,
        marginHorizontal: 20,
    },
    icon: {
        marginRight: 10,
        paddingLeft: wp('2%'),
    },
    input: {
        flex: 1,
        color: "black",
        fontSize: 15
    },
});

export default ProductScreen;