import React from 'react';
import Svg, {
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

export const MailSearchIcon = ({ size = 100 }) => (
  <Svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <Defs>
      <LinearGradient
        id="grad"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0%" stopColor="#A18CD1" />
        <Stop offset="50%" stopColor="#FBC2EB" />
        <Stop offset="100%" stopColor="#FF9A9E" />
      </LinearGradient>
    </Defs>

    {/* Конверт */}
    <Path
      d="M25 40 H95 V80 H25 V40 Z"
      stroke="url(#grad)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <Path
      d="M25 40 L60 65 L95 40"
      stroke="url(#grad)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Лупа */}
    <Circle
      cx="85"
      cy="85"
      r="10"
      stroke="url(#grad)"
      strokeWidth="3"
      fill="none"
    />
    <Path
      d="M92 92 L102 102"
      stroke="url(#grad)"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </Svg>
);
