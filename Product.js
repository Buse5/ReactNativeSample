import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Axios from 'axios';
import { List,Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default function Product({ navigation }) {

  const [ arr, setArr ] = useState([])

  useEffect(() => {
      
      const url = 'https://www.jsonbulut.com/json/product.php?ref=c7c2de28d81d3da4a386fc8444d574f2&start=0'
      Axios.get(url).then( res => {
        const bilgiler =  res.data.Products[0].bilgiler
        setArr(bilgiler)
      })

  }, [])


  return (
    <View style={styles.container}>
      <ScrollView>

        <FlatList 
          data={arr}
          keyExtractor={ (item) => item.toString() }
          renderItem={({item}) => 
          <TouchableOpacity onPress={ () =>{  navigation.navigate('detail')  }}>
              <Card>
                <Card.Cover resizeMode='stretch' source={{ uri: item.images[0].normal }} />
                <Card.Content>
                  <Title>{ item.productName }</Title>

                  <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                    <Paragraph style={{ width: 200, }}>{ item.brief }</Paragraph>
                    <Text style={{fontSize:25, color:'red'}}>{item.price}₺</Text>
                  </View>
                  
                </Card.Content>
              </Card>
          </TouchableOpacity>
          }
        />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
});
