// NormalModal.tsx
import React from 'react';
import { Modal, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const NormalModal = ({
  visible,
  onRequestClose,
  children,
  layerContainerStyle,
  containerStyle,
}: any) => {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View style={[styles.backdrop, layerContainerStyle]}>
          <TouchableWithoutFeedback>
            <View style={[styles.modalContent, containerStyle]}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'flex-end', // this is crucial
    backgroundColor: 'rgba(128, 0, 128, 0.5)' // Classic purple
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
  },
});

export default NormalModal;
