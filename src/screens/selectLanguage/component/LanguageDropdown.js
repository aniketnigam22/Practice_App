import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { AppImages } from '../../../common/AppImages';
import { commonColor } from '../../../common/color';
import { responsiveHeight } from '../../../common/metrices';
import { useDispatch } from 'react-redux';
import {selectLanguage} from '../../../redux/language/selectLanguage';
import { SelectLanguage } from '../../../redux/language/selectLanguage';


const LanguageDropdown = () => {

  const emojisWithIcons = [
    { title: 'Arabic', icon: 'emoticon-happy-outline' },
    { title: 'English', icon: 'emoticon-cool-outline' },
    { title: 'Urdu', icon: 'emoticon-lol-outline' },
    { title: 'Bangali', icon: 'emoticon-lol-outline' },
    { title: 'Hindi', icon: 'emoticon-lol-outline' }

  ]

  const dispatch = useDispatch();
    
  return (
    <>
      <SelectDropdown data={emojisWithIcons}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          console.log(selectedItem.title)
          dispatch(SelectLanguage(selectedItem.title))
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) || 'Select Language'}
              </Text>
              <Image source={AppImages.drop_icon} style={styles.dropdownButtonArrowStyle} />
            </View>
          );

        }}
        dropdownStyle={styles.dropdownMenuStyle}
        defaultValue={emojisWithIcons[0]}
      />
    </>
  )
}
const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: "100%",
    height: responsiveHeight(56),
    backgroundColor: commonColor.white,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    elevation: 2,
    marginTop:responsiveHeight(20)
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: commonColor.placeholder_color,
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: commonColor.white,
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
export default LanguageDropdown
