import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      fill="none"
      height={24}
      stroke="#497dcd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12} cy={12} r={4} />
      <Path d="M16 12v1a3 3 0 006 0v-1a10 10 0 10-3.92 7.94" />
    </Svg>
  );
}

export default SvgComponent;
