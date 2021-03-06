import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {useForm} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';

const SignUp = ({navigation}) => {
  // const globalState = useSelector(state => state.globalReducer);
  // console.log('global', globalState)
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log('form: ', form);
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.navigate('SignUpAddress');
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header title="Sign Up" subTitle="Register and eat" onBack={() => {}} />
        <View style={styles.container}>
          <View style={styles.photoLocation}>
            <View style={styles.borderPhoto}>
              <View style={styles.photoContainer}>
                <Text style={styles.addPhotoLabel}>Add Photo</Text>
              </View>
            </View>
          </View>
          {/* <Text>
          {`status error : ${globalState.isError}`}
        </Text> */}
          <TextInput
            label={'Full Name'}
            placeHolder={'Type your full name'}
            value={form.name}
            onChangeText={value => setForm('name', value)}
          />
          <Gap height={16} />
          <TextInput
            label={'Email Address'}
            placeHolder={'Type your email address'}
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={16} />
          <TextInput
            label={'Password'}
            placeHolder={'Type your password'}
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={24} />
          <Button text="Continue" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
  photoLocation: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  addPhotoLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
