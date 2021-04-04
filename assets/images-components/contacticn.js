import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 30 30"
      {...props}
    >
      <Path
        data-name="Icon material-message"
        d="M27 0H3A3 3 0 00.015 3L0 30l6-6h21a3.009 3.009 0 003-3V3a3.009 3.009 0 00-3-3zm-3 18H6v-3h18zm0-4.5H6v-3h18zM24 9H6V6h18z"
        fill="#497dcd"
      />
    </Svg>
  )
}

export default SvgComponent
