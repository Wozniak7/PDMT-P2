import React, { useState } from 'react';
import { View, Image, StyleSheet, Button, ScrollView} from 'react-native';
import axios from 'axios';

const Galeria_de_Fotos: React.FC = () => {
  const [catUrls, setCatUrls] = useState<string[]>([]);

  const fetchCatPhotos = async () => {
    try {
      const apiKey = 'live_EZmKQU34taq8rPAyjA72ZVjBUbeKGAQzo4LiV3KWFTlo01X1Uo4t19BKLV0S0LRt';
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=5', {
        headers: {
          'x-api-key': apiKey,
        },
      });
      const newCatUrls = response.data.map((cat: { url: string }) => cat.url);
      setCatUrls(newCatUrls);
    } catch (error) {
      console.error('Error fetching cat photos:', error);
    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}><br></br>
    <Button title="5 Fotos de Gatinhos" onPress={fetchCatPhotos} /><br></br>
      {catUrls.map((url, index) => (
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
      marginBottom: 10,
    },
  });
  
  export default Galeria_de_Fotos;
