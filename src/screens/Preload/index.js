import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './styles';
import StudioLogo from '../../../assets/logo.svg';
import { useNavigation } from '@react-navigation/native'
import { AsyncStorage } from 'react-native';
import Api from '../../Api';
import { UserContext } from '../../contexts/UserContext';

export default () => {
    const { dispatch: userDispatch} = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token){
              let res = await Api.checkToken(token);
              if (res.token){
                await AsyncStorage.setItem('token', json.token);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                       avatar: json.data.avatar 
                    }
                });

                navigation.reset({
                    routes:[{name: 'MainTab'}]
                })
              }  else {
                  navigation.navigate('SignIn');
              }
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

