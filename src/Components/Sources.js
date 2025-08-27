import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {API, Storage} from 'aws-amplify';
import {listSources} from '../graphql/queries';
import {TouchableOpacity} from 'react-native';


const sources = [
  {
    name: 'ସମ୍ବାଦ',
    image: require('../assets/sambad.png'),
    sourceLink: 'https://sambad.in/',
  },
  {
    name: 'ଓଡିଶା ଭାଷ୍କର',
    image: require('../assets/odisha_bhashkar.png'),
    sourceLink: 'https://odishabhaskar.com/',
  },
];
export default function Sources({navigation}) {
  // const [sources, setSources] = useState([]);

  // useEffect(() => {
  //   //getData();
  // }, []);

  // const getSources = async () => {
  //   try {
  //     // const variable = {limit: 2, sortDirection: 'DESC', type: "post"}
  //     const Data = await API.graphql({query: listSources, authMode: 'AWS_IAM'});
  //     const posts1 = await Promise.all(
  //       Data.data.listSources.items.map(async product => {
  //         const image = await Storage.get(product.sourceImage);
  //         product.s3Image = image;
  //         return product;
  //       }),
  //     );
  //     console.log(Data);
  //     console.log(Data.data.listSources.items);
  //     setSources(posts1);
  //     const jsonValue = JSON.stringify(Data.data.listSources.items);
  //     await AsyncStorage.setItem('sources', jsonValue);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('sources');
  //     console.log(jsonValue);
  //     if (jsonValue != null) {
  //       JSON.parse(jsonValue);
  //       setSources(JSON.parse(jsonValue));
  //     } else {
  //       getSources();
  //     }

  //     return jsonValue;
  //   } catch (e) {
  //     // error reading value
  //   }
  // };

  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic'}}>
        Sources
      </Text>
      <View style={styles.container}>
        {sources
          ? sources.map((sourceData, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.push('Browser', {url: sourceData.sourceLink})
                  }>
                  <View style={styles.box}>
                    <View style={styles.inner}>
                      <Image
                        style={{width: 100, height: 50, resizeMode: 'contain'}}
                        source={sourceData.image}
                      />
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                        {sourceData.name}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })
          : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '85%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    height: '20%',
    padding: 5,
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    padding: 10,
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
});
