import React, { useState } from 'react';
import { Image, StyleSheet, Button, ScrollView } from 'react-native';
import axios from 'axios';

const Galeria_de_Fotos: React.FC = () => {
  const [gatoUrls, setGatoUrls] = useState<string[]>([]);

  const buscaFotosDeGato = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=5', {
        headers: {
          'x-api-key': 'live_EZmKQU34taq8rPAyjA72ZVjBUbeKGAQzo4LiV3KWFTlo01X1Uo4t19BKLV0S0LRt', 
        },
      });
      const novoGatoUrls = response.data.map((gato: { url: string }) => gato.url);
      setGatoUrls(antigoGatoUrls => [...antigoGatoUrls, ...novoGatoUrls]);
    } catch (error) {
      console.error('erro na busca de fotos', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button title="5 Fotos de Gatinhos" onPress={buscaFotosDeGato} />
      {gatoUrls.map((url, index) => (
        <Image key={index} source={{ uri: url }} style={styles.image} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 600,
    height: 600,
    marginTop: 10,
  },
});

export default Galeria_de_Fotos;
