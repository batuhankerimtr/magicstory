import React, { useContext, useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Pressable,
  StatusBar
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
  handleViewRef = ref => this.view = ref;

  const [count, setCount] = useState(700);
  const [sticker, setSticker] = useState(null)
  const [oImage, setoImage] = useState(false)

  useEffect(() => {
    this.view.capture().then(uri => {
      setSticker("data:image/png;base64," + uri)
    });
  })


  const shareSnapchat = () => {
    if (oImage) {
      RNStoryShare.isSnapchatAvailable()
        .then(isAvailable => {

          if (isAvailable) {
            RNStoryShare.shareToSnapchat({
              type: RNStoryShare.BASE64, // or RNStoryShare.FILE
              attributionLink: 'https://magicstory.app',
              stickerAsset: sticker,
              media: "photo", // or "video"
            });
          } else {
            alert("Réessayez s'il vous plaît !")
          }
        })
        .catch(e => console.log(e));
    }
    
  }


  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>

        <ViewShot ref={this.handleViewRef} style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }} options={{ format: "png", quality: 1, result: "base64" }} >
          <View style={styles.capture}>
            <Image onLoad={() => setoImage(true)} style={styles.logo} source={require('../../../assets/img/icon.png')} />
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>Aujourd'hui un animal va rentrer par la cheminée</Text>
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
            <Pressable style={styles.shareBtnSmall}>
              <Icon name="instagram" size={28} color="#FFF" />
            </Pressable>
            <Pressable style={styles.shareBtnSmall}>
              <Icon name="redo-alt" size={28} color="#FFF" />
            </Pressable>
            <Pressable style={styles.shareBtnSmall}>
              <Icon name="save" size={28} color="#FFF" />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default SplashScreen;
