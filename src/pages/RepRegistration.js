import React, {useState, useEffect} from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated, Keyboard} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function RepRegistration(){

  const navigation = useNavigation();

  const [offset] = useState(new Animated.ValueXY({x: 0, y:80}));
  const [opacity] = useState(new Animated.Value(0));
  const [input, setInput] = useState('');

  useEffect(()=> {

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue:0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue:1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

  },[]);

  return(
    <KeyboardAvoidingView style={styles.background}>

      <Animated.View
       style={[
         styles.container,
         {
           opacity: opacity,
           transform: [
             {translateY: offset.y }
           ]
         }
         ]}
      > 
        <TextInput
        style={styles.input}
        placeholder="Email da república"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TextInput
        style={styles.input}
        placeholder="Digite o nome da república"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TextInput
        style={styles.input}
        placeholder="Localização"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TextInput
        style={styles.input}
        placeholder="Capacidade de moradores"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TextInput
        style={styles.input}
        placeholder="Custo médio mensal (R$)"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TextInput
        style={styles.input}
        placeholder="Telefone para contato"
        autoCorrect={false}
        onChangeText={()=> {}}
        />
  
        <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        value={input}
        onChangeText={(texto)=> setInput(texto)}
        secureTextEntry={true}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text 
          style={styles.submitText}
          onPress={() => navigation.navigate('Bem vindo')}>Criar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text
           style={styles.registerText}
           onPress={() => navigation.navigate('cadastro')}>Criar Conta
           </Text>
        </TouchableOpacity>

      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3D3D3'
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom: 50
  },
  input:{
    backgroundColor: '#FFF',
    width:'90%',
    marginBottom:15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding:10,
  },
  btnSubmit:{
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7
  },
  submitText:{
    color: '#FFF',
    fontSize:18
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText:{
    color: '#222'
  }
});

