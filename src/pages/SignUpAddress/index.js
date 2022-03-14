import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useForm} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {useDispatch, useSelector} from 'react-redux';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Bandung',
  });

  const dispatch = useDispatch();
  const registerReducer = useSelector(state => state.registerReducer);

  const onSumbit = () => {
    console.log('form: ', form);
    const data = {
      ...form,
      ...registerReducer,
    }
    console.log('Register data: ', data);
    // navigation.replace('SuccessSignUp')
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Address"
          subTitle="Make sure it’s valid"
          onBack={() => {}}
        />
        <View style={styles.container}>
          <TextInput
            label={'Phone No.'}
            placeHolder={'Type your phone number'}
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label={'Address'}
            placeHolder={'Type your address'}
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label={'House No.'}
            placeHolder={'Type your house number'}
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label={'City'}
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={24} />
          <Button text="Sign Up Now" onPress={onSumbit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

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
