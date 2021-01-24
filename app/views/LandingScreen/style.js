import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B1B2F',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: Dimensions.get('window').height * 0.2,
        width: Dimensions.get('window').height * 0.2
    },
    continueBtn: {
        backgroundColor: "#892CDC",
        width: '80%',
        paddingVertical: 15,
        borderRadius: 6,
        alignItems: 'center'
    },
    continueBtnText: {
        color: '#FFF',
        fontFamily:  Platform.OS == "ios" ? 'SF Compact Rounded': 'SF-Compact-Rounded-Semibold',
        fontWeight: '600'
    },
    acceptText: {
        color: '#FFF',
        fontFamily:  Platform.OS == "ios" ? 'SF Compact Rounded': 'SF-Compact-Rounded-Regular',
        fontWeight: '400',
        width: '70%',
        fontSize: 10,
        textAlign: 'center',
        marginTop: 10
    },
    linkGroup: {
        position: 'absolute',
        bottom: '7%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%'
    },
    link: {
    },
    linkText: {
        color: '#FFF',
        fontFamily:  Platform.OS == "ios" ? 'SF Compact Rounded': 'SF-Compact-Rounded-Bold',
        fontWeight: '500',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10
    }
})

export default styles;