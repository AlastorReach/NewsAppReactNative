import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Video from 'react-native-video';
import Icon from "react-native-vector-icons/Ionicons";


export default class WatchScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <View style={styles.videoButton}><Icon name="ios-play-circle" color="#ccc"size={60}/></View>
        <Video source={{ uri: "http://livestreamcdn.net:1935/TVSURCANAL14/TVSURCANAL14/playlist.m3u8" }}   // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref
          }}
          onBuffer={this.onBuffer}                // Callback when remote video is buffering
          onEnd={this.onEnd}                      // Callback when playback finishes
          onError={this.videoError}                                       // Store reference             // Callback when video cannot be loaded
          style={styles.backgroundVideo}
          maxBitRate={300000}
          controls={false}
          allowsExternalPlayback={false}
          bufferConfig={{
            minBufferMs: 10000, //number
            maxBufferMs: 10000, //number
            bufferForPlaybackMs: 2500, //number
            bufferForPlaybackAfterRebufferMs: 5000 //number
          }}
          resizeMode="cover"

        />
      </View>
    );
  }
}
const width = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    height: width / 1.3333,
    position: "relative"
  },
  videoButton:{
    display: "flex",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: width / 1.3333,
  }
});