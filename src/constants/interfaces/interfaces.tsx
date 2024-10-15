import { NavigationProp } from '@react-navigation/native';
import {ReactNode} from 'react';
import { ViewStyle } from 'react-native';

type TButtonUser = {
  name: string;
  email: string;
  numb: number;
};

export interface ISignUp {
  text: string;
  email: string;
  password: string;
  user: TButtonUser[];
}

export interface CInputHolder {
  children?: ReactNode;
}

export interface ITitle {
  text: string;
}
export interface IPrimaryButton {
  text: string;
  onPress: ()=> void;
}
export interface IHome {
  name?: string;
  email?: string;
  password?: string;
  navigation?: any
  route?: any
}

export interface INavigation {
  navigation: any
}

export interface ITask {
  navigation?: any;
  route?: any;
}

export interface ISetPriority {
  priority?: number;
  text: string;
  onPress: () => void;
}

 export interface ITaskItem {
  title: string;
  description: string;
  priority: string;
 
}