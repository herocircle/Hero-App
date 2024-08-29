import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkAuthStatus = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      return !!userToken;
    } catch (error) {
      console.error('Failed to check authentication status:', error);
      return false;
    }
  };
  