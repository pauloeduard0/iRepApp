import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import StudentRegistration from './pages/StudentRegistration';
import RepRegistration from './pages/RepRegistration';

const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="login"
                    component={Login} 
                    options={{
                        title:'Bem vindo',
                        headerTitleStyle:{
                            fontFamily:'Montserrat_700Bold',
                        },
                           
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather
                                    name="shopping-bag"
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                        )
                    }} 
                />
                <Stack.Screen
                    name="cadastro"
                    component={StudentRegistration}
                    options={{
                        title:'Cadastro',
                        headerTitleStyle:{
                            fontFamily:'Montserrat_700Bold',
                        },
                           
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather
                                    name="shopping-bag"
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
                <Stack.Screen
                    name="cadastrorep"
                    component={RepRegistration}
                    options={{
                        title:'Cadastro Rep :)',
                        headerTitleStyle:{
                            fontFamily:'Montserrat_700Bold',
                        },
                           
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather
                                    name="shopping-bag"
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                        )
                    }}  
                />
                <Stack.Screen
                    name="home"
                    component={Home}
                    options={{
                        title:'ALUGUE',
                        headerTitleStyle:{
                            fontFamily:'Montserrat_700Bold',
                        },
                           
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather
                                    name="shopping-bag"
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                        )
                    }}
                 />
                <Stack.Screen
                    name="detail" 
                    component={Detail} 
                    options={{
                        title:'Detalhe',
                        headerTitleStyle:{
                            fontFamily:'Montserrat_700Bold',
                        },
                           
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather
                                    name="shopping-bag"
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;