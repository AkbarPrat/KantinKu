import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'

const CardKategori = ({ kat }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={kat.gambar} style={styles.logo} />
        </TouchableOpacity>
    )
}

export default CardKategori

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 10,
        paddingTop: 15,
        borderRadius: 15,
    },
    logo: {
        width: responsiveWidth(57),
        height: responsiveHeight(70),
    }
})