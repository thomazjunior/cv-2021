import React, { useState, useContext } from 'react';
import { Text } from 'react-native';
import { Container, InputArea, CustomButton, CustomButtonText, SignMessageButton, SignMessageButtonText, SignMessageButtonTextBold } from './styles';
import StudioLogo from '../../../assets/logo.svg';
import SignInput from '../../components/SignInput';
import EmailIcon from '../../../assets/email.svg';
import PersonIcon from '../../../assets/person.svg';
import LockIcon from '../../../assets/lock.svg';
import { useNavigation } from '@react-navigation/native';
import Api from '../../Api';
import { AsyncStorage } from 'react-native';
import { UserContext } from '../../contexts/UserContext';

export default () => {
    const { dispatch: userDispatch} = useContext(UserContext);
    const navigation = useNavigation();

    
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    
    const handleMessageButtonClick = () => {
            navigation.reset({
                routes: [{name: 'SignIn'}]
            });
    }

   const handleSignClick = async () => {
    if(nameField != '' && emailField != '' && passwordField != ''){
        let res = await Api.signUp(nameField, emailField, passwordField);
        if (res.token){
            await AsyncStorage.setItem('token', res.token);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                       avatar: res.data.avatar 
                    }
                });

                navigation.reset({
                    routes:[{name: 'MainTab'}]
                })

        } else {
            alert ('Erro: ' + res.error);
        }
    } else {
        alert ("Preencha os campos!");
    }

    }

    return (
        <Container>
            <StudioLogo width="100%" height="160" />

            <InputArea>

                <SignInput 
                    IconSvg={PersonIcon}
                    placeholder="Digite o seu nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />
                <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite o seu nome"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />
                <SignInput
                     IconSvg={LockIcon}
                     placeholder="Digite a sua senha"
                     value={passwordField} 
                     onChangeText={t=>setPasswordField(t)}
                     password={true}
                    />
                    
                <CustomButton onPress={handleSignClick}>
                <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça login!</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}