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

const FreeTrialScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  return (
    <View style={tw`flex-1 bg-[#E8F6F6] px-[4%]`}>
      <TouchableOpacity 
      onPress={()=> navigation.goBack()}
      style={tw`my-6`}>
        <SvgXml xml={IconLeftArrow} />
        <Text style={tw`font-SatoshiRegular text-2xl text-[#121221] my-4`}>
          14 days free trial
        </Text>
        <Text style={tw`font-SatoshiRegular my-4`}>
          Sign up to start your seasons journey
        </Text>
      </TouchableOpacity>
      <View>
        <InputText
          containerStyle={tw`bg-white`}
          style={tw`bg-white`}
          placeholder={'Enter your name'}
          placeholderColor={'#949494'}
          label={'E-mail'}
          iconLeft={IconUser}
          onChangeText={text => setEmail(text)}
        />
        <InputText
          containerStyle={tw`bg-white`}
          style={tw`bg-white`}
          placeholder={'Enter your email'}
          placeholderColor={'#949494'}
          label={'E-mail'}
          iconLeft={IconEnvelope}
          onChangeText={text => setEmail(text)}
        />
        <InputText
          containerStyle={tw`bg-white`}
          placeholder={'Enter your password'}
          placeholderColor={'#949494'}
          label={'Password'}
          iconLeft={IconLock}
          iconRight={isShowPassword ? IconOpenEye : IconCloseEye}
          onChangeText={text => setPassword(text)}
          isShowPassword={!isShowPassword}
          rightIconPress={() => setIsShowPassword(!isShowPassword)}
        />

        {/* Checkbox Section */}
        <View style={tw`flex-row items-center gap-2 mt-4`}>
          <Checkbox
            value={isCheck}
            onValueChange={() => setIsCheck(!isCheck)}
            color={isCheck ? '#064145' : '#A8A8A8'}
            size={20}
          />
          <Text style={tw`text-sm text-subT font-SatoshiNormal`}>
            Agreed to Terms and Conditions
          </Text>
        </View>

        <Button
          style={tw`text-white`}
          containerStyle={tw`mt-6 bg-[#4FA8A8] rounded-2xl`}
          title={'Start your seasons journey'}
          titleSyle={tw`text-[#FFFFFF]`}
        />
        <View style={tw`items-center justify-center flex`}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Login')}
        >
          <Text style={tw`font-SatoshiMedium my-4 items-center justify-center`}>
            Already have an account?
              <Text style={tw`text-[#2B9696]`}> Sign in</Text>
          </Text>
          </TouchableOpacity>
        </View>
        <View style={tw`my-6 flex-row items-center gap-2`}>
          <View style={tw`bg-gray-200 h-[1px] flex-1`} />
          <Text style={tw`text-subT text-xs font-SatoshiBold`}>
            or continue with
          </Text>
          <View style={tw`bg-gray-200 h-[1px] flex-1`} />
        </View>

        <TouchableOpacity
          style={tw`mb-2 rounded-lg p-2 flex-row items-center justify-center gap-2`}>
          <SvgXml xml={IconGoogle} />
          <Text style={tw`text-title text-base font-SatoshiMedium`}>
            Continue with Google
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar translucent={false} />
    </View>
  );
};

export default FreeTrialScreen;
