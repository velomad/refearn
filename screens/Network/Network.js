import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { FocusAwareStatusBar } from "../../components";

const Network = () => {
    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsHorizontalScrollIndicator={false}
        >
            <FocusAwareStatusBar
                barStyle="dark-content"
                backgroundColor={COLORS.white}
            />
            <View>
                <View style={styles.cardContainer}>
                    <View>
                        <Text
                            style={{
                                color: COLORS.gray,
                                fontWeight: '700'
                            }}>One@Armaan</Text>
                        <Text
                            style={{
                                fontSize: SIZES.body5,
                                color: COLORS.gray,
                                fontWeight: '600'
                            }}>Your one code</Text>
                    </View>
                    <View><TouchableOpacity
                        style={styles.button}
                        onPress={() => handleOfferDetail()}
                    >
                        <Text
                            style={{
                                color: "#fff",
                                fontWeight: "700",
                            }}
                        >
                            Share Now
                        </Text>
                    </TouchableOpacity></View>
                </View>
                <View style={{
                    paddingTop: SIZES.width / 10,
                    marginHorizontal: SIZES.width / 25,
                    paddingBottom: SIZES.width / 80
                }}>
                    <Text style={{
                        fontWeight: '700',
                        color: COLORS.gray
                    }}>Your Network</Text>
                    <Text style={{
                        fontWeight: '600',
                        color: COLORS.gray,
                        fontSize: SIZES.body5
                    }}>Earn 10% of friends earnings</Text>
                </View>
                <View style={styles.tableContainer}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        backgroundColor: COLORS.indigoDark,
                        paddingVertical: SIZES.width / 30,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5
                    }}>
                        <Text style={{
                            color: COLORS.white,
                            fontSize: SIZES.body5,
                            fontWeight: "700",
                        }}>Your Friend</Text>
                        <Text
                            style={{
                                color: COLORS.white,
                                fontSize: SIZES.body5,
                                fontWeight: "700",
                            }}>Friend's Earnings</Text>
                        <Text style={{
                            color: COLORS.white,
                            fontSize: SIZES.body5,
                            fontWeight: "700",
                        }}>Your Earnings</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: SIZES.width / 30,
                        marginHorizontal: SIZES.width / 25,
                    }}>
                        <Text style={{
                            color: COLORS.gray,
                            fontSize: SIZES.body5,
                            fontWeight: "700",
                        }}>1 in your network</Text>
                        <Text
                            style={{
                                color: COLORS.greenLight,
                                fontSize: SIZES.body5,
                                fontWeight: "700",
                            }}>&#8377;100</Text>
                        <Text style={{
                            color: COLORS.gray,
                            fontSize: SIZES.body5,
                            fontWeight: "700",
                        }}>&#8377;5900</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: SIZES.width / 30,
                        marginHorizontal: SIZES.width / 25,
                    }}>
                        <View style={{
                            flexDirection: 'column'
                        }}>
                            <Text style={{
                                color: COLORS.gray,
                                fontSize: SIZES.body5,
                                fontWeight: "700",
                            }}>Armaan</Text>
                            <Text style={{
                                color: COLORS.gray,
                                fontSize: SIZES.body5,
                                fontWeight: "600",
                            }}>One@Armaan0058</Text>
                            <Text style={{
                                color: COLORS.gray,
                                fontSize: SIZES.body5,
                                fontWeight: "600",
                            }}>0 Users in network</Text>
                        </View>
                        <Text
                            style={{
                                color: COLORS.greenLight,
                                fontSize: SIZES.body5,
                                fontWeight: "700",
                            }}>&#8377;100</Text>
                        <Text style={{
                            color: COLORS.gray,
                            fontSize: SIZES.body5,
                            fontWeight: "700",
                        }}>&#8377;5900</Text>
                    </View>
                    <View>
                        <Text></Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        paddingBottom: "10%",
        marginHorizontal: SIZES.width / 40,
    },
    cardContainer: {
        flexDirection: "row",
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: SIZES.width / 40,
        marginVertical: SIZES.width / 20,
        paddingVertical: SIZES.width / 40,
        borderRadius: 7
    },
    button: {
        width: "80%",
        alignItems: "center",
        color: "#fff",
        backgroundColor: COLORS.indigoDark,
        marginHorizontal: SIZES.width / 15,
        padding: 10,
        marginTop: "3%",
        marginBottom: "5%",
        borderRadius: 4,
    },
    tableContainer: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginHorizontal: SIZES.width / 40,
        marginVertical: SIZES.width / 50,
    }
});
export default Network
