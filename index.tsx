import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from "react-native";
import {styles} from './styles';

export default function Index() {
  const [termsAccepted, setTermsAccepted] = useState(false);


  const handleGoogleLogin = () => {
    alert('Google Login não implementado ainda');
  };

  const handleSignup = () => {
    alert('Cadastro não implementado ainda');
  };

  const toggleTermsAccepted = () => {
    setTermsAccepted(!termsAccepted);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CLIMATEMPO</Text>
      <Text style={styles.subtitle}>A StormGeo Company</Text>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <Text style={styles.googleButtonText}>Faça Login para entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <Text style={styles.googleButtonText}>Continuar com o Gmail</Text>
      </TouchableOpacity>

  
    
      <View style={styles.termsContainer}>
        <Button
          title={termsAccepted ? "Termos Aceitos" : "Aceitar Termos"}
          onPress={toggleTermsAccepted}
          color={termsAccepted ? 'green' : 'grey'}
        />
        <Text style={styles.termsText}>
          Declaro estar de acordo com os <Text style={styles.link}>Termos e Condições</Text>.
        </Text>
      </View>

      <TouchableOpacity onPress={handleSignup}>
        <Text style={[styles.signupText, { color: 'dodgerblue' }]}>
          Não tem uma conta? Cadastre-se
        </Text>
      </TouchableOpacity>
    </View>
  );
}
