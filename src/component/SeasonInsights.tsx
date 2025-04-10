import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import LinearGradient from "react-native-linear-gradient";
import tw from "twrnc"; // Assuming you're using tailwind-rn or twrnc
import { IconRightArrrow } from "../assets/Icons";
import { useNavigation } from "@react-navigation/native";
// Make sure this path is correct or adjust if using inline xml

const SeasonInsights = () => {
    const navigation = useNavigation()
    return (
        <View style={tw`flex-1 px-[4%]`}>
            {/* Header Row */}
            <View style={tw`flex-row justify-between items-center px-[4%] mb-4`}>
                <Text style={tw`text-black text-xl font-SatoshiBold`}>Season Insights</Text>
                <SvgXml xml={IconRightArrrow} width={24} height={24} />
            </View>

            {/* Gradient Section */}
            <LinearGradient
                colors={["#EB4BAE", "#6A1968"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={tw`flex-1 items-center h-20 justify-center rounded-2xl`}
            >
                <TouchableOpacity
           onPress={()=>navigation?.navigate("Autumn")}
                >
                    <View style={tw`flex-row justify-between`}>
                        <View style={tw`w-[80%]`}>
                            <Text style={tw`text-white px-3 text-lg font-SatoshiBold`}>Autumn</Text>
                            <View style={tw`bg-[#FFFFFF99] w-[35%] px-0.5 rounded-md py-1 ml-3 mt-1`}>
                                <Text style={tw`text-black px-2 text-xs font-SatoshiBold`}>Luteal Phase</Text>
                            </View>
                        </View>
                        <Image source={require("../assets/Imgages/SeasonInsights/image.png")} />
                    </View>
                </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
                colors={["#FA6262", "#9A0B0A"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={tw`flex-1 items-center h-20 justify-center rounded-2xl mt-2`}
            >
                <TouchableOpacity
                   onPress={()=>navigation?.navigate("Winter")}
                style={tw`flex-row justify-between`}>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-white px-3 text-lg font-SatoshiBold`}>Winter</Text>
                        <View style={tw`bg-[#FFFFFF99] w-[45%] px-0.5 rounded-md py-1 ml-3 mt-1`}>
                            <Text style={tw`text-black px-2 text-xs font-SatoshiBold`}>Menstrual Phase</Text>
                        </View>
                    </View>
                    <Image source={require("../assets/Imgages/SeasonInsights/image1.png")} />
                </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
                colors={["#F06956", "#F8B84E"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={tw`flex-1 items-center h-20 justify-center rounded-2xl mt-2`}
            >
                <TouchableOpacity
                  onPress={()=>navigation?.navigate("Summer")}
                style={tw`flex-row justify-between`}>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-white px-3 text-lg font-SatoshiBold`}>Summer</Text>
                        <View style={tw`bg-[#FFFFFF99] w-[45%] px-0.5 rounded-md py-1 ml-3 mt-1`}>
                            <Text style={tw`text-black px-2 text-xs font-SatoshiBold`}>Ovulation Phase</Text>
                        </View>
                    </View>
                    <Image source={require("../assets/Imgages/SeasonInsights/image2.png")} />
                </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
                colors={["#FEE0A2", "#FF9093"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={tw`flex-1 items-center h-20 justify-center rounded-2xl mt-2`}
            >
                <TouchableOpacity
                  onPress={()=>navigation?.navigate("Spring")}
                style={tw`flex-row justify-between`}>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-[#C1446D] px-3 text-lg font-SatoshiBold`}>Spring</Text>
                        <View style={tw`bg-[#FFFFFF99] w-[45%] px-0.5 rounded-md py-1 ml-3 mt-1`}>
                            <Text style={tw`text-black px-2 text-xs font-SatoshiBold`}>Folicular Phase</Text>
                        </View>
                    </View>
                    <Image source={require("../assets/Imgages/SeasonInsights/image3.png")} />
                </TouchableOpacity>
            </LinearGradient>

        </View>
    );
};

export default SeasonInsights;
