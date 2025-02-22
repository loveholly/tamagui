import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path
        d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"
        stroke={color}
      />
      <Line x1="16" x2="22" y1="5" y2="5" stroke={color} />
      <Line x1="19" x2="19" y1="2" y2="8" stroke={color} />
      <_Circle cx="9" cy="9" r="2" stroke={color} />
      <Path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'ImagePlus'

export const ImagePlus = memo<IconProps>(themed(Icon))
