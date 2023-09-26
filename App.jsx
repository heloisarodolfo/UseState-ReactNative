import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconn from 'react-native-vector-icons/Entypo';


export default function Cadastro () {

  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState(""); // Adicionei o estado para gênero
  const [data, setData] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [idioma, setIdioma] = useState("");


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cadastro :)</Text>
      <View style={styles.containerInput}>
        <Icon name="user" size={15} color="#0238F6" />
        <TextInput
        style={styles.input} 
        placeholder='Nome completo' 
        placeholderTextColor="#000"
        value={nome}
        onChangeText={setNome}
        />
      </View>
      <View style={styles.containerInput}>
        <Icon name="transgender" size={15} color="#0238F6" />
        <TextInput
        style={styles.input} 
        placeholder='Gênero' 
        placeholderTextColor="#000"
        value={genero}
        onChangeText={setGenero}
         />
       </View>
      <View style={styles.containerInput}>
        <Icon name="calendar" size={15} color="#0238F6" />
         <TextInput
         style={styles.input} 
         placeholder='Data de Nascimento' 
         value={data}
         onChangeText={setData}
         />
      </View>
        <View style={styles.containerInput}>
          <Icon name="users" size={15} color="#0238F6" />
          <TextInput
          style={styles.input} 
          placeholder='Usuário' 
          value={usuario}
          onChangeText={setUsuario}
          />
        </View>
      <View style={styles.containerInput}>
        <Icon name="unlock-alt" size={15} color="#0238F6" />
        <TextInput
        style={styles.input} 
        placeholder='Senha' 
        value={senha}
        onChangeText={setSenha}
        />
        </View>
      <View style={styles.containerInput}>
        <Icon name="email" size={15} color="#0238F6" />
        <TextInput
        style={styles.input} 
        placeholder='E-mail' 
        value={email}
        onChange={setEmail}
        />
      </View>
      <View style={styles.containerInput}>
        <Icon name="mail" size={15} color="#0238F6" />
        <TextInput
        style={styles.input} 
        placeholder='Confirmar e-mail' 
        value={confirmEmail}
        onChange={setConfirmEmail}
        />
     </View>
     <View style={styles.containerInput}>
        <Icon name="v-card" size={15} color="#0238F6" />
        <TextInput
        style={styles.input} 
        placeholder='CPF' 
        value={cpf}
        onChange={setCpf}
        />
      </View>
      <View>
        <Icon name="language" size={15} color="#0238F6" />
        <TextInput
        style={styles.input} 	
        placeholder='Idioma' 
        value={idioma}
        onChange={setIdioma}
        />
      </View>

    <TouchableOpacity style={styles.botao} onPress={''} >
      <Text style={styles.buttonText}>Cadastre-se</Text>
    </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    marginBottom: 40,
    marginTop: 40,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0238F6',
  },
  containerInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 2,
    borderRadius: 10,
    borderColor: '#0238F6',
    padding: 16,
    marginLeft: 5,
    width: '80%'
  },
  button: {
    backgroundColor: '#0238F6',
    width: '40%',
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  }
   
});
