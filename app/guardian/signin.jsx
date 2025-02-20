import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { globalStyles } from '../../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { width, height } = useWindowDimensions();

    const handleSubmit = async () => {
        if (!username || !password) {
            alert("빈칸없이 작성해주세요");
        } else {
            try {
                const response = await axios.post(
                    `https://port-0-v1-server-9zxht12blq9gr7pi.sel4.cloudtype.app/login`,
                    {
                        userId: username,
                        password: password,
                    },
                    {
                        withCredentials: true,
                    }
                );

                if (response.status !== 200) {
                    throw new Error('로그인 실패');
                }

                const { accessToken, refreshToken } = response.data.tokens;

                await AsyncStorage.setItem("accessToken", accessToken);
                await AsyncStorage.setItem("refreshToken", refreshToken);

                // const userResponse = await axios.get(`https://port-0-v1-server-9zxht12blq9gr7pi.sel4.cloudtype.app/user`, {
                //     headers: {
                //         'access-token': accessToken,
                //     },
                // });

                // if (userResponse.status !== 200) {
                //     throw new Error('사용자 정보 가져오기 실패');
                // }

                router.push('/guardian/home');
            } catch (error) {
                console.error("로그인 중 오류 발생:", error.message);
            }   
        }
    };

    const handleSignup = () => {
        router.push('/child/signup');
    };

    const inputWidth = width > 400 ? '80%' : '90%';
    const buttonWidth = width > 400 ? '80%' : '90%';
    const buttonMarginTop = height > 700 ? 20 : 10;
    const fontSize = width > 400 ? 20 : 16;

    return (
        <View style={[globalStyles.container, { backgroundColor: '#F3F4F6' }]}>
            <View style={globalStyles.header}>
                <Text style={[globalStyles.subtitle]}>보호자 로그인</Text>
                <Text style={[globalStyles.description]}>로그인 정보를 입력해주세요</Text>
            </View>
            <View style={globalStyles.formGroup}>
                <Text style={globalStyles.label}>아이디를 입력하세요.</Text>
                <TextInput
                    style={[globalStyles.input, { width: inputWidth }]} 
                    placeholder="예시) boundary_baby"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>

            <View style={globalStyles.formGroup}>
                <Text style={globalStyles.label}>비밀번호를 입력하세요.</Text>
                <TextInput
                    style={[globalStyles.input, { width: inputWidth }] }
                    placeholder="예시) qwer!1234"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <View style={[styles.buttonContainer, { marginTop: 10 }]}>
                <Button onPress={handleSubmit} title="로그인" />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    signupLink: {
        color: '#565656',
        fontSize: 16,
        fontWeight: '200',
        marginTop: 20,
        textAlign: 'center',
        fontFamily: 'Pretendard',
    },
    buttonContainer: {
        alignItems: 'center',
        width: '100%',
    },
});

export default LoginScreen;
