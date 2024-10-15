import { StyleSheet } from "react-native";
import Colors from "../../constants/colors/colors";

const styles = StyleSheet.create({
    // inputContainer: {
    //     height: 50,
    //     width: 300,
    //     borderColor: Colors.primary50,
    //     borderWidth: 2,
    //     backgroundColor: Colors.primary500,
    // },
    outerContainer: {
        backgroundColor: Colors.primary300,
        padding: 10,
    },
    buttonInnerContainer: {
        height: 50,
        width: 300,
        borderColor: Colors.primary50,
        borderWidth: 2,
        backgroundColor: Colors.primary500,
        justifyContent: 'center',
        elevation: 2,
        padding: 5,
    },
    buttonText: {
        color: Colors.primary0,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    pressed: {
        opacity: 0.75,
    },
    textContainer: {
        fontSize: 16,
    },
})

export default styles