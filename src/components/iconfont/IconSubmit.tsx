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

const IconSubmit: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M439.488 960l124.416-169.984-124.416-35.84L439.488 960 439.488 960 439.488 960M0 559.936l353.472 107.072 435.328-369.6-337.408 398.144 377.92 116.736L1024 64.064 0 559.936 0 559.936 0 559.936M0 559.936"
        fill={getIconColor(color, 0, '#666666')}
      />
    </svg>
  );
};

IconSubmit.defaultProps = {
  size: 18,
};

export default IconSubmit;
