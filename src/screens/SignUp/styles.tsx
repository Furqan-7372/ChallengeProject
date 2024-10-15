import { StyleSheet } from "react-native";
import Colors from "../../constants/colors/colors";

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 2,
        width: 340,
        height: 340,
        overflow: 'hidden',
        marginTop: 10,
        
    },
    textContainer: {
        padding: 2,
        marginTop: 5,
        width: '80%',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputContainer:{
        width: 300,
        borderColor: Colors.primary50,
        borderWidth: 2,
        backgroundColor: Colors.primary500,
    },
    titleView: {
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerView: {
        flex: 3,
        alignItems: 'center',
    },
    buttonContainer: {
        padding: 20,
        width: 300,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    }
})

export default styles