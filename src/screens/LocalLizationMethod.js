import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import strings from '../Languages/Languages';
const data = [
  {label: 'English', value: '1', type: 'en'},
  {label: 'Hindi', value: '2', type: 'hi'},
  {label: 'Japaneese', value: '3', type: 'it'},
];
const LocalLizationMethod = () => {
  const [value, setValue] = useState(null);
  const onchange_fun = type => {
    console.log('type', typeof type);
    strings.setLanguage(type);
  };

  useEffect(() => {}, [value]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          value={value}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Select language'}
          searchPlaceholder="Search..."
          onChange={item => {
            setValue(item.label);
            onchange_fun(item.type);
          }}
        />
        <Text>{strings.how}</Text>
      </View>
    </SafeAreaView>
  );
};
export default LocalLizationMethod;
const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: '#fff',
    height: 45,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
  },
  placeholderStyle: {
    color: 'grey',
    fontSize: 14,
  },
  selectedTextStyle: {
    color: '#000',
    fontSize: 14,
  },
  inputSearchStyle: {
    color: '#000',
    fontSize: 14,
  },
  iconStyle: {
    tintColor: '#000',
  },
});
