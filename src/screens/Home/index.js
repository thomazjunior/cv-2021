import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Api from '../../Api';

import {
    Container,
    Scroller,

    HeaderArea,
    HeaderTitle,
    SearchButton,

    LocationArea,
    LocationInput,
    LocationFinder,

    LoadingIcon,
    ListArea
} from './styles';

import StudioItem from '../../components/StudioItem';
import SearchIcon from '../../../assets/search.svg';
import MyLocationIcon from '../../../assets/my_location.svg';

export default () => {



    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
    const [ coords, setCoords ] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

 

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    
    const getFuncs = async () => {
        setLoading(true);
        setList([]);
        let res = await Api.getFuncs();
       alert(res);
        if (res.error == ''){
            setList(res.data);
        } else {
            alert ("Erro: " + res.error);
        }
        
        setLoading(false);
    }

    useEffect(() =>{
        getFuncs();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getFuncs();
    }

    const handleLocationSearch = () => {
        setCoords({});
        getFuncs();
    }
    


    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                
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

                {loading &&
                    <LoadingIcon size="large" color="#FFFFFF" />
                }

                <ListArea>
                    {list.map((item, k)=>(
                        <StudioItem key={k} data={item} />
                    ))}
                </ListArea>

            </Scroller>
        </Container>
    )

}