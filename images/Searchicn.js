import * as React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      height={120}
      viewBox="0 0 64 64"
      width={120}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        fill="none"
        stroke="#4D4D4D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      >
        <Circle cx={32} cy={25} r={16} strokeWidth={2} />
        <Path d="M40.9 44.1l-2.1-4.6" />
        <Path strokeWidth={4} d="M40.9 44.1L46 55" />
        <Path d="M36.2 13.7c2.7 1 4.9 2.9 6.3 5.3" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
