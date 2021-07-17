import React, { useState } from "react";
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
import firebase from '../../firebase';

const Login = ({ navigation }) => {
  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = useState({});
  const [verificationId, setVerificationId] = React.useState();
  const firebaseConfig = firebase.apps.length ? firebase.app().options : undefined;
  const [isValidNumber, setIsValidNumber] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, type, text } = e;
    setPhoneNumber((prev) => ({
      ...prev,
      [name]: text,
    }));
    if (text.length == 10) {
      validateUser(text);
    } else {
      setIsValidNumber(false);
    }
  };

  const validateUser = async (text) => {
    try {
      setIsLoading(true);
      const result = await Axios.post(
        "https://www.questkart.com/25offers/api/v1/auth/validateuser",
        {
          'phoneNumber': text
        }
      );
      if (result.data.status == 'success') {
        setIsValidNumber(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      toastMessage(error.response.data.error.message);
      setIsValidNumber(false);
      setIsLoading(false);
    }
  }

  const getOtp = async () => {
    let phNumber = '+91' + phoneNumber.phoneNumber;
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    const verificationId = await phoneProvider.verifyPhoneNumber(
      phNumber,
      recaptchaVerifier.current
    );
    setVerificationId(verificationId);
    navigation.navigate('OTP', {
      'verificationId': verificationId,
      'phoneNumber': phoneNumber.phoneNumber
    })
  }

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification={true}
        androidHardwareAccelerationDisabled
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
        {
          isLoading ?
            <View style={styles.validuser}>
              <Text
                style={{
                  color: COLORS.gray,
                  fontSize: SIZES.body5,
                }}
              >
                Checking...
              </Text>
            </View>
            :
            (phoneNumber.hasOwnProperty('phoneNumber') ? phoneNumber.phoneNumber.length > 9 : false) && !isValidNumber ?
              <View style={styles.validuser}>
                <Text
                  style={{
                    color: COLORS.danger,
                    fontSize: SIZES.body5,
                  }}
                >
                  Invalid Phone Number
                </Text>
              </View>
              : null
        }

        <View style={{ paddingTop: "5%" }}>
          <CustomButton
            title="Get OTP"
            disab
            background={!!isValidNumber ? COLORS.primary : COLORS.gray}
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
  validuser: {
    alignSelf: 'flex-start',
    marginTop: -SIZES.height / 60,
    marginHorizontal: SIZES.width / 18,
  }
});
