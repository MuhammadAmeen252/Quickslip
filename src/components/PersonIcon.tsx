import React from 'react';
import Svg, { Path, Defs, ClipPath, Rect, G } from 'react-native-svg';

interface SvgIconProps {
  width?: number;
  height?: number;
  color?: string;
  isDisabled?: boolean
}

const PersonIcon: React.FC<SvgIconProps> = ({ width = 32, height = 32, color = "#186FE7", isDisabled }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <G clip-path="url(#clip0_0_1584)">
        <Path
          d="M16.0002 7.86665C17.5468 7.86665 18.8002 9.11998 18.8002 10.6666C18.8002 12.2133 17.5468 13.4666 16.0002 13.4666C14.4535 13.4666 13.2002 12.2133 13.2002 10.6666C13.2002 9.11998 14.4535 7.86665 16.0002 7.86665ZM16.0002 19.8666C19.9602 19.8666 24.1335 21.8133 24.1335 22.6666V24.1333H7.86683V22.6666C7.86683 21.8133 12.0402 19.8666 16.0002 19.8666ZM16.0002 5.33331C13.0535 5.33331 10.6668 7.71998 10.6668 10.6666C10.6668 13.6133 13.0535 16 16.0002 16C18.9468 16 21.3335 13.6133 21.3335 10.6666C21.3335 7.71998 18.9468 5.33331 16.0002 5.33331ZM16.0002 17.3333C12.4402 17.3333 5.3335 19.12 5.3335 22.6666V26.6666H26.6668V22.6666C26.6668 19.12 19.5602 17.3333 16.0002 17.3333Z"
          fill={isDisabled ? "#fff": color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_0_1584">
          <Rect width="32" height="32" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default PersonIcon;
