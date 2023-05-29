import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {useTranslation} from 'react-i18next';

const data = [
  {label: 'English', value: '1', type: 'en'},
  {label: 'French', value: '2', type: 'fr'},
  {label: 'Italian', value: '3', type: 'it'},
];
const I18Next = () => {
  const [value, setValue] = useState(null);
  const {t, i18n} = useTranslation();
  return (
    <SafeAreaView style={{flex: 1}}>
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
            i18n.changeLanguage(item.type);
          }}
        />
        <Text>{t('welcome')}</Text>
      </View>
    </SafeAreaView>
  );
};

export default I18Next;

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
