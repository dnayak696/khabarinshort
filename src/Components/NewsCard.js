import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text} from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import * as FileSystem from 'expo-file-system';
import {Chip} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {useEffect} from 'react/cjs/react.production.min';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const imgeWidth = windowWidth * (10 / 10);

export default function NewsCard({post, navigation, refresh}) {
  const [showMenu, setShowMenu] = useState(0);

  const extractDate = date => {
    const newdate = new Date(date);
    const year = newdate.getFullYear();
    const month = newdate.getMonth() + 1;
    const dt = newdate.getDate();

    let newDt;
    let newMonth;
    //console.log(year, month, dt);

    if (dt < 10) {
      newDt = '0' + dt;
    } else {
      newDt = dt;
    }

    if (month < 10) {
      newMonth = '0' + month;
    } else {
      newMonth = month;
    }

   // console.log(year, month, dt);

    const date2 = newDt + '/' + newMonth + '/' + year;

    return date2;
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        // showMenu === 0 ? setShowMenu(10) : setShowMenu(0);

        // setTimeout(() => {
        //   setShowMenu(0);
        // }, 3000);
      }}>
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          flex: 1,
        }}>
        <View
          style={{
            zIndex: showMenu,
            height: 50,
            backgroundColor: 'white',
            width: windowWidth,
            shadowColor: '#49cade',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
            alignSelf: 'flex-end',
          }}>
          <Button
            icon="refresh"
            mode="text"
            style={{alignSelf: 'flex-end'}}
            onPress={() => {
              refresh();
              console.log('Hi');
            }}>
            Re fresh
          </Button>
        </View>

        <View
          style={{justifyContent: 'center', alignItems: 'center', top: -50}}
          onMagicTap={() => console.log('tapped')}>
          <Image
            style={styles.image}
            source={{
              uri: FileSystem.cacheDirectory + post.id + '.jpg',
            }}
            resizeMethod="resize"
          />

          {/* <FastImage
        style={styles.image}
        source={{
          uri: filedir,
          priority: FastImage.priority.high,
        }}
      /> */}
          <View
            style={{
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.title} numberOfLines={2} adjustsFontSizeToFit>{post.title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    alignSelf: 'flex-start',
                    padding: 5,
                    borderRadius: 10,
                    backgroundColor: 'lightgreen',
                  }}>
                  {post.postSourceName}
                </Text>
              </View>

              <Text style={{flex: 1, marginLeft: 15, color: '#49cade'}}>
                {extractDate(post.postedAt)}
              </Text>
            </View>

            <Text
              ellipsizeMode="tail"
              numberOfLines={9}
              style={styles.description}>
              {'    ' + post.description.slice(0, 500)}
            </Text>
          </View>

          <Text
            style={{
              color: 'white',
              fontSize: 20,
              padding: 5,
              borderRadius: 20,
              backgroundColor: '#49cade',
            }}
            onPress={() =>
              navigation.navigate('Browser', {url: post.postSourceLink})
            }>
            {' '}
            ଅଧିକ ପଢନ୍ତୁ ।
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  pagerView: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 320,
    height: 600,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 16,
  },
  image: {
    resizeMode: 'cover',
    width: imgeWidth,
    height: 250,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    color: 'black',
   
  },
  description: {
    fontSize: 20,
    color: 'black',
  },
  tinyLogo: {
    width: 300,
    height: 200,
    borderRadius: 16,
  },
});
