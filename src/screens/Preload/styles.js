import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #DB7093;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: 1000px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 0px;
`;

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;