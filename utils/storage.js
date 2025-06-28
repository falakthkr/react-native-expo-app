import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeSession = async (token) => {
  try {
    await AsyncStorage.setItem('userToken', token);
  } catch (e) {
    // handle error
  }
};

export const getSession = async () => {
  try {
    return await AsyncStorage.getItem('userToken');
  } catch (e) {
    return null;
  }
};

export const clearSession = async () => {
  try {
    await AsyncStorage.removeItem('userToken');
  } catch (e) {
    // handle error
  }
}; 