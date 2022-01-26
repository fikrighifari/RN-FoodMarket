import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, TextInput} from '../../components';
import Header from '../../components/molecules/Header';
import { useForm } from '../../utils';

const SignIn = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [form, setForm] = useForm({
    email: '',
    password: '',
  })

  const onSubmit = () => {
    console.log('form: ', form);
    // console.log('password: ', password);
  };

  return (
    <View style={styles.page}>
      <Header title={'Sign In'} subTitle={'Find your best ever meal'} />
      <View style={styles.container}>
        <TextInput
          label={'Email Address'}
          placeHolder={'Type your email address'}
          value={form.email}
          onChangeText={value => setForm('email',value)}
        />
        <Gap height={16} />
        <TextInput
          label={'Password'}
          placeHolder={'Type your password'}
          value={form.password}
          onChangeText={value => setForm('password',value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button text="Sign In" onPress={onSubmit} />
        <Gap height={12} />
        <Button
          text="Create New Account"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
  },
});
