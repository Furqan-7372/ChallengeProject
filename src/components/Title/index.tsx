import { Text, View, TextInput, Image } from "react-native";
import styles from './styles.tsx';
import {FC} from 'react';
import { ITitle } from '../../constants/interfaces/interfaces.tsx';

const Title: FC<ITitle> = props => {
const {text} = props;

  return (
    <View style={styles.mainHeading}>
      <Text style={styles.textContainer}>{text}</Text>
    </View>
  );
};

export default Title