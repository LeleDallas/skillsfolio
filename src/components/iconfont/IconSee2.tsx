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

const IconSee2: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1422 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M1419.749681 494.640034a758.949299 758.949299 0 0 0-271.898592-355.417263c-127.971933-91.064449-278.873563-139.220989-436.416034-139.220989a748.507725 748.507725 0 0 0-436.416034 139.220989A758.935377 758.935377 0 0 0 3.092586 494.640034a50.119556 50.119556 0 0 0 0 34.666026A758.935377 758.935377 0 0 0 275.005099 884.779011c127.971933 91.064449 278.873563 139.220989 436.416034 139.220989s308.458023-48.128696 436.416034-139.220989a758.949299 758.949299 0 0 0 271.912514-355.445107 50.119556 50.119556 0 0 0 0-34.69387z m-189.340545 172.634026a658.515278 658.515278 0 0 1-140.75242 135.810075 653.517244 653.517244 0 0 1-756.610387 0A658.86333 658.86333 0 0 1 103.874659 512.000891a658.877252 658.877252 0 0 1 229.296969-291.097166 653.517244 653.517244 0 0 1 756.610387 0 658.877252 658.877252 0 0 1 229.296969 291.097166 656.07891 656.07891 0 0 1-88.600238 155.273169z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M711.421133 255.667206c-141.337148 0-256.333685 114.982615-256.333685 256.333685S570.070063 768.334576 711.421133 768.334576s256.333685-114.982615 256.333685-256.333685S852.772203 255.667206 711.421133 255.667206z m0 412.414336a156.094573 156.094573 0 1 1 156.094573-156.080651A156.261638 156.261638 0 0 1 711.421133 668.095464z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconSee2.defaultProps = {
  size: 18,
};

export default IconSee2;
