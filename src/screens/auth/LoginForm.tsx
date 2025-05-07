import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import tw from '../../lib/tailwind';
import { SvgXml } from 'react-native-svg';
import {
  IconCloseEye,
  IconEnvelope,
  IconGoogle,
  IconLeftArrow,
  IconLock,
  IconOpenEye,
} from '../../assets/Icons';
import InputText from '../../component/InputText';
import Button from '../../component/Button'; // Ensure this component is imported

interface LoginFormProps {
  navigation: any; // Update with proper type if using TypeScript with React Navigation
}

const LoginForm: React.FC<LoginFormProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  const handleLogin = () => {
    // if (!email || !password) {
    //   Alert.alert('Please enter both email and password');
    //   return;
    // }
    // Handle login logic here
    navigation.navigate("Drawer")
  };

  const handleGoogleLogin = () => {
    // Implement Google sign-in logic here
  };

  return (
    <View style={tw`flex-1 bg-[#E8F6F6] px-[4%]`}>
      <View style={tw`my-6`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgXml xml={IconLeftArrow} />
        </TouchableOpacity>
        <Text style={tw`font-SatoshiRegular text-2xl text-black my-4`}>
          Welcome back!
        </Text>
        <Text style={tw`font-SatoshiRegular my-4`}>
          Use email and password you are registered with for log in
        </Text>
      </View>

      <View>
        <InputText
          containerStyle={tw`bg-white`}
          style={tw`bg-white`}
          placeholder="Enter your email"
          placeholderColor="#949494"
          label="E-mail"
          iconLeft={IconEnvelope}
          onChangeText={setEmail}
          value={email}
        />
        <InputText
          containerStyle={tw`bg-white`}
          placeholder="Enter your password"
          placeholderColor="#949494"
          label="Password"
          iconLeft={IconLock}
          iconRight={isShowPassword ? IconOpenEye : IconCloseEye}
          onChangeText={(text)=>setPassword(text)}
          value={password}
          isShowPassword={isShowPassword}
          rightIconPress={() => setIsShowPassword(!isShowPassword)}
        />

        <View style={tw`flex-row items-center justify-between`}>
          <TouchableOpacity
            onPress={() => setIsCheck(!isCheck)}
            style={tw`flex-row items-center gap-2`}
          >
            {/* Uncomment and implement Checkbox here */}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={tw`text-xs text-[#2B9696] font-SatoshiMedium border-b border-b-[#2B9696]`}>
              Forget password?
            </Text>
          </TouchableOpacity>
        </View>

        <Button
          style={tw`text-white`}
          containerStyle={tw`mt-6 h-10 bg-[#4FA8A8] rounded-2xl`}
          title="Sign in"
          // title="Start your session's journey"
          titleSyle={tw`text-[#FFFFFF]`}
          onPress={handleLogin}
        />

        <View style={tw`items-center justify-center flex`}>
          <Text style={tw`font-SatoshiMedium my-4`}>
            Don't have an account?{' '}
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={tw`text-[#2B9696]`}>Sign up</Text>
            </TouchableOpacity>
          </Text>
        </View>

        <View style={tw`my-6 flex-row items-center gap-2`}>
          <View style={tw`bg-gray-200 h-[1px] flex-1`} />
          <Text style={tw`text-subT text-xs font-SatoshiBold`}>
            or continue with
          </Text>
          <View style={tw`bg-gray-200 h-[1px] flex-1`} />
        </View>

        <TouchableOpacity
          onPress={handleGoogleLogin}
          style={tw`mb-2 rounded-lg p-2 flex-row items-center justify-center gap-2`}
        >
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

export default LoginForm;

const styles = StyleSheet.create({});
