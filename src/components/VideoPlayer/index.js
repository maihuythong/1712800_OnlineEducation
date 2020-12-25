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
import { Video } from "expo-av";

const LoadingVideoIndicator = ({ isYoutubeVideo }) => {
  const icon = isYoutubeVideo ? "youtube" : "film";
  return (
    <View style={styles.container}>
      <CustomIcon name={icon} size={48} />
    </View>
  );
};

const ExpoVideoPlayer = (props) => {
  const { url, height } = props;
  console.log(url);
  url = 'https://storage.googleapis.com/itedu-bucket/Courses/7844e73e-f61b-4f1b-82ce-f98f120a7c46/promo/6c45f15c-6165-4353-89a7-658a58934703.mp4'

  return (
    <Video
      shouldPlay
      rate={1.0}
      volume={1.0}
      isMuted={false}
      progressUpdateIntervalMillis={500}
      isLooping={false}
      source={{ uri: url }}
      useNativeControls
      style={[styles.containerVideo, { height: height }]}
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
    courseData,
  } = props;

  const videoRef = useRef(null);
  const videoId = useMemo(() => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }, [url]);

  const onVideoPlayerStageChanged = async (event) => {
    if (event === "ended") {
      await onVideoEnded();
    }
    if (event === "paused") {
      const time = await videoRef.current?.getCurrentTime();
      await onStopVideo(time);
    }
  };

  const onVideoReady = useCallback(() => {
    if (videoRef.current) {
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
    courseData,
    url,
    autoPlay = true,
    onStopVideo,
    onVideoEnded,
    currentTime,
  } = props;
  const [isLoading, setLoading] = useState(true);
  const [height, setHeight] = useState(300);

  return (
    <View style={[styles.containerVideo, { height }]}>
      {isYoutubeVideo ? (
        <YoutubeVideoPlayer
          courseData={courseData}
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
        <ExpoVideoPlayer url={url} height={height} />
      )}
    </View>
  );
};

export default VideoPlayer;
