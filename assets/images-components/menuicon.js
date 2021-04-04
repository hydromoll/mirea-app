import * as React from "react";
import Svg, { G, Rect } from "react-native-svg";

function SvgComponent({ focused }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={23}
      height={16}
      viewBox="0 0 23 16"
    >
      <G
        data-name="Group 4"
        transform="translate(-317 -853)"
        fill={focused ? "#497dcd" : "#4b4f5b"}
      >
        <Rect
          data-name="Rectangle 6"
          width={28}
          height={3}
          rx={1.5}
          transform="translate(317 853)"
        />
        <Rect
          data-name="Rectangle 7"
          width={23}
          height={3}
          rx={1.5}
          transform="translate(322 860)"
        />
        <Rect
          data-name="Rectangle 8"
          width={18}
          height={3}
          rx={1.5}
          transform="translate(327 866)"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
