import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: '1', text: 'Milk'},
    {id: '2', text: 'Sugar'},
    {id: '3', text: 'Bread'},
    {id: '4', text: 'Milo'},
  ]);

  const removeItem = (id) => {
    setItems((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      return Alert.alert('Error', 'Item cannot be empty!', {text: 'OK'});
    }
    setItems((prev) => [{id: String(Math.random() * 10), text}, ...prev]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} removeItem={removeItem} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
