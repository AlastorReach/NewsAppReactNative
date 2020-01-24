import React from 'react';
import { StyleSheet, View, Dimensions, ActivityIndicator, StatusBar } from 'react-native';
import Video from 'react-native-video';
import Icon from "react-native-vector-icons/Ionicons";
import Utils from '../Utils/Utils';
import constants from '../Utils/constants';

var {width, height} = Dimensions.get('window');
var isFullScreenGlobal = false;
export default class WatchScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hasLoaded: false,
      isBuffering: false,
      orientationWidth: Dimensions.get('window').width,
      orientationHeight: Dimensions.get('window').width / 1.7777,
      isFullScreen: false
    }

    this.onLayout = this.onLayout.bind(this);
  }

  componentDidMount(){
    StatusBar.setHidden(true);
  }
  componentWillUnmount() {
    StatusBar.setHidden(false);
}
  static navigationOptions = ({navigation}) => {
    return{
    title: 'Welcome',
    headerShown: !navigation.state.params.fullscreen
    }
  };
  onBuffer(){
    this.setState({
      isBuffering: true
    })
  }
  onPlaybackRateChange(){
    
  }
  resizeVideoPlayer() {
    // Always in 16 /9 aspect ratio
    width = Dimensions.get('window').width;
    height = Dimensions.get('window').height;

    if (Utils.isPortrait()) {
      isFullScreenGlobal = false;
      this.setState({
        orientationWidth: width * 0.8,
        orientationHeight: width * 0.8 * 0.56,
      });
      this.props.navigation.setParams({
        fullscreen: false,
      });
    } else {
      isFullScreenGlobal = true;
      this.setState({
        orientationHeight: height * 0.8,
        orientationWidth: height * 0.8 * 1.77,
        isFullScreen:true
      });
      this.props.navigation.setParams({
        fullscreen: true,
      });
    }
  }

  onLayout(){
    console.log('on layout called');
    this.resizeVideoPlayer();
  }

  

  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container} onLayout={this.onLayout}>
  <View style={styles.videoButton}>
    {this.state.hasLoaded && !this.state.isBuffering && <Icon name="ios-play-circle" color="#ccc"size={60}/>}
    {!this.state.hasLoaded && <ActivityIndicator size={50}/>}
    {this.state.isBuffering && <ActivityIndicator size={50}/>}
  </View>
        <Video source={{ uri:  constants.liveTVUrl}}   // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref
          }}
          onPlaybackRateChange={this.onPlaybackRateChange}
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
          fullscreen={true}
          hideShutterView={true}
          onLoad={() => this.setState({hasLoaded: true})}

        />
      </View>
    );
  }
}

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
    position: "relative",
    backgroundColor: "#000000"
  },
  videoButton:{
    display: "flex",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: width / 1.3333,
  }
});