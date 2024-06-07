import React from 'react';
import { View, StyleSheet } from 'react-native';
import CatGallery from './components/Galeria_de_Fotos'; 

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <CatGallery />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default App;
