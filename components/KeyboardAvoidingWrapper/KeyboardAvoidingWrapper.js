import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const KeyboardAvoidingWrapper = ({ children }) => {
  return (
    <KeyboardAvoidingView contentContainerStyle={{ paddingBottom: 20 }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
