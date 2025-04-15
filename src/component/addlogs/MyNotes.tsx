import { Modal, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind'
import { TextArea } from 'react-native-ui-lib'
import { SvgXml } from 'react-native-svg'
import { IconDelete, IconEdit } from '../../assets/Icons'
import { set } from 'date-fns'
import TButton from '../TButton'

type Props = {}

const MyNotes = (props: Props) => {
    const [openModal, setOpenModal] = React.useState(false)
    const [openDeleteModal, setOpenDeleteModal] = React.useState(false)
    return (
        <View style={tw`bg-white rounded-2xl p-4`}>
            <Text style={tw`text-black font-SatoshiBold text-lg`}>My Notes</Text>
            <View style={tw`flex-1 mt-4 border h-32 border-gray-400 rounded-lg`}>
                <TextArea
                    containerStyle={tw`border border-gray-400`}  // Border for the container
                    contentContainerStyle={tw`border border-gray-400`}
                    style={tw`bg-white text-black border`} // Background color should be white
                    placeholder="Write your notes here..."
                    cursorColor="black" // White cursor
                    placeholderTextColor="gray" // Placeholder text color
                    textInputStyle={{
                        color: 'black', // Text color should be black
                        cursorColor: 'white', // White cursor
                    }}
                />
            </View>
            <View>
                <View style={tw`flex-row justify-between items-center mt-4`}>
                    <Text style={tw`text-gray-400 text-xs mt-2`}>
                        Created on 17/05/25
                    </Text>
                    <View style={tw`flex-row gap-4`}>
                        <TouchableOpacity
                            onPress={() => setOpenModal(true)}
                        >
                            <SvgXml xml={IconEdit} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setOpenDeleteModal(true)}
                        >
                            <SvgXml xml={IconDelete} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={openModal}
                onRequestClose={() => {
                    setOpenModal(!openModal)
                }}
            >
                <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
                    <View style={tw`bg-white rounded-lg p-4 w-80`}>
                        <Text style={tw`text-black font-SatoshiBold text-lg`}>My Notes</Text>

                        <View style={tw`flex-row justify-between w-full  items-center mt-4`}>
                            <TButton
                                onPress={() => setOpenModal(false)}
                                containerStyle={tw`bg-[#EAF5F5] w-[45%]`} title='Cancel' titleStyle={tw`text-[#2B9696]`} />
                            <TButton

                                containerStyle={tw`bg-[#4FA8A8] w-[45%]`} title='Update note' titleStyle={tw`text-white`} />
                        </View>
                    </View>
                </View>
            </Modal>
            {/* ===============delete modal============= */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={openDeleteModal}
                onRequestClose={() => {
                    setOpenModal(!openDeleteModal)
                }}
            >
                <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
                    <View style={tw`bg-white rounded-lg p-4 w-80`}>
                        <Text style={tw`text-black font-SatoshiBold text-lg text-center`}>Delete notes</Text>
                        <Text style={tw`text-gray-500 font-SatoshiBold`}>
                            Once you delete the note it will be permanently removed from your notes.
                            This is a hint text to help user.</Text>
                        <View style={tw`border border-gray-200 my-4`}>

                        </View>
                        <View style={tw`flex-row justify-between w-full  items-center mt-4`}>
                            <TButton
                                onPress={() => setOpenDeleteModal(false)}
                                containerStyle={tw`bg-[#EAF5F5] w-[45%]`} title='
                                Delete' titleStyle={tw`text-[#2B9696]`} />
                            <TButton

                                containerStyle={tw`bg-[#4FA8A8] w-[45%]`} title='No' titleStyle={tw`text-white`} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default MyNotes

const styles = StyleSheet.create({})