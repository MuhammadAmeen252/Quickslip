import React from 'react';
import Svg, { Path, Defs, ClipPath, Rect, G } from 'react-native-svg';

interface SvgIconProps {
  width?: number;
  height?: number;
  color?: string;
  isDisabled?: boolean
}

const LockIcon: React.FC<SvgIconProps> = ({ width = 24, height = 24, color = "#186FE7", isDisabled }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <G clip-path="url(#clip0_0_1625)">
        <Path
          d="M24.0002 10.6666H22.6668V7.99998C22.6668 4.31998 19.6802 1.33331 16.0002 1.33331C12.3202 1.33331 9.3335 4.31998 9.3335 7.99998V10.6666H8.00016C6.5335 10.6666 5.3335 11.8666 5.3335 13.3333V26.6666C5.3335 28.1333 6.5335 29.3333 8.00016 29.3333H24.0002C25.4668 29.3333 26.6668 28.1333 26.6668 26.6666V13.3333C26.6668 11.8666 25.4668 10.6666 24.0002 10.6666ZM12.0002 7.99998C12.0002 5.78665 13.7868 3.99998 16.0002 3.99998C18.2135 3.99998 20.0002 5.78665 20.0002 7.99998V10.6666H12.0002V7.99998ZM24.0002 26.6666H8.00016V13.3333H24.0002V26.6666ZM16.0002 22.6666C17.4668 22.6666 18.6668 21.4666 18.6668 20C18.6668 18.5333 17.4668 17.3333 16.0002 17.3333C14.5335 17.3333 13.3335 18.5333 13.3335 20C13.3335 21.4666 14.5335 22.6666 16.0002 22.6666Z"
          fill={isDisabled ? "#fff": color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_0_1625">
          <Rect width="32" height="32" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default LockIcon;
