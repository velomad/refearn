import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "../../utils/interceptor";
import toastMessage from "../../utils/toastMessage";
import { COLORS, FONTS, SIZES } from "../../constants";
import {
    CustomButton,
    InputField,
    FocusAwareStatusBar,
    KeyboardAvoidingWrapper,
} from "../../components";

const OfferForm = ({ navigation }) => {
    const [inputValue, setInputValue] = useState({});

    const handleChange = (e) => {
        const { name, type, text } = e;
        setInputValue((prev) => ({
            ...prev,
            [name]: text,
        }));
    };

    const handleFormSubmit = async () => {
        try {
            // const result = await axios.post(`/lead/create`, inputValue);
            // if (result)
                navigation.navigate('offerdetails', {
                    shareOffer: true
                });
        } catch (error) {
            console.log(error);
            toastMessage(error.response.data.error.message);
        }
    };

    return (
        <View style={styles.container}>
            <FocusAwareStatusBar
                barStyle="dark-content"
                backgroundColor={COLORS.lightGray}
            />
            <View style={styles.formContainer}>
                <View style={styles.formInput}>
                    <InputField
                        placeholder="Name"
                        name="name"
                        type="default"
                        value={inputValue.name}
                        onChange={handleChange}
                    />
                </View>
                <View style={styles.formInput}>
                    <InputField
                        placeholder="Email"
                        name="email"
                        type="email-address"
                        value={inputValue.email}
                        onChange={handleChange}
                    />
                </View>
                <View style={styles.formInput}>
                    <InputField
                        placeholder="Mobile Number"
                        name="phoneNumber"
                        type="phone-pad"
                        value={inputValue.phoneNumber}
                        onChange={handleChange}
                    />
                </View>
            </View>
            <View style={{ paddingTop: "5%" }}>
                <CustomButton
                    title="Submit"
                    background={COLORS.primary}
                    color={COLORS.white}
                    rounded={5}
                    onPress={handleFormSubmit}
                />
            </View>
        </View>
    );
};

export default OfferForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        marginVertical: SIZES.height / 15,
        alignItems: "center",
    },
    formContainer: {
        alignItems: "center",
    },
    formInput: {
        paddingVertical: SIZES.height / 130
    }
});
