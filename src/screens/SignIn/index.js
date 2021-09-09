import React, { useState, useContext } from 'react';
import { Text } from 'react-native';
import { Container, InputArea, CustomButton, CustomButtonText, SignMessageButton, SignMessageButtonText, SignMessageButtonTextBold } from './styles';
import StudioLogo from '../../../assets/logo.svg';
import SignInput from '../../components/SignInput';
import EmailIcon from '../../../assets/email.svg';
import LockIcon from '../../../assets/lock.svg';
import { useNavigation } from '@react-navigation/native'
import Api from '../../Api';
import { AsyncStorage } from 'react-native';
import { UserContext } from '../../contexts/UserContext';


export default () => {
    const { dispatch: userDispatch} = useContext(UserContext);

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    
    const handleMessageButtonClick = () => {
            navigation.reset({
                routes: [{name: 'SignUp'}]
            });
    }

   const handleSignClick = async () => {
        if(emailField != '' && passwordField != ''){
            let json = await Api.signIn(emailField, passwordField);
            if (json.token){
                await AsyncStorage.setItem('token', json.token);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                       avatar: json.data.avatar 
                    }
                });

                navigation.reset({
                    routes:[{name: 'MainTab'}]
                });

            } else {
                alert ('Email e/ou senha errados!');
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
                    IconSvg={EmailIcon}
                    placeholder="Digite o seu e-mail"
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
                <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda nao possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se!</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}