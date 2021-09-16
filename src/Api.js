const BASE_API = 'https://api.b7web.com.br/devbarber/api';

import { AsyncStorage } from 'react-native';

export default {
    checkToken: async (token) => {
        const req = await fetch (`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();
        return json;

    },

    signIn: async (email, password) => {
        const req = await fetch (`${BASE_API}/auth/login`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        const json = await req.json();
        return json;
    },

    signUp: async (name, email, password) => {
        const req = await fetch (`${BASE_API}/user`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await req.json();
        return json;

    },

    logout: async () => {
        const token = await AsyncStorage.getItem('token');

        const req = await fetch (`${BASE_API}/auth/logout`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });

        const json = await req.json();
        return json;
    },

    getFuncs: async () => {
        const token = await AsyncStorage.getItem('token');

        const req = await fetch (`${BASE_API}/barbers?token=${token}`);
        const json = await req.json();
        return json;
    },

    getFunc: async (id) => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch (`${BASE_API}/barber/${id}?token=${token}`);
        const json = await req.json();
        return json; 
    },

    setFavorite: async (barberId) => {
        const token = await AsyncStorage.getItem('token');

        const req = await fetch(`${BASE_API}/user/favorite`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({token, barber:barberId})
        });
        const json = await req.json();
        return json;
    },

    setAppointment: async (
        userId, 
        service,
        selectedYear,
        selectedMonth,
        selectedDay,
        selectedHour
        ) => {
        const req = await fetch (`${BASE_API}/user/appointment`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token, userId,
                userId, 
                service,
                selectedYear,
                selectedMonth,
                selectedDay,
                selectedHour
            })
        });
        const json = await req.json();
        return json;
    }
};