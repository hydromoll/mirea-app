import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="40pt"
      height="40pt"
      viewBox="0 0 40 40"
      {...props}
    >
      <Path
        fill="#FFF"
        d="M38.754 18.879H4.082L14.457 8.547a1.25 1.25 0 000-1.762 1.242 1.242 0 00-1.762 0L.36 19.117c-.48.48-.48 1.285 0 1.762l12.336 12.336a1.242 1.242 0 001.762 0 1.25 1.25 0 000-1.762L4.082 21.371h34.672a1.247 1.247 0 000-2.492zm0 0"
      />
    </Svg>
  );
}

export default SvgComponent;
