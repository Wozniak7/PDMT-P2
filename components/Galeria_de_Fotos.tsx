import React, { useState } from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import axios from 'axios';

const CatGallery: React.FC = () => {
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
    <View style={styles.container}>
      {catUrls.map((url, index) => (
        <Image key={index} source={{ uri: url }} style={styles.image} />
      ))}
      <Button title="5 Fotos de Gatinhos" onPress={fetchCatPhotos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 10,
  },
});

export default CatGallery;
