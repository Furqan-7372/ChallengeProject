import { Text, View, TextInput, Image } from "react-native";
import styles from './styles.tsx';
import {FC, useState} from 'react';
import { IHome } from '../../constants/interfaces/interfaces.tsx';
import Title from "../../components/Title/index.tsx";
import PrimaryButton from "../../components/PrimaryButton/index.tsx";

const Home: FC<IHome> = ({route, navigation}) => {
    let {password} = route?.params.data
    const [flag, setFlag] = useState(true)
    const [display, setDisplay] = useState('*'.repeat(password.length))

    const nav = () => {
        navigation.navigate('Task');
      };

    function showPassword() {
        if (flag == false) {
            password = '*'.repeat(password.length);
        }
        else {
            
        }
        setFlag(!flag)
        setDisplay(password)
    }
    return (
        <View style={styles.rootContainer}>
            <Image 
                    style={styles.imageContainer}
                    source={require('../../assets/images/mainimage.png')}
            />
            <View style={styles.titleView}>
                <Title text={"Your Details"}/>
            </View>
            <View style={styles.innerView}>
                <View style={styles.subView}>
                    <Text style={styles.mainHeading}>Name:</Text>
                    <Text style={styles.textContainer}>{route?.params?.data.name}</Text>
                </View>
                <View style={styles.subView}>
                    <Text style={styles.mainHeading}>Email: </Text>
                    <Text style={styles.textContainer}>{route?.params?.data.email}</Text>
                </View>
                <View style={styles.subView}>
                    <Text style={styles.mainHeading}>Password: </Text>
                    <Text style={styles.textContainer}>{display}</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton text="Show Password" onPress={()=> showPassword()}/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton text="View Tasks" onPress={nav} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Home