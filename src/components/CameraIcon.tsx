import React from 'react';
import { Svg, Path, Defs, ClipPath, Rect, G } from 'react-native-svg';

interface SvgIconProps {
  width?: number;
  height?: number;
  color?: string;
  isDisabled?: boolean
}

const CameraIcon: React.FC<SvgIconProps> = ({ width = 32, height = 32, color = "#186FE7", isDisabled }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <G clip-path="url(#clip0_0_1638)">
        <Path
          d="M26.6665 5.33335H22.4398L19.9998 2.66669H11.9998L9.55984 5.33335H5.33317C3.8665 5.33335 2.6665 6.53335 2.6665 8.00002V24C2.6665 25.4667 3.8665 26.6667 5.33317 26.6667H26.6665C28.1332 26.6667 29.3332 25.4667 29.3332 24V8.00002C29.3332 6.53335 28.1332 5.33335 26.6665 5.33335ZM26.6665 24H5.33317V8.00002H10.7332L13.1732 5.33335H18.8265L21.2665 8.00002H26.6665V24ZM15.9998 9.33335C12.3198 9.33335 9.33317 12.32 9.33317 16C9.33317 19.68 12.3198 22.6667 15.9998 22.6667C19.6798 22.6667 22.6665 19.68 22.6665 16C22.6665 12.32 19.6798 9.33335 15.9998 9.33335ZM15.9998 20C13.7998 20 11.9998 18.2 11.9998 16C11.9998 13.8 13.7998 12 15.9998 12C18.1998 12 19.9998 13.8 19.9998 16C19.9998 18.2 18.1998 20 15.9998 20Z"
          fill={isDisabled ? "#fff": color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_0_1638">
          <Rect width="32" height="32" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CameraIcon;
