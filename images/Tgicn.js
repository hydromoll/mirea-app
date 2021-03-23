import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      height={25}
      viewBox="0 0 512 512"
      width={25}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M484.689 98.231l-69.417 327.37c-5.237 23.105-18.895 28.854-38.304 17.972L271.2 365.631l-51.034 49.086c-5.646 5.647-10.371 10.372-21.256 10.372l7.598-107.722L402.539 140.23c8.523-7.598-1.848-11.809-13.247-4.21L146.95 288.614 42.619 255.96c-22.694-7.086-23.104-22.695 4.723-33.579L455.423 65.166c18.893-7.085 35.427 4.209 29.266 33.065z"
        fill="#497dcd"
      />
    </Svg>
  );
}

export default SvgComponent;
