import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const rawToken = await AsyncStorage.getItem(`${this.namespace}:token`);

    return rawToken ? JSON.parse(rawToken) : [];
  }

  async setAccessToken(accessToken) {
    const currentToken = await this.getAccessToken();
    const newToken = [...currentToken, accessToken];

    await AsyncStorage.setItem(
      `${this.namespace}:token`,
      JSON.stringify(newToken)
    );
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;
