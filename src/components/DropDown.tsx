import React, { useState } from 'react';
import ArrowUp from './ArrowUp';
import {
  View,
  Text,
  Image,
} from 'react-native';
import ArrowDown from './ArrowDown';
import ArrowUpGrey from './ArrowUpGrey';
import ArrowDownGrey from './ArrowDownGrey';
import DropDownPicker from 'react-native-dropdown-picker';

interface props {
  open?: any;
  value?: any;
  content?: any;
  setOpen?: any;
  setValue?: any;
  onChange?: any;
  textColor?: any;
  blueArrow?: any;
  borderColor?: any;
  placeholder?: any;
  Icon?: any;
}

const DropDown: React.FC<props> = ({
  open,
  value,
  content,
  setOpen,
  setValue,
  onChange,
  textColor,
  blueArrow,
  placeholder,
  borderColor,
  Icon,
}) => {
  const [items, setItems] = useState<any>(content);

  return (
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        onChangeValue={value => {
          onChange(value);
        }}
        setValue={setValue}
        setItems={setItems}
        itemProps={{
          style: { marginBottom: 10 },
        }}
        placeholder={placeholder}
        dropDownContainerStyle={{
          borderColor: borderColor,
          paddingLeft: 10,
          paddingTop: 5,
          backgroundColor: '#f5f5f5',
          borderWidth: blueArrow ? 2 : 0,
          maxHeight: 500,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        style={{
          borderColor: borderColor,
          borderWidth: 2,
          backgroundColor: '#f5f5f5',
          flexDirection: 'row',
          alignItems: 'center',
        }}
        textStyle={{
          color: textColor,
          fontSize: 16,
          marginLeft: 10,
        }}
        arrowIconStyle={{
          backgroundColor: '#ffffff',
        }}
        arrowIconContainerStyle={{}}
        showTickIcon={false}
        autoScroll
        showArrowIcon={true}
        dropDownDirection="BOTTOM"
        ArrowUpIconComponent={() => (blueArrow ? <ArrowUp /> : <ArrowUpGrey />)}
        ArrowDownIconComponent={() =>
          blueArrow ? <ArrowDown /> : <ArrowDownGrey />
        }
      />
  );
};

export default DropDown;
