import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Mock user data
const mockUsers = [
  { email: 'test1@example.com', password: 'password123', username: 'User1' },
  { email: 'test2@example.com', password: 'secure456', username: 'User2' },
  { email: 'test3@example.com', password: 'qwerty789', username: 'User3' },
];

export default function LoginScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    const user = mockUsers.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      Alert.alert('Login Successful', `Welcome, ${user.username}!`);
      // Optionally navigate to tabs after login
      router.push('/(tabs)');
    } else {
      Alert.alert('Login Failed', 'Invalid email or password.');
    }
  };

  return (
    <View className="flex-1 justify-center px-5 bg-gray-900">
      <Text className="text-2xl font-bold mb-5 text-center text-white">
        Login
      </Text>
      <TextInput
        className="h-10 border border-gray-600 rounded-md mb-4 px-3 bg-gray-800 text-white"
        placeholder="Email"
        placeholderTextColor="#9CA3AF"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        className="h-10 border border-gray-600 rounded-md mb-4 px-3 bg-gray-800 text-white"
        placeholder="Password"
        placeholderTextColor="#9CA3AF"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        className="bg-blue-600 p-2 rounded-md"
        onPress={handleLogin}
      >
        <Text className="text-white text-center font-semibold">Login</Text>
      </TouchableOpacity>
    </View>
  );
}
