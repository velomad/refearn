import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../../constants";
import {
  CustomButton,
  InputField,
  KeyboardAvoidingWrapper,
} from "../../components";
import useAuth from "../../auth/useAuth";
import toastMessage from "../../utils/toastMessage";
import Axios from "axios";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
// import * as firebase from "firebase";
import firebase from '../../firebase';

const Login = ({ navigation }) => {
  const auth = useAuth();
  const [phoneNumber, setInputValue] = useState({});

  const recaptchaVerifier = React.useRef(null);
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();
  const firebaseConfig = firebase.apps.length ? firebase.app().options : undefined;
  const [message, showMessage] = React.useState((!firebaseConfig || Platform.OS === 'web')
    ? { text: "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device." }
    : undefined);

  const handleChange = (e) => {
    const { name, type, text } = e;
    setPhoneNumber((prev) => ({
      ...prev,
      [name]: text,
    }));
  };

  const handleLogin = async () => {
    Keyboard.dismiss();
    try {
      const result = await Axios.post(
        "https://www.questkart.com/25offers/api/v1/auth/login",
        phoneNumber
      );
      auth.logIn(result.data.token);
    } catch (error) {
      console.log(error);
      toastMessage(error.response.data.error.message);
    }
  };

  const getOtp = () => {
    async () => {
      try {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        const verificationId = await phoneProvider.verifyPhoneNumber(
          phoneNumber,
          recaptchaVerifier.current
        );
        setVerificationId(verificationId);
        showMessage({
          text: "Verification code has been sent to your phone.",
        });
      } catch (err) {
        showMessage({ text: `Error: ${err.message}`, color: "red" });
      }
    }
  }

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("welcome")}
      >
        <Ionicons name="chevron-back" size={28} color={COLORS.primary} />
      </TouchableOpacity>

      <View style={styles.introText}>
        <Text style={{ ...FONTS.body2, color: COLORS.gray }}>
          Continue With Phone
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.height / 40,
          }}
        >
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.gray,
              textTransform: "capitalize",
            }}
          >
            We will send you
          </Text>
          <Text style={{ paddingLeft: 4 }}>(OTP)</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <InputField
          placeholder="Mobile Number"
          name="phoneNumber"
          type="phone-pad"
          secure={true}
          value={phoneNumber.phoneNumber}
          onChange={handleChange}
        />
        <View style={{ paddingTop: "5%" }}>
          <CustomButton
            title="Login
            "
            background={COLORS.primary}
            color={COLORS.white}
            rounded={5}
            onPress={getOtp}
          />
        </View>
        <View style={styles.secondaryText}>
          <View>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.gray,
                fontSize: SIZES.h5,
              }}
            >
              New User?
            </Text>
          </View>
          <TouchableOpacity
            style={{ paddingHorizontal: 10 }}
            onPress={() => navigation.navigate("signup")}
          >
            <Text style={{ fontSize: SIZES.h5, color: COLORS.primaryDark }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "15%",
  },
  backButton: {
    backgroundColor: COLORS.primaryLight,
    height: SIZES.width / 8,
    width: SIZES.width / 4.5,
    alignItems: "center",
    justifyContent: "center",
    borderTopEndRadius: 10,
    borderBottomRightRadius: 10,
  },
  introText: {
    marginVertical: SIZES.height / 40,
    marginHorizontal: SIZES.width / 40,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: SIZES.height / 20,
  },
  secondaryText: {
    flexDirection: "row",
    paddingVertical: 5,
  },
});
