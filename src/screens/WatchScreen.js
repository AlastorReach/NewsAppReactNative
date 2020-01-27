import React from 'react';
import { Animated, Easing, StyleSheet, View, Dimensions, ActivityIndicator, StatusBar, TouchableWithoutFeedback } from 'react-native';
import Video from 'react-native-video';
import Icon from "react-native-vector-icons/Ionicons";
import Utils from '../Utils/Utils';
import constants from '../Utils/constants';

var { width, height } = Dimensions.get('window');
var isFullScreenGlobal = !Utils.isPortrait();

export default class WatchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoaded: false,
      isBuffering: false,
      orientationWidth: Dimensions.get('window').width,
      orientationHeight: Utils.isPortrait() ? Dimensions.get('window').width / 1.3333 : Dimensions.get('window').height,
      isFullScreen: false,
      paused: false,
      showIcon: false,
    }

    this.fadeAnim = new Animated.Value(1)

    this.onLayout = this.onLayout.bind(this);
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
    this.setOpacity = this.setOpacity.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: '',
      headerShown: !navigation.state.params.fullscreen
    }
  };

  setOpacity() {
    this.setState({ showIcon: true })
    Animated.timing(
      this.fadeAnim,
      {
        toValue: 0,
        duration: 1000,
      }
    ).start(() => {
      this.setState({ showIcon: false });
      this.fadeAnim = new Animated.Value(1);
    });
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }
  componentWillUnmount() {
    StatusBar.setHidden(false);
  }



  onBuffer() {
    this.setState({
      isBuffering: true
    })
  }

  pause() {
    this.setState({ paused: true })
  }

  play() {
    this.setState({ paused: false })
  }

  resizeVideoPlayer() {

    width = Dimensions.get('window').width;
    height = Dimensions.get('window').height;

    if (Utils.isPortrait()) {
      isFullScreenGlobal = false;
      this.setState({
        orientationWidth: width,
        orientationHeight: width / 1.3333,
      });

      this.props.navigation.setParams({
        fullscreen: false,
      });

    } else {
      isFullScreenGlobal = true;
      this.setState({
        orientationHeight: height,
        orientationWidth: width * 0.75,
        isFullScreen: true
      });

      this.props.navigation.setParams({
        fullscreen: true,
      });
    }
  }

  onLayout() {
    console.log('on layout called');
    this.resizeVideoPlayer();
  }



  render() {
    return (
      <TouchableWithoutFeedback onPress={this.setOpacity} >
        <View style={[styles.container]} onLayout={this.onLayout}>
          <View
            style={[styles.videoButton,
            { height: this.state.orientationHeight, width: this.orientationWidth }]}>
            {this.state.hasLoaded && this.state.paused && <Icon onPress={this.play} name="ios-play-circle" color="#fff" size={60} />}
            {!this.state.hasLoaded && <ActivityIndicator size={50} />}
            {this.state.hasLoaded && this.state.showIcon && !this.state.paused && <Animated.View style={{ ...this.props.style, zIndex: 999, opacity: this.fadeAnim }}><Icon onPress={this.pause} name="md-pause" color="#fff" size={60} /></Animated.View>}
          </View>
          <Video source={{ uri: constants.liveTVUrl }}
            ref={(ref) => {
              this.player = ref
            }}
            onPlaybackRateChange={this.onPlaybackRateChange}
            onBuffer={this.onBuffer}
            onEnd={this.onEnd}
            onError={this.videoError}
            style={[styles.backgroundVideo, { width: this.state.orientationWidth, height: this.state.orientationHeight }]}
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
            paused={this.state.paused}
            hideShutterView={true}
            onLoad={() => this.setState({ hasLoaded: true })}

          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {

  },
  container: {
    position: "relative",
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "center",
    alignItems: isFullScreenGlobal ? "center" : "flex-start"
  },
  videoButton: {
    position: "absolute",
    right: width / 2 - 25,
    display: "flex",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});