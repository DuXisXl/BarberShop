import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Barbearia Premium</Text>
      </View>

      {/* Imagem */}
      <Image
        style={styles.image}
        source={{ uri: 'https://placehold.co/300x200' }} // Placeholder de imagem
      />

      {/* Descrição */}
      <Text style={styles.description}>
        Corte de cabelo profissional com qualidade e estilo. Agende agora!
      </Text>

      {/* Botão */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Agendar Horário</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8B4513',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default HomeScreen;
