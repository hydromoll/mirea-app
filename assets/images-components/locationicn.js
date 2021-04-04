import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={30}
      viewBox="0 0 21 30"
      {...props}
    >
      <Path
        data-name="Icon material-location-on"
        d="M10.5 0A10.492 10.492 0 000 10.5C0 18.375 10.5 30 10.5 30S21 18.375 21 10.5A10.492 10.492 0 0010.5 0zm0 14.25a3.75 3.75 0 113.75-3.75 3.751 3.751 0 01-3.75 3.75z"
        fill="#497dcd"
      />
    </Svg>
  );
}

export default SvgComponent;
