import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      height={30}
      viewBox="0 0 511.962 511.962"
      width={30}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M502.343 177.3l-240-104a16 16 0 00-12.724 0l-240 104c-12.824 5.557-12.827 23.804 0 29.361l86.362 37.423v99.896c0 53.832 70.28 96 160 96s160-42.168 160-96v-99.896l16-6.933V407.98c0 8.836 7.164 16 16 16s16-7.164 16-16V223.285l38.362-16.623c12.824-5.557 12.826-23.804 0-29.362zm-246.362-71.882l199.759 86.563-15.843 6.865-181.932-22.742c-8.769-1.089-16.765 5.124-17.861 13.892s5.124 16.765 13.892 17.861l128.142 16.018-126.157 54.668L56.222 191.98zm128 238.563c0 15.075-12.373 30.596-33.947 42.581-51.381 28.545-136.575 28.629-188.106 0-21.574-11.985-33.947-27.506-33.947-42.581v-86.029l121.638 52.71a16 16 0 0012.724 0l121.638-52.71z"
      fill="#497dcd"
      />
    </Svg>
  )
}

export default SvgComponent
