import {
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import tw from '../../lib/tailwind';
  import {SvgXml} from 'react-native-svg';
  import {
    IconCloseEye,
    IconEnvelope,
    IconGoogle,
    IconLeftArrow,
    IconLock,
    IconOpenEye,
    IconUser,
  } from '../../assets/Icons';
  import Button from '../../component/Button';
  import InputText from '../../component/InputText';
  import {Checkbox} from 'react-native-ui-lib';
  
  type Props = {};
  
  const ForgetPassword = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isCheck, setIsCheck] = useState(false);
  
    //   const [googlelogin] = useGoogleloginMutation();
    const [googleUser, setGoogleUser] = useState();
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
          Don’t worry, we’ve got you covered. Enter your registered email address and we’ll send you a one-time passcode to reset your password.
          </Text>
        </View>
        <View>
         
          <InputText
            containerStyle={tw`bg-white`}
            style={tw`bg-white`}
            placeholder={'Enter your email'}
            placeholderColor={'#949494'}
            label={'E-mail'}
            iconLeft={IconEnvelope}
            onChangeText={(text: any) => setEmail(text)}
          />
         
          <View style={tw`flex-row items-center justify-between`}>
            <TouchableOpacity
              onPress={() => {
                {
                  setIsCheck(!isCheck);
                }
              }}
              style={tw`flex-row items-center gap-2`}>
              {/* <Checkbox
                      color={isCheck ? '#064145' : '#A8A8A8'}
                      value={isCheck}
                      size={20}
                    /> */}
              {/* <Text style={tw`text-sm text-subT font-SatoshiNormal`}>
                      Ricordati di me
                    </Text> */}
            </TouchableOpacity>
          </View>
          
  
          <Button
        
            style={tw`text-white`}
            containerStyle={tw`mt-6 bg-[#4FA8A8] rounded-2xl`}
            title={'Get otp'}
            titleSyle={tw`text-[#FFFFFF]`}
            // onPress={handleLogin}
            onPress={() => {
              navigation?.navigate('OtpScreen');
            }}
          />
        </View>
        <StatusBar translucent={false} />
      </View>
    );
  };
  
  export default ForgetPassword;
  
  const styles = StyleSheet.create({});
  