import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={27}
      height={30}
      viewBox="0 0 27 30"
      {...props}
    >
      <G
        data-name="Icon feather-user"
        fill="none"
        stroke="#497dcd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <Path
          data-name="Path 6"
          d="M25.5 28.5v-3a6 6 0 00-6-6h-12a6 6 0 00-6 6v3"
        />
        <Path data-name="Path 7" d="M19.5 7.5a6 6 0 11-6-6 6 6 0 016 6z" />
      </G>
    </Svg>
  )
}

export default SvgComponent
