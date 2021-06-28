import { Dimensions, PixelRatio, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  black: "#1E1F20",
  white: "#FFFFFF",
  lightGray: "#e8e8e8",
  gray: "#6A6A6A",
  primary: "#00A6EB",
  primaryLight: "#D3F2FF",
  secondary: "#b0e1e5",
  secondaryLight: "#e8f3f5",
  danger: "red",
  success: "#1AB517",
  indigo: "#D3E5FB",
  indigoDark: "#576DFC",
  blueDark: "#405872",
  blueLight: "#5D7895",
  greenLight: "#E2FFE5",
};

export const SIZES = {
  // font sizes
  body1: 26,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
  body6: 10,

  // app dimensions
  width,
  height,
};

const scale = width / 320;

function actuatedNormalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const FONTS = {
  body1: {
    fontFamily: "Roboto-Regular",
    fontSize: actuatedNormalize(SIZES.body1),
  },
  body2: {
    fontFamily: "Roboto-Regular",
    fontSize: actuatedNormalize(SIZES.body2),
  },
  body3: {
    fontFamily: "Roboto-Regular",
    fontSize: actuatedNormalize(SIZES.body3),
  },
  body4: {
    fontFamily: "Roboto-Regular",
    fontSize: actuatedNormalize(SIZES.body4),
  },
  body5: {
    fontFamily: "Roboto-Regular",
    fontSize: actuatedNormalize(SIZES.body5),
  },
  body6: {
    fontFamily: "Roboto-Regular",
    fontSize: actuatedNormalize(SIZES.body6),
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
