import { StyleSheet } from "react-native";
import Colors from "../../constants/colors/colors";

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: Colors.primary300,
        padding: 10,
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary400,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
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
})

export default styles