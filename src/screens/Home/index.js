import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container,
         Scroller,

         HeaderArea,
         HeaderTitle,
         SearchButton,

         LocationArea,
         LocationInput,
         LocationFinder,
} from './styles';
import SearchIcon from '../../../assets/search.svg';
import MyLocationIcon from '../../../assets/my_location.svg';

export default () => {



    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
    const [ coords, setCoords ] = useState(null);

    const [regiao, setRegiao] = useState({
        latitude: -23.4422149,
        longitude: -46.9235461,
        latitudeDelta: 0.014, 
        longitudeDelta: 0.014
    });

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }


    return (
        <Container>
            <Scroller>
                
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre o seu serviço preferido</HeaderTitle>
                    <SearchButton onPress={()=>navigation.navigate('Search')}>
                        <SearchIcon width="26" height="26" fill="#FFFFFF" />
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput
                        placeholder="Onde você está?"
                        placeholderTextColor="#FFFFFF"
                        value={locationText}
                        onChangeText={t=>setLocationText(t)}
                    />
                    <LocationFinder onPress={()=>goTo('Mapa')}>
                        <MyLocationIcon width="24" height="24"  fill="#FFFFFF"/>
                    </LocationFinder>
                </LocationArea>


            </Scroller>
        </Container>
    )

}