import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B1B2F',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: Dimensions.get('window').height * 0.25,
        width: Dimensions.get('window').height * 0.25
    },
})

export default styles;