import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {API} from 'aws-amplify';
import {listCategories} from '../graphql/queries';
import {Card, Title, Paragraph} from 'react-native-paper';

export default function Category({navigation}) {
  //const [categories, setCategories] = useState([]);

  const categories = [
    {name: 'ଦେଶ ବିଦେଶ', value: 'india-and-beyond'},
    {name: 'ମହାନଗର', value: 'metro'},
    {name: 'ରାଜ୍ୟ', value: 'state'},
    {name: 'ବାଣିଜ୍ୟ', value: 'business'},
    {name: 'ଖେଳ', value: 'sports'},
    {name: 'ରାଜନୀତି', value: 'politics'},
    // {name: 'manaranjan', value: 'entertainment'},
  ];

  useEffect(() => {
    //getData();
  }, []);

  // const getCategory = async () => {
  //   try {
  //     // const variable = {limit: 2, sortDirection: 'DESC', type: "post"}
  //     const Data = await API.graphql({
  //       query: listCategories,
  //       authMode: 'AWS_IAM',
  //     });
  //     // const posts1 = await Promise.all( postData.data.listCategories.items.map( async product => {
  //     //     const image = await Storage.get(product.imageUrl);
  //     //     product.s3Image = image
  //     //     return product
  //     //   })
  //     // );
  //     //console.log(Data.data.listCategories.items);
  //     setCategories(Data.data.listCategories.items);
  //     const jsonValue = JSON.stringify(Data.data.listCategories.items);
  //     await AsyncStorage.setItem('categories', jsonValue);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const getData = async () => {
    try {
      // const jsonValue = await AsyncStorage.getItem('categories');
      // console.log(jsonValue);
      // if (jsonValue != null) {
      //   JSON.parse(jsonValue);
      //   setCategories(JSON.parse(jsonValue));
      // } else {
      //   getCategory();
      // }

      // return jsonValue;
    } catch (e) {
      // error reading value
    }
  };

  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic'}}>
        Category
      </Text>
      <View style={styles.container}>
        {categories
          ? categories.map((category, index) => (
              <TouchableOpacity
                style={styles.box}
                key={index}
                onPress={() => {
                  navigation.push('categoryscrapper', {
                    name: category.name,
                    categoryName: category.value,
                  });
                }}>
                <View style={styles.inner}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: '#49cade',
                    }}>
                    {' ' + category.name + ' '}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: '300',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
  box: {
    padding: 5,
    margin: 5,
    borderRadius: 5,
    shadowColor: '#49cade',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  inner: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 5,
  },
});
