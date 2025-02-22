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
        d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"
        stroke={color}
      />
      <Path d="M16 2v4" stroke={color} />
      <Path d="M8 2v4" stroke={color} />
      <Path d="M3 10h5" stroke={color} />
      <Path d="M17.5 17.5 16 16.25V14" stroke={color} />
      <Path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'CalendarClock'

export const CalendarClock = memo<IconProps>(themed(Icon))
