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

const IconMail: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M938.666667 853.333333h-853.333334C37.546667 853.333333 0 815.786667 0 768v-512C0 208.213333 37.546667 170.666667 85.333333 170.666667h853.333334C986.453333 170.666667 1024 208.213333 1024 256v512c0 47.786667-37.546667 85.333333-85.333333 85.333333zM85.333333 204.8C58.026667 204.8 34.133333 228.693333 34.133333 256v512c0 27.306667 23.893333 51.2 51.2 51.2h853.333334c27.306667 0 51.2-23.893333 51.2-51.2v-512c0-27.306667-23.893333-51.2-51.2-51.2h-853.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M501.76 546.133333c-23.893333 0-51.2-6.826667-68.266667-20.48L109.226667 303.786667c-6.826667-3.413333-10.24-17.066667-3.413334-23.893334 3.413333-6.826667 13.653333-10.24 23.893334-3.413333l324.266666 221.866667c27.306667 20.48 71.68 20.48 98.986667 0l341.333333-221.866667c6.826667-6.826667 17.066667-3.413333 23.893334 3.413333s3.413333 17.066667-3.413334 23.893334l-341.333333 221.866666c-20.48 13.653333-44.373333 20.48-71.68 20.48zM119.466667 750.933333c-3.413333 0-10.24-3.413333-13.653334-6.826666-6.826667-6.826667-6.826667-17.066667 3.413334-23.893334l238.933333-204.8c6.826667-6.826667 17.066667-6.826667 23.893333 3.413334 6.826667 6.826667 6.826667 17.066667-3.413333 23.893333l-238.933333 204.8c-3.413333 3.413333-6.826667 3.413333-10.24 3.413333zM904.533333 750.933333c-3.413333 0-6.826667 0-10.24-3.413333l-238.933333-204.8c-6.826667-6.826667-6.826667-17.066667-3.413333-23.893333s17.066667-6.826667 23.893333-3.413334l238.933333 204.8c6.826667 6.826667 6.826667 17.066667 3.413334 23.893334-3.413333 3.413333-10.24 6.826667-13.653334 6.826666z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconMail.defaultProps = {
  size: 18,
};

export default IconMail;