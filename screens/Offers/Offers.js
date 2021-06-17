import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { FocusAwareStatusBar } from "../../components";
import { CustomButton } from '../../components';

const Offers = () => {
    return (
        <View style={styles.container}>
            <FocusAwareStatusBar
                barStyle="dark-content"
                backgroundColor={COLORS.white}
            />
            <View style={styles.cardcontainer}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.maincard}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/banners/icici.jpg')}
                        />
                        <Text style={{
                            ...FONTS.body3,
                            color: COLORS.blueDark,
                            fontWeight: '700',
                            marginTop: '5%'
                        }}>Equitas Small Finance Bank</Text>
                        <Text style={{
                            ...FONTS.body4,
                            color: COLORS.blueLight,
                            fontWeight: '700',
                            marginTop: '1%',
                            textAlign: "center",
                            paddingHorizontal: SIZES.width / 12
                        }}>Refer and Earn <Text style={{
                            color: COLORS.greenLight,
                        }}>&#8377;100 </Text> / Successful Selfe Savings Account Opened</Text>
                        <Text style={{
                            ...FONTS.body4,
                            color: COLORS.blueLight,
                            fontWeight: '700',
                            marginTop: '1%',
                            textAlign: "center",
                            paddingHorizontal: SIZES.width / 12
                        }}>Open Zero Balance Savings Account</Text>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Text style={{
                                color: '#fff',
                                fontWeight: '700',
                            }}>Earn &#8377;200</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.maincard}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/banners/icici.jpg')}
                        />
                        <Text style={{
                            ...FONTS.body3,
                            color: COLORS.blueDark,
                            fontWeight: '700',
                            marginTop: '5%'
                        }}>Equitas Small Finance Bank</Text>
                        <Text style={{
                            ...FONTS.body4,
                            color: COLORS.blueLight,
                            fontWeight: '700',
                            marginTop: '1%',
                            textAlign: "center",
                            paddingHorizontal: SIZES.width / 12
                        }}>Refer and Earn <Text style={{
                            color: COLORS.greenLight,
                        }}>&#8377;100 </Text> / Successful Selfe Savings Account Opened</Text>
                        <Text style={{
                            ...FONTS.body4,
                            color: COLORS.blueLight,
                            fontWeight: '700',
                            marginTop: '1%',
                            textAlign: "center",
                            paddingHorizontal: SIZES.width / 12
                        }}>Open Zero Balance Savings Account</Text>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Text style={{
                                color: '#fff',
                                fontWeight: '700',
                            }}>Earn &#8377;200</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.maincard}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/banners/icici.jpg')}
                        />
                        <Text style={{
                            ...FONTS.body3,
                            color: COLORS.blueDark,
                            fontWeight: '700',
                            marginTop: '5%'
                        }}>Equitas Small Finance Bank</Text>
                        <Text style={{
                            ...FONTS.body4,
                            color: COLORS.blueLight,
                            fontWeight: '700',
                            marginTop: '1%',
                            textAlign: "center",
                            paddingHorizontal: SIZES.width / 12
                        }}>Refer and Earn <Text style={{
                            color: COLORS.greenLight,
                        }}>&#8377;100 </Text> / Successful Selfe Savings Account Opened</Text>
                        <Text style={{
                            ...FONTS.body4,
                            color: COLORS.blueLight,
                            fontWeight: '700',
                            marginTop: '1%',
                            textAlign: "center",
                            paddingHorizontal: SIZES.width / 12
                        }}>Open Zero Balance Savings Account</Text>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Text style={{
                                color: '#fff',
                                fontWeight: '700',
                            }}>Earn &#8377;200</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        marginHorizontal: SIZES.width / 15
    },
    cardcontainer: {
        flexDirection: 'column',
    },
    maincard: {
        marginTop: '6%',
        alignItems: 'center',
        backgroundColor: COLORS.indigo,
        marginHorizontal: SIZES.width / 15,
        borderRadius: 7
    },
    image: {
        width: 70,
        height: 60,
        marginTop: '6%',
        justifyContent: 'center',
        textAlign: "center",
        borderRadius: 10
    },
    button: {
        width: '80%',
        alignItems: "center",
        color: '#fff',
        backgroundColor: COLORS.indigoDark,
        marginHorizontal: SIZES.width / 15,
        padding: 10,
        marginTop: '3%',
        marginBottom: '5%',
        borderRadius: 4
    },
});

export default Offers
