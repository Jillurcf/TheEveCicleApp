import { Modal, ScrollView, StatusBar, StyleSheet, Text, View, Button, Image } from 'react-native';
import React, { useEffect } from 'react';
import OvulationCircle from './movingCircle/OvulationCircle';
import tw from '../lib/tailwind';
import Header from '../component/Header';
import TButton from '../component/TButton';
import IButton from '../component/IButton';
import IwtButton from '../component/IwtButton';
import IconArrow from '../component/IconArrow';
import { IconDownload } from '../assets/Icons';

type Props = {};

const Today = (props: Props) => {
  const [checkinModal, setCheckInmodal] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {

      setCheckInmodal(true);
      console.log("1 second has passed!");

    }, 1000);


    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView contentContainerStyle={tw`bg-black`}>
      <OvulationCircle />
      <StatusBar translucent={false} />

      {/* Modal Component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={checkinModal}
        onRequestClose={() => {
          setCheckInmodal(false);
        }}
      >
        <View style={tw`flex-1 justify-center items-center bg-purple-800 bg-opacity-60`}>
          <View style={tw`bg-white w-full p-6 rounded-lg`}>
            <Text style={tw`text-black text-lg font-SatoshiRegular`}>Advice for you today</Text>
            <Text style={tw`text-black text-xl font-SatoshiBold mt-2`}>Stay Active with Gentle {'\n'}Exercise</Text>
            <View style={tw`w-full mt-4`}>
              <Image style={tw`w-full rounded-lg`} source={require("../assets/Imgages/Today/TodayModalImg.png")} />
            </View>
            <View>
              <Text style={tw`text-black font-SatoshiRegular mt-4`}>
                Light physical activities like yoga, walking, or stretching release endorphins, the body's natural mood enhancers. These can help alleviate cramps and improve overall mood without straining the body.
              </Text>
            </View>
            <View style={tw`mt-4 flex-row justify-between items-center`}>

              <IwtButton
                containerStyle={tw`bg-[#EAF5F5]`}
                title="Download Pdf"
                titleStyle={tw`text-[#2B9696] ml-2`}
                svg='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V11H2V14H14V11H16V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z" fill="#2B9696"/></svg>'
              />
              <TButton
                onPress={() => setCheckInmodal(false)}
                title='Done' containerStyle={tw`bg-[#4FA8A8]`} />


            </View>

          </View>
        </View>
      </Modal>


    </ScrollView>
  );
};

export default Today;

const styles = StyleSheet.create({});
