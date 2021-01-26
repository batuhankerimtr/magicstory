import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B1B2F',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#FFF',
        fontSize:24,
        fontFamily:  Platform.OS == "ios" ? 'SF Compact Rounded': 'SF-Compact-Rounded-Bold',
        fontWeight: '700',
    },
    logo: {
        height: Dimensions.get('window').height * 0.25,
        width: Dimensions.get('window').height * 0.25,
        marginVertical:150
    },
    infoLabel: {
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor:"#3D3D65", 
        borderRadius:100, 
        paddingHorizontal:10, 
        paddingVertical:3
    },
    infoIcon: {
        height:10, 
        width:10
    },
    infoText: {
        color:'white', 
        fontSize:12, 
        fontFamily:  Platform.OS == "ios" ? 'SF Compact Rounded': 'SF-Compact-Rounded-Light',
        fontWeight:"300"
    }
})

export default styles;