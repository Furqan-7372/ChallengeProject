import {Text, View, Modal, Pressable} from 'react-native'
import { FC } from 'react'
import { ISetPriority } from '../../constants/interfaces/interfaces'
import styles from './styles.tsx';
import Colors from '../../constants/colors/colors.tsx';

const SetPriority: FC<ISetPriority> = props => {
    const {text, onPress} = props;
    return (
        <View>

        <Pressable        
        style={({pressed}) =>
            pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
       }
            onPress={onPress}
            android_ripple={{color: Colors.primary500}}
        >

            <Text style={styles.textContainer}>{text}</Text>
        </Pressable>
        </View>
    )
}

export default SetPriority