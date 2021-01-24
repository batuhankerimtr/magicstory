import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B1B2F',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    capture: {
        backgroundColor: "#3D3D65",
        // height: '80%',
        paddingBottom: 50,
        marginBottom: 20,
        width: '90%',
        borderRadius: 10,
        marginTop: '10%',
        alignItems: 'center',
        overflow: 'visible',
        paddingTop: 20
    },
    logo: {
        height: Dimensions.get('screen').height * 0.1,
        width: Dimensions.get('screen').height * 0.1,
        
        alignSelf: 'center'
    },
    messageContainer: {
        backgroundColor: '#1B1B2F',
        width: '90%',
        marginTop: 20,
        padding: 15,
        borderRadius: 10,
        
    },
    messageText: {
        color: "#FFF",
        fontFamily: 'SF Compact Rounded',
        fontWeight: '600',
        fontSize: 18
    },
    actionsGroup: {
        width: '100%',
        alignItems: 'center'
    },
    shareSnapBtn: {
        backgroundColor: '#fffc00',
        width: '90%',
        paddingVertical: 25,
        borderRadius: 6,
        justifyContent: 'center'
    },
    shareSnapBtnText: {
        textAlign: 'center',
        fontFamily: 'SF Compact Rounded',
        fontWeight: '600',
        fontSize: 16
    },
    shareSnapghost: {
        position: 'absolute',
        height: 30,
        width: 30,
        resizeMode: 'contain',
        left: 20
    },
    otherActions: {
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    shareBtnSmall: {
        backgroundColor: '#3D3D65',
        padding: 20,
        borderRadius: 10
    },
    swipeupText: {
        color: '#FFF',
        fontFamily: 'SF Compact Rounded',
         fontWeight: '800',
         fontSize: 20,
         alignSelf: 'center',
    }
})

export default styles;