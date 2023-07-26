import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

interface props {
  name?: any;
  icon?: any;
  Value?: any;
  email?: any;
  phone?: any;
  onBlur?: any;
  label: string;
  password?: any;
  searchBar?: any;
  activeIcon?: any;
  confirmPassword?: any;
  handleChange: (val: string) => void;
}

const Textinput: React.FC<props> = ({
  icon,
  name,
  label,
  email,
  phone,
  onBlur,
  password,
  Value = '',
  handleChange,
  confirmPassword,
  activeIcon,
}) => {
  const ref: any = useRef(null);
  const [value, setValue] = useState(() => Value);
  const [isActive, setIsActive] = useState<boolean>(!!Value);
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const handleActive = () => {
    setIsActive(true);
  };

  useEffect(() => {
    setValue(Value);
    setIsActive(!!Value);
  }, [Value]);

  return (
    <View style={isActive ? styles.active_input_field : styles.input_container}>
      <View>
        {icon && (
          <Image
            style={email ? styles.mail_icon : styles.input_icon}
            source={isActive ? activeIcon : icon}
          />
        )}

        {/* Custom Label */}
      </View>
      <View>
        <Text
          onPress={() => {
            ref.current.focus();
            setIsActive(true);
          }}
          style={isActive ? styles.active_input_label : styles.input_label}>
          {label}
        </Text>
      </View>

      <View>
        <TextInput
          ref={ref}
          onChangeText={value => {
            setValue(value);
            handleChange(value);
          }}
          onFocus={handleActive}
          onBlur={() => {
            if (value.length == 0) {
              setIsActive(false);
            }
          }}
          value={value}
          style={
            name
              ? styles.name_input_text
              : phone
              ? styles.phone_input
              : password
              ? styles.password_input
              : styles.confirm_password
          }
          secureTextEntry={
            // if input field is for password then hide the entered text
            (password && showPassword) || (confirmPassword && showPassword)
              ? true
              : false
          }
          keyboardType={phone ? 'numeric' : 'default'}
          // for password user can enter 8 char and normal 50
          maxLength={password || confirmPassword ? 8 : 50}
        />
      </View>

      {/* Show the eye icon for password fileds only */}
      {isActive && (
        <>
          {password || confirmPassword ? (
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}
              style={{position: 'absolute', right: 12}}>
              <Image
                style={styles.input_icon}
                source={require('../assets/icons/eye_icon.png')}
              />
            </TouchableOpacity>
          ) : (
            ''
          )}
        </>
      )}
    </View>
  );
};

export default Textinput;

const styles = StyleSheet.create({
  input_container: {
    borderWidth: 2,
    borderColor: '#186FE7',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginBottom: 24,
  },

  input_icon: {
    marginRight: 12,
    height: 18,
    width: 18,
    marginLeft: 12,
  },

  mail_icon: {
    marginRight: 12,
    height: 16,
    width: 20,
    marginLeft: 12,
  },

  input_label: {
    fontSize: 16,
    color: '#186FE7',
  },

  active_input_label: {
    fontSize: 12,
    color: '#8a8a8a',
    position: 'absolute',
    top: -35,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 5,
  },

  active_input_field: {
    borderWidth: 2,
    borderColor: '#8a8a8a',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginBottom: 24,
  },

  name_input_text: {
    maxWidth: 305,
    minWidth: 260,
    color: '#8a8a8a',
  },

  phone_input: {
    maxWidth: 305,
    minWidth: 260,
    color: '#8a8a8a',
  },

  password_input: {
    maxWidth: 305,
    minWidth: 150,
    color: '#8a8a8a',
  },

  confirm_password: {
    maxWidth: 305,
    minWidth: 100,
    color: '#8a8a8a',
  },
});
