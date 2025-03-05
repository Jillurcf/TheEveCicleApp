import React, { useEffect, useRef, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import { IconLeftArrow } from '../../assets/Icons';
import Button from '../../component/Button';

const OtpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);
  const textInputsRefs = useRef<TextInput[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return; 

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      textInputsRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = ({ nativeEvent }: any, index: number) => {
    if (nativeEvent.key === 'Backspace') {
      const newOtp = [...otp];
      if (otp[index] === '' && index > 0) {
        textInputsRefs.current[index - 1]?.focus();
      }
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const renderInputs = () => {
    return otp.map((digit, index) => (
      <TextInput
        key={index}
        ref={input => (textInputsRefs.current[index] = input!)}
        cursorColor={'black'}
        style={tw`h-12 w-12 border-b-2 border-primaryText text-center text-lg`}
        keyboardType="numeric"
        maxLength={1}
        value={digit}
        onChangeText={text => handleChange(text, index)}
        onKeyPress={event => handleKeyPress(event, index)}
        returnKeyType="done"
      />
    ));
  };

  return (
    <View style={tw`flex-1 bg-[#E8F6F6] px-[4%]`}>
      <View style={tw`my-6`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgXml xml={IconLeftArrow} />
        </TouchableOpacity>
        <Text style={tw`font-SatoshiRegular text-2xl text-black my-4`}>
          Forget password?
        </Text>
        <Text style={tw`font-SatoshiRegular my-4`}>
          Don’t worry, we’ve got you covered. Enter your registered email
          address and we’ll send you a one-time passcode to reset your password.
        </Text>
      </View>

      <View style={tw`flex-row justify-between w-[100%] mx-auto`}>
        {renderInputs()}
      </View>

      {timer > 0 ? (
        <Text style={tw`mt-5 font-MontserratRegular text-black`}>
          Resend code in 00:{timer < 10 ? `0${timer}` : timer}
        </Text>
      ) : (
        <TouchableOpacity>
          <Text style={tw`mt-5 text-black font-MontserratRegular`}>
            Didn’t receive the code?{' '}
            <Text style={tw`text-blue-800 border-b-2 border-b-blue-700`}>
              Send again
            </Text>{' '}
          </Text>
        </TouchableOpacity>
      )}

      <View>
        <Button
        onPress={()=> navigation.navigate("ChangePassword")}
          style={tw`text-white`}
          containerStyle={tw`mt-6 bg-[#4FA8A8] rounded-2xl`}
          title={'Verify OTP'}
          titleSyle={tw`text-[#FFFFFF]`}
        />
      </View>

      <StatusBar translucent={false} />
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({});
