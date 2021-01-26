import { Video } from "expo-av";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { View } from "react-native";
import CustomIcon from "react-native-vector-icons/FontAwesome";
import YoutubePlayer, { getYoutubeMeta } from "react-native-youtube-iframe";
import styles from "./styles";

const LoadingVideoIndicator = ({ isYoutubeVideo }) => {
  const icon = isYoutubeVideo ? "youtube" : "youtube";
  return (
    <View style={styles.container}>
      <CustomIcon name={icon} size={48} />
    </View>
  );
};

const ExpoVideoPlayer = (props) => {
  const { url, height, currentTime = 0, onVideoEnded, onStopVideo } = props;
  const onPlaybackStatusUpdate = (playbackStatus) => {
    if (playbackStatus.didJustFinish) {
      onVideoEnded();
    }
  };

  const stopVideo = () => {
    //   onStopVideo(currentTime)
  };

  return (
    <Video
      shouldPlay
      rate={1.0}
      isMuted={false}
      volume={1.0}
      progressUpdateIntervalMillis={500}
      isLooping={false}
      source={{ uri: url }}
      useNativeControls
      positionMillis={currentTime ? currentTime : 0}
      style={[styles.containerVideo, { height: height }]}
      stopAsync={onStopVideo}
      stopAsync={stopVideo}
      onPlaybackStatusUpdate={(playbackStatus) =>
        onPlaybackStatusUpdate(playbackStatus)
      }
    />
  );
};

const YoutubeVideoPlayer = (props) => {
  const {
    url,
    setHeight,
    height,
    setLoading,
    isLoading,
    currentTime,
    autoPlay,
    onStopVideo,
    onVideoEnded,
  } = props;

  const videoRef = useRef(null);
  const videoId = useMemo(() => {
    // console.log('video aaaa');
    // console.log(videoId);
    // try {
    //   const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    //   const match = url.match(regExp);
    //   return match && match[7].length == 11 ? match[7] : false;
    // }catch (e) {
    //   console.log(e);
    //   if(url.contains(youtube.com)){
    //     const vidId = url.substring(25, url.length);
    //     console.log('vidId');
    //     console.log(vidId);
    //   }
    // }
    if (url.includes("watch?")) {
      return url.substring(url.indexOf("watch?") + 8, url.length);
    }
    const paths = url?.split("/");
    return paths?.[paths.findIndex((p) => p === "embed") + 1];
  }, [url]);

  const onVideoPlayerStageChanged = useCallback(
    async (event) => {
      if (event === "ended") {
        await onVideoEnded();
      }
      if (event === "paused") {
        const time = await videoRef.current?.getCurrentTime();
        await onStopVideo(time);
      }
    },
    [currentTime]
  );

  const onVideoReady = useCallback(() => {
    if (videoRef.current) {
      console.log(currentTime);
      videoRef.current.seekTo(currentTime);
    }
  }, [currentTime]);

  useEffect(() => {
    const setMeta = async () => {
      setLoading(true);
      try {
        const meta = await getYoutubeMeta(videoId);
        if (meta) {
          if (meta.height) {
            meta.height ? setHeight(meta.height * 2) : null;
          }
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    setMeta();
  }, [videoId]);

  return isLoading ? (
    <LoadingVideoIndicator />
  ) : (
    <YoutubePlayer
      ref={videoRef}
      play={autoPlay}
      onChangeState={onVideoPlayerStageChanged}
      onReady={onVideoReady}
      videoId={videoId}
      height={height}
    />
  );
};

const VideoPlayer = (props) => {
  const {
    isYoutubeVideo,
    url,
    autoPlay = true,
    onStopVideo,
    onVideoEnded,
    currentTime = 0,
  } = props;

  const [isLoading, setLoading] = useState(true);
  const [height, setHeight] = useState(300);
  return (
    <View style={[styles.containerVideo, { height }]}>
      {isYoutubeVideo ? (
        <YoutubeVideoPlayer
          autoPlay={autoPlay}
          url={url}
          height={height}
          setHeight={setHeight}
          onStopVideo={onStopVideo}
          onVideoEnded={onVideoEnded}
          isLoading={isLoading}
          setLoading={setLoading}
          currentTime={currentTime}
        />
      ) : (
        <ExpoVideoPlayer
          url={url}
          height={height}
          currentTime={currentTime}
          onVideoEnded={onVideoEnded}
        />
      )}
    </View>
  );
};

export default VideoPlayer;
