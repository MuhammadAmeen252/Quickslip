import React from 'react';
import { Svg, Path, Defs, ClipPath, Rect, G } from 'react-native-svg';

interface SvgIconProps {
  width?: number;
  height?: number;
  color?: string;
  isDisabled?: boolean
}

const ConfirmationIcon: React.FC<SvgIconProps> = ({ width = 32, height = 32, color ="#186FE7", isDisabled }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <G id="Confirmation number" clip-path="url(#clip0_0_1611)">
        <Path
          id="Vector"
          d="M29.3332 13.3333V7.99998C29.3332 6.51998 28.1332 5.33331 26.6665 5.33331H5.33317C3.8665 5.33331 2.67984 6.51998 2.67984 7.99998V13.3333C4.1465 13.3333 5.33317 14.5333 5.33317 16C5.33317 17.4666 4.1465 18.6666 2.6665 18.6666V24C2.6665 25.4666 3.8665 26.6666 5.33317 26.6666H26.6665C28.1332 26.6666 29.3332 25.4666 29.3332 24V18.6666C27.8665 18.6666 26.6665 17.4666 26.6665 16C26.6665 14.5333 27.8665 13.3333 29.3332 13.3333ZM26.6665 11.3866C25.0798 12.3066 23.9998 14.04 23.9998 16C23.9998 17.96 25.0798 19.6933 26.6665 20.6133V24H5.33317V20.6133C6.91984 19.6933 7.99984 17.96 7.99984 16C7.99984 14.0266 6.93317 12.3066 5.3465 11.3866L5.33317 7.99998H26.6665V11.3866ZM14.6665 20H17.3332V22.6666H14.6665V20ZM14.6665 14.6666H17.3332V17.3333H14.6665V14.6666ZM14.6665 9.33331H17.3332V12H14.6665V9.33331Z"
          fill={isDisabled ? "#fff": color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_0_1611">
          <Rect width="32" height="32" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ConfirmationIcon;