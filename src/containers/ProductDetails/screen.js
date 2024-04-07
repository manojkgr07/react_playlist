import React from "react";

import { StyleSheet, View, Image, Dimensions, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const screenwidth = Dimensions.get('screen').width;
const screenheight = Dimensions.get('screen').height;

function ProductDetailsScreen({ testjson, prodjson,backHandler }) {

    const renderNodata = () => {
        return (
            <>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: "bold" }}>No data found</Text>
                </View>
            </>
        );
    };

   

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View>
            <TouchableOpacity style={{ paddingLeft: 5 }} onPress={() => backHandler()}>
                <AntDesign name="arrowleft" size={25} color="#000" style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View>
                <SwiperFlatList
                    autoplay
                    autoplayDelay={3}
                    autoplayLoop
                    index={0}
                    showPagination

                >
                    {testjson && testjson.map((image, index) => (
                        <View key={index}>
                            <Image style={styles.wrap} source={{ uri: image }} />
                        </View>
                    ))}
                </SwiperFlatList>
            </View>

            <View>
                <View style={{ paddingTop: 20, alignItems: "flex-end", flexDirection: "row", paddingLeft: 20 }}>
                    <Text style={{ color: "red", fontSize: 30, fontWeight: "500" }}>-{prodjson.discountPercentage}</Text>
                    <Text style={{ color: "red", fontSize: 20, fontWeight: "500" }}>%</Text>
                    <Text style={{ color: "black", fontSize: 30, fontWeight: "500",paddingLeft:wp('2%') }}>₹{prodjson.price}</Text>
                    <Text style={{ color: "black", fontSize: 20, fontWeight: "500" }}>.00</Text>
                </View>
                <View style={styles.horizontalLine}></View>
                <View style={{ paddingTop: 10, paddingLeft: 20 }}>
                <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>Details</Text>
                </View>
                <View style={{ paddingTop: 10, paddingLeft: 20 }}>
                <Text style={{ color: "black", fontSize: 18 }}>{prodjson.description}</Text>
                </View>
                <View style={{ paddingTop: 15, alignItems: "flex-end", flexDirection: "row", paddingLeft: 20 }}>
                    <Text style={{ color: "black", fontSize: 20,fontWeight: "bold" }}>Name</Text>
                    <Text style={{ color: "black", fontSize: 20,fontWeight: "bold",marginHorizontal:20 }}>:</Text>
                    <Text style={{ color: "black", fontSize: 20 }}>{prodjson.title}</Text>                    
                </View>
                <View style={{ paddingTop: 15, alignItems: "flex-end", flexDirection: "row", paddingLeft: 20 }}>
                    <Text style={{ color: "black", fontSize: 20,fontWeight: "bold" }}>Rating</Text>
                    <Text style={{ color: "black", fontSize: 20,fontWeight: "bold",marginHorizontal:20 }}>:</Text>
                    <Text style={{ color: "black", fontSize: 20 }}>{prodjson.rating}</Text>                    
                </View>
                <View style={{ paddingTop: 15, alignItems: "flex-end", flexDirection: "row", paddingLeft: 20 }}>
                    <Text style={{ color: "black", fontSize: 20,fontWeight: "bold" }}>Brand</Text>
                    <Text style={{ color: "black", fontSize: 20,fontWeight: "bold",marginHorizontal:20 }}>:</Text>
                    <Text style={{ color: "black", fontSize: 20 }}>{prodjson.brand}</Text>                    
                </View>
                <View style={{ paddingTop: 15, alignItems: "flex-end", flexDirection: "row", paddingLeft: 20 }}>
                    <Text style={{ color: "black", fontSize: 20,fontWeight: "bold" }}>Category</Text>
                    <Text style={{ color: "black", fontSize: 20,fontWeight: "bold",marginHorizontal:10 }}>:</Text>
                    <Text style={{ color: "black", fontSize: 20 }}>{prodjson.category}</Text>                    
                </View>
                <View style={styles.horizontalLine}></View>
            </View>





        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrap: {
        width: screenwidth,
        height: screenheight * 0.26
    },
    horizontalLine: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        marginTop: 15,
        marginHorizontal: 15, // Adjust margin as needed
      },
      icon: {
        marginRight: 10,
        paddingLeft: wp('2%'),
    },
});

export default ProductDetailsScreen;