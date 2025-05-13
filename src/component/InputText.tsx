import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import tw from '../lib/tailwind';

const InputText = ({
  placeholder,
  placeholderColor,
  placeholderSyle,
  iconLeft,
  iconRight,
  containerStyle,
  style,
  textAlign,
  label,
  labelStyle,
  onChangeText,
  mainStyle,
  isShowPassword,
  rightIconPress,
  keyboardType,
  rightItem,
  placeholderAlignment,
}: any) => {
  return (
    <View style={[tw`mb-2`, mainStyle]}>
      {label && (
        <Text
          style={[tw`text-title text-sm font-RoboMedium mb-1.5`, labelStyle]}>
          {label}
        </Text>
      )}
      <View
        style={[
          tw`bg-secondary rounded-2xl flex-row items-center px-4 py-0.5 gap-2`,
          containerStyle,
        ]}>
        {iconLeft && <SvgXml xml={iconLeft} />}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          style={[tw`font-RoboMedium flex-1 text-xs text-title`, style]}
          onChangeText={onChangeText}
          secureTextEntry={isShowPassword}
          keyboardType={keyboardType || "default"}
          textAlignVertical={placeholderAlignment || "center"}
          textAlign={textAlign}
        />
        {rightItem && rightItem}
        {iconRight && <TouchableOpacity onPress={rightIconPress}><SvgXml xml={iconRight} /></TouchableOpacity>}
      </View>
    </View>
  );
};

export default InputText;
