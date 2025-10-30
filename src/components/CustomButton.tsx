import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.btn}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.2, 0.5]}
        colors={['#a059fd', '#6E5DFF', '#045DDA']}
        style={styles.lianerGradient}
      >
        <Text style={styles.btnText}>Sign in</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    borderRadius: 8,
  },
  lianerGradient: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
