import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import axios from 'axios';

const CatGallery: React.FC = () => {
  const [catUrl, setCatUrl] = useState<string | null>(null);

  useEffect(() => {
    fetchCatPhoto();
  }, []);

  const fetchCatPhoto = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      setCatUrl(response.data[0].url);
    } catch (error) {
      console.error('Error fetching cat photo:', error);
    }
  };

  return (
    <View style={styles.container}>
      {catUrl && <Image source={{ uri: catUrl }} style={styles.image} />}
      <Button title="Get New Cat Photo" onPress={fetchCatPhoto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
  },
});

export default CatGallery;
