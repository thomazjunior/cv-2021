import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import StudioLogo from '../../../assets/logo.svg';
import { useNavigation } from '@react-navigation/native'
import { AsyncStorage } from 'react-native';

export default () => {
    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token){
                //validar o token
            } else {
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    }, []);

    return (
        <Container>
            <StudioLogo width="100%" height="160" />
            <LoadingIcon size="large" color="#FFFFFF"/>            
        </Container>
    );
}

