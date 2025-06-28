import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { clearSession } from '../utils/storage';

export default function ProfileScreen({ navigation }) {
  const handleLogout = async () => {
    await clearSession();
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
}); 