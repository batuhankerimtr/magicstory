import React, { useContext, useEffect, useState, useRef } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Pressable,
  StatusBar,
  Linking
} from 'react-native';
import styles from './style'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import ViewShot from "react-native-view-shot";
import RNStoryShare from "react-native-story-share";

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false
};


const SplashScreen = (props) => {
  const handleViewRef = useRef(null);


  const [count, setCount] = useState(700);
  const [sticker, setSticker] = useState(null)
  const [oImage, setoImage] = useState(false)

  useEffect(() => {

    handleViewRef.current.capture().then(uri => {
      setSticker("data:image/png;base64," + uri)
    });
  })

  const shareInstagram = () => {
    RNStoryShare.isInstagramAvailable()
    .then(isAvailable => {

      if(isAvailable){
        RNStoryShare.shareToInstagram({
          type: RNStoryShare.BASE64, // or RNStoryShare.FILE
          attributionLink: 'https://magicstory.app',
          stickerAsset: sticker,
          backgroundBottomColor: '#1B1B2F',
          backgroundTopColor: '#3D3D65'
        });
      }
    })
    .catch(e => console.log(e));
  }
  const shareSnapchat = () => {
    if (oImage) {
      RNStoryShare.isSnapchatAvailable()
        .then(isAvailable => {

<<<<<<< Updated upstream
          if (isAvailable) {
            RNStoryShare.shareToSnapchat({
              type: RNStoryShare.BASE64, // or RNStoryShare.FILE
              attributionLink: 'https://magicstory.app',
              stickerAsset: sticker,
              media: "photo", // or "video"
              stickerOptions: {
                height: 900,
                width: 900
              }
            });
          } else {
            alert("Réessayez s'il vous plaît !")
          }
        })
        .catch(e => console.log(e));
    }
    
=======
        if (isAvailable) {
          RNStoryShare.shareToSnapchat({
            type: RNStoryShare.BASE64, // or RNStoryShare.FILE
        
            attributionLink: 'https://magicstory.app',
            backgroundAsset: 'data:image/png;base64,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PABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPABECQ8AUcIDQJTwABAlPCzF9ddf173pTa/vAKYd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',
            stickerAsset: sticker,
            media: "photo", // or "video"
          });
        }
      })
      .catch(e => console.log(e));
>>>>>>> Stashed changes
  }


  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>

        <ViewShot ref={handleViewRef} style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }} options={{ format: "png", quality: 1, result: "base64" }} >
          <View style={styles.capture}>
            <Image onLoad={() => setoImage(true)} style={styles.logo} source={require('../../../assets/img/icon.png')} />
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>{props.route.params.message}</Text>
            </View>
          </View>
            <Text style={styles.swipeupText}>SWIPE UP POUR DECOUVRIR TON AVENIR</Text>
        </ViewShot>

        <View style={styles.actionsGroup}>
          <Pressable onPress={() => shareSnapchat()} style={styles.shareSnapBtn}>
            <Image style={styles.shareSnapghost} source={require('../../../assets/img/ghost.png')} />
            <Text style={styles.shareSnapBtnText}>Partager sur Snapchat</Text>
          </Pressable>
          <View style={styles.otherActions}>
            <Pressable onPress={() => shareInstagram()} style={styles.shareBtnSmall}>
              <Icon name="instagram" size={28} color="#FFF" />
            </Pressable>
            <Pressable onPress={() => props.navigation.goBack()}  style={styles.shareBtnSmall}>
              <Icon name="redo-alt" size={28} color="#FFF" />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default SplashScreen;
