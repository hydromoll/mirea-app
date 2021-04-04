import { Dimensions, Platform, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

const normalize = (size) => {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) + "px";
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2 + "px";
  }
};

export default normalize;
