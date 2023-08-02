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

const IconClose: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M710.656 665.088L557.568 512l153.088-153.088c12.8-12.8 12.8-33.28 0-45.568-12.8-12.8-33.28-12.8-45.568 0l-153.088 153.088-153.088-153.088c-12.8-12.8-33.28-12.8-45.568 0-12.8 12.8-12.8 33.28 0 45.568l153.088 153.088-153.088 153.088c-12.8 12.8-12.8 33.28 0 45.568 12.8 12.8 33.28 12.8 45.568 0l153.088-153.088 153.088 153.088c12.8 12.8 33.28 12.8 45.568 0 12.288-12.8 12.288-33.28 0-45.568z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M512 0c-282.624 0-512 229.888-512 512s229.376 512 512 512c282.112 0 512-229.888 512-512s-229.888-512-512-512z m0 955.904c-244.736 0-444.416-199.168-444.416-443.904 0-244.736 199.168-443.904 444.416-443.904 244.736 0 444.416 199.168 444.416 443.904 0 244.736-199.68 443.904-444.416 443.904z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconClose.defaultProps = {
  size: 18,
};

export default IconClose;
