import {View, Text, Pressable} from 'react-native';

import styles from './styles.tsx';
import {FC} from 'react';
import {IPrimaryButton} from '../../constants/interfaces/interfaces.tsx';
import Colors from '../../constants/colors/colors.tsx';

const PrimaryButton: FC<IPrimaryButton> = props => {
  const {text, onPress} = props;
  return (
    <View style={[styles.outerContainer]}>
        <Pressable 
        style={({pressed}) =>
            pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
       }
            onPress={onPress}
            android_ripple={{color: Colors.primary500}}
        >

            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    </View>
  );
};

export default PrimaryButton;
