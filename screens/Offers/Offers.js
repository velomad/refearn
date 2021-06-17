import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { FocusAwareStatusBar } from "../../components";

const Offers = () => {

    const [offerDetails, setOfferDetails] = useState([
        {
            'name': 'Equitas Small Finance Bank',
            'subname': 'Refer and Earn',
            'amount': '100',
            'label': 'Successful Selfe Savings Account Opened',
            'sublabel': 'Open Zero Balance Savings Account'
        },
        {
            'name': 'ICICI Finance Bank',
            'subname': 'Refer and Earn',
            'amount': '4000',
            'label': 'Successful Selfe Savings Account Opened',
            'sublabel': 'Open Zero Balance Savings Account'
        },
        {
            'name': 'SBI Finance Bank',
            'subname': 'Refer and Earn',
            'amount': '80000',
            'label': 'Successful Selfe Savings Account Opened',
            'sublabel': 'Open Zero Balance Savings Account'
        }
    ])
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
                    {
                        offerDetails && offerDetails.map((el, index) => {
                            return (
                                <View style={styles.maincard} key={index}>
                                    <Image
                                        style={styles.image}
                                        source={require('../../assets/banners/icici.jpg')}
                                    />
                                    <Text style={{
                                        ...FONTS.body3,
                                        color: COLORS.blueDark,
                                        fontWeight: '700',
                                        marginTop: '5%'
                                    }}>{el.name}</Text>
                                    <Text style={{
                                        ...FONTS.body4,
                                        color: COLORS.blueLight,
                                        fontWeight: '700',
                                        marginTop: '1%',
                                        textAlign: "center",
                                        paddingHorizontal: SIZES.width / 12
                                    }}>{el.subname} <Text style={{
                                        color: COLORS.greenLight,
                                    }}>&#8377;{el.amount} </Text> / {el.label}</Text>
                                    <Text style={{
                                        ...FONTS.body4,
                                        color: COLORS.blueLight,
                                        fontWeight: '700',
                                        marginTop: '1%',
                                        textAlign: "center",
                                        paddingHorizontal: SIZES.width / 12
                                    }}>{el.sublabel}</Text>
                                    <TouchableOpacity
                                        style={styles.button}
                                    >
                                        <Text style={{
                                            color: '#fff',
                                            fontWeight: '700',
                                        }}>Earn &#8377;{el.amount}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
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
