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
        width: 275,
        overflow: 'hidden',
        marginTop: 5,
        
    },
    mainHeading: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    textContainer: {
        fontSize: 20,
        fontFamily: 'Chunk Five Print.ttf',
        borderWidth: 1,
        padding: 5,
        margin: 5,
    },
    titleView: {
        marginTop: 10,
        alignItems: 'center',
    },
    innerView: {
        flex: 3,
        alignItems: 'stretch',
    },
    buttonContainer: {
        padding: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    subView: {
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
})

export default styles