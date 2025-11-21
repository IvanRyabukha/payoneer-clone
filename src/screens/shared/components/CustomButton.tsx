import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

type Props = {
  label: string;
  colors: string[];
  handlePress: () => void;
}

const CustomButton: React.FC<Props> = ({ label, colors, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={handlePress} >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.2, 0.5]}
        colors={colors}
        style={styles.lianerGradient}
      >
        <Text style={styles.btnText}>{label}</Text>
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
