/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const IconErji: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M866.5088 445.1328V402.944c0-190.8736-155.2896-346.2144-346.2144-346.2144S174.08 212.0192 174.08 402.8928v38.5536c-50.4832 11.6736-88.2176 56.9344-88.2176 110.8992v94.5152c0 62.7712 51.0464 113.8176 113.8176 113.8176s113.8176-51.0464 113.8176-113.8176v-94.5152c0-53.9648-37.7344-99.2256-88.2176-110.8992v-38.5536c0-162.6624 132.352-295.0144 295.0144-295.0144 162.6624 0 295.0144 132.352 295.0144 295.0144v36.4032c-56.6272 6.5024-100.7616 54.7328-100.7616 113.0496v94.5152c0 53.6064 37.2224 98.6112 87.1936 110.6432-4.6592 28.0064-28.16 90.624-143.872 112.128-13.8752 2.56-23.0912 15.9232-20.48 29.8496a25.62048 25.62048 0 0 0 25.1392 20.9408c1.536 0 3.1232-0.1536 4.7104-0.4096 152.8832-28.3648 180.8384-122.368 185.7536-161.9968 50.9952-11.264 89.2416-56.7808 89.2416-111.1552v-94.5152c-0.0512-49.3568-31.6928-91.4944-75.7248-107.2128z m-604.16 107.2128v94.5152c0 34.56-28.1088 62.6176-62.6176 62.6176-34.56 0-62.6176-28.1088-62.6176-62.6176v-94.5152c0-34.56 28.1088-62.6176 62.6176-62.6176s62.6176 28.1088 62.6176 62.6176z m628.6336 94.5152c0 34.56-28.1088 62.6176-62.6176 62.6176s-62.6176-28.1088-62.6176-62.6176v-94.5152c0-34.56 28.1088-62.6176 62.6176-62.6176s62.6176 28.1088 62.6176 62.6176v94.5152z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M531.4048 902.7072m-61.44 0a61.44 61.44 0 1 0 122.88 0 61.44 61.44 0 1 0-122.88 0Z"
        fill={getIconColor(color, 1, '#44454A')}
      />
    </svg>
  );
};

IconErji.defaultProps = {
  size: 18,
};

export default IconErji;
