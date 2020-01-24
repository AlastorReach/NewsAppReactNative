import { Dimensions } from "react-native";

export default function Util() {}

Util.isPortrait = () => {
  const dim = Dimensions.get("screen");
  return dim.height >= dim.width;
};