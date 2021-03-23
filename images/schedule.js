import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 50 50"
      style={{padding:20}}
      {...props}
    >
      <G data-name="Group 3">
        <G data-name="Group 2">
          <G data-name="Group 1" fill="#497dcd">
            <Circle
              data-name="Ellipse 1"
              cx={2}
              cy={2}
              r={2}
              transform="translate(35.418 18.861)"
            />
            <Path
              data-name="Path 1"
              d="M42.188 3.906h-2.54V1.953a1.953 1.953 0 10-3.906 0v1.953h-8.887V1.953a1.953 1.953 0 10-3.906 0v1.953H14.16V1.953a1.953 1.953 0 10-3.906 0v1.953H7.813A7.821 7.821 0 000 11.719v30.469A7.821 7.821 0 007.813 50h14.941a1.953 1.953 0 100-3.906H7.813a3.911 3.911 0 01-3.906-3.906V11.719a3.911 3.911 0 013.906-3.906h2.441v1.953a1.953 1.953 0 003.906 0V7.813h8.789v1.953a1.953 1.953 0 003.906 0V7.813h8.887v1.953a1.953 1.953 0 003.906 0V7.813h2.539a3.911 3.911 0 013.906 3.906v11.133a1.953 1.953 0 103.906 0V11.719a7.821 7.821 0 00-7.811-7.813z"
            />
            <Path
              data-name="Path 2"
              d="M38.549 27.098a11.451 11.451 0 1011.449 11.451 11.464 11.464 0 00-11.449-11.451zm0 19.116a7.665 7.665 0 117.665-7.665 7.674 7.674 0 01-7.665 7.665z"
            />
            <Path
              data-name="Path 3"
              d="M41.293 36.294h-.852v-1.987a1.893 1.893 0 00-3.785 0v3.88a1.893 1.893 0 001.893 1.893h2.744a1.893 1.893 0 000-3.785z"
            />
            <Circle
              data-name="Ellipse 2"
              cx={2}
              cy={2}
              r={2}
              transform="translate(27.139 18.861)"
            />
            <Circle
              data-name="Ellipse 3"
              cx={2}
              cy={2}
              r={2}
              transform="translate(18.861 27.139)"
            />
            <Circle
              data-name="Ellipse 4"
              cx={2}
              cy={2}
              r={2}
              transform="translate(10.582 18.861)"
            />
            <Circle
              data-name="Ellipse 5"
              cx={2}
              cy={2}
              r={2}
              transform="translate(10.582 27.139)"
            />
            <Circle
              data-name="Ellipse 6"
              cx={2}
              cy={2}
              r={2}
              transform="translate(10.582 35.418)"
            />
            <Circle
              data-name="Ellipse 7"
              cx={2}
              cy={2}
              r={2}
              transform="translate(18.861 35.418)"
            />
            <Circle
              data-name="Ellipse 8"
              cx={2}
              cy={2}
              r={2}
              transform="translate(18.861 18.861)"
            />
          </G>
        </G>
      </G>
    </Svg>
  )
}

export default SvgComponent
