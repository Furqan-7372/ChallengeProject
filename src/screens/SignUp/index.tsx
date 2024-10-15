import {Text, View, TextInput, Image} from 'react-native';
import styles from './styles.tsx';
import {FC, useState} from 'react';
import {INavigation} from '../../constants/interfaces/interfaces.tsx';
import Title from '../../components/Title/index.tsx';
import PrimaryButton from '../../components/PrimaryButton/index.tsx';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignUp: FC<INavigation> = ({navigation}) => {
  const nav = (data: object) => {
    navigation.navigate('Home', {data});
  };

  // (VAL) => console.log("nav", VAL)

  return (
    <>
      <Formik
        initialValues={{name: '', email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={nav}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.rootContainer}>
            <Image
              style={styles.imageContainer}
              source={require('../../assets/images/signup.png')}
            />
            <View style={styles.titleView}>
              <Title text={'Please Enter Your Details'} />
            </View>
            <View style={styles.innerView}>
              <Text style={styles.textContainer}>Name</Text>
              <TextInput
                style={styles.inputContainer}
                placeholder="Enter Your Name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              {touched.name && errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
              <Text style={styles.textContainer}>Email</Text>
              <TextInput
                style={styles.inputContainer}
                placeholder="Enter Your Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <Text style={styles.textContainer}>Password</Text>
              <TextInput
                style={styles.inputContainer}
                placeholder="Enter Your Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <View style={styles.buttonContainer}>
                <PrimaryButton text="Confirm" onPress={handleSubmit} />
              </View>
            </View>
          </View>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
