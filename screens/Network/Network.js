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
                                fontSize : SIZES.body5,
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
});
export default Network
