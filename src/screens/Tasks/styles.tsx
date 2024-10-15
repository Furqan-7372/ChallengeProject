import { StyleSheet } from "react-native";
import Colors from "../../constants/colors/colors";
import Fonts from "../../assets/fonts";
import { red } from "react-native-reanimated/lib/typescript/Colors";

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    justifyContent: 'center',

    },
    listContainer: {
        flex: 1,
        borderWidth: 5,
        backgroundColor: 'red',
    },
    formContainer: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: 'blue',
    },
    subView: {
        flex:2,
        borderWidth: 5,
    },
    mainHeading: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    textContainer: {
        fontSize: 20,
        fontFamily: Fonts.titleFont,
        // borderWidth: 1,
        // padding: 5,
        // marginTop: 10,
        // marginBottom: 5,
    },
    titleView: {
        marginTop: 10,
        alignItems: 'center',
    },
    innerView: {
        flex: 3,
        alignItems: 'center',
    },
    inputContainer: {
        fontSize: 16,
        height: 50,
        width: 300,
        paddingLeft: 8,
        borderColor: Colors.primary50,
        borderWidth: 2,
        backgroundColor: Colors.primary500,
        marginBottom: 10,
    },
    buttonContainer: {
        margin: 2,
        justifyContent: 'center',
        borderWidth: 2,
        height: 50,
        width: 300,
        backgroundColor: Colors.primary500,
    },
    priorityContainer: {
        fontSize: 16,
        paddingLeft: 8,
    },
    buttonInnerContainer: {
        height: 50,
        width: 300,
        justifyContent: 'center',
    },
    errorText: {
        color: Colors.primary200,
        fontSize: 12,
    },
    dropdown: {
        height: 50,
        width: 300,
        backgroundColor: Colors.primary500,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: Colors.primary50,
        paddingHorizontal: 8,
      },
    imageStyle: {
        width: 24,
        height: 24,
        borderRadius: 12,
      },
    placeholderStyle: {
        fontSize: 16,
      },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 8,
      },
    pressed: {
        opacity: 0.75,
    },
    modalContainerView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.25)',
    },
    modalView: {
        backgroundColor: Colors.primary500,
        margin: 20,
        borderWidth: 2,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
    },
    modalButtonContainer: {
        flexDirection: 'row',

    },
    modalButtonText: {
        color: Colors.primary50,
    },
    modalTitle: {
        fontSize: 20,
        fontFamily: 'Chunk Five Print.ttf',
        borderWidth: 1,
        padding: 5,
        marginTop: 10,
        marginBottom: 25,
    },
    highView: {
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: Colors.primary200,
        margin: 10,
    },
    mediumView: {
        alignItems: 'center',
        width: 100,
        borderWidth: 2,
        paddingHorizontal: 15,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: Colors.primary600,
        paddingTop: 14,
        paddingBottom: 12,
        margin: 10,
    },
    lowView: {
        alignItems: 'center',
        width: 100,
        borderWidth: 2,
        paddingHorizontal: 15,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: Colors.primary300,
        paddingTop: 14,
        paddingBottom: 12,
        margin: 10,
    },
    styleHigh: {
    backgroundColor: Colors.primary200,
    },
    styleMedium: {
        backgroundColor: Colors.primary600,
    },
    styleLow: {
        backgroundColor: Colors.primary300,
    },
    notSetView: {
        backgroundColor: Colors.primary500,
    },
    flatListView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 300,
        backgroundColor: Colors.primary500,
        margin: 10,
        borderRadius: 112,
        borderWidth: 3,
    },
    flatlistContainerView: {
        paddingBottom: 250,
        backgroundColor: 'white',
    },
})

export default styles