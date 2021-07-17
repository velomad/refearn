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
import firebase from '../../firebase';

const Login = ({ route, navigation }) => {
    const auth = useAuth();
    const { verificationId, phoneNumber } = route.params;
    const [verificationCode, setVerificationCode] = React.useState('');

    const handleChange = (e) => {
        const { name, type, text } = e;
        setVerificationCode((prev) => ({
            ...prev,
            [name]: text,
        }));
    };

    const handleLogin = async () => {
        Keyboard.dismiss();
        try {
            const result = await Axios.post(
                "https://www.questkart.com/25offers/api/v1/auth/login",
                {
                    'phoneNumber': phoneNumber
                }
            );
            auth.logIn(result.data.token);
            console.log(result.data);
        } catch (error) {
            console.log(error);
            toastMessage(error.response.data.error.message);
        }
    };

    const confirmOtp = async () => {
        try {
            const credential = firebase.auth.PhoneAuthProvider.credential(
                verificationId,
                verificationCode.verificationCode
            );
            firebase
                .auth()
                .signInWithCredential(credential)
                .then((result) => {
                    handleLogin();
                });

        } catch (err) {
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate("login")}
            >
                <Ionicons name="chevron-back" size={28} color={COLORS.primary} />
            </TouchableOpacity>

            <View style={styles.introText}>
                <Text style={{ ...FONTS.body2, color: COLORS.gray }}>
                    Enter Your OTP
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
                        Check your messasge box for OTP
                    </Text>
                    <Text style={{ paddingLeft: 4 }}>(OTP)</Text>
                </View>
            </View>
            <View style={styles.formContainer}>
                <InputField
                    placeholder="Enter OTP"
                    name="verificationCode"
                    type="phone-pad"
                    secure={true}
                    value={verificationCode.verificationCode}
                    onChange={handleChange}
                />
                <View style={{ paddingTop: "5%" }}>
                    <CustomButton
                        title="Confirm OTP"
                        background={COLORS.primary}
                        color={COLORS.white}
                        rounded={5}
                        onPress={confirmOtp}
                    />
                </View>
                {/* <View style={styles.secondaryText}>
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
                </View> */}
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
