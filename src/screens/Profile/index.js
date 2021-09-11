import React, { useState, useEffect } from 'react';
import { Container, ListArea, Scroller } from './styles';
import { SectionList, Text } from 'react-native';
import Api from '../../Api';
import StudioItem from '../../components/StudioItem';


export default () => {

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
    
    return (
        <Container>
            <Scroller>
                <ListArea>
                    {list.map((item, k)=>(
                        <StudioItem key={k} data={item} />
                    ))}
                </ListArea>
            </Scroller>
        </Container>
    )


}