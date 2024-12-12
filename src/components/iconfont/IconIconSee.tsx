/* tslint:disable */
/* eslint-disable */

import { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const IconIconSee: FunctionComponent<Props> = ({ size = 18, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M523.52 688.64a171.52 171.52 0 0 1 0-343.04 32 32 0 0 1 0 64 107.52 107.52 0 1 0 107.52 107.52 32 32 0 1 1 64 0 171.84 171.84 0 0 1-171.52 171.52z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M523.52 853.44a466.88 466.88 0 0 1-448-326.72l-2.88-9.6 2.88-9.6a468.8 468.8 0 0 1 893.12 0l3.2 9.6-3.2 9.6a466.88 466.88 0 0 1-445.12 326.72zM141.12 517.12a404.48 404.48 0 0 0 764.48 0 404.48 404.48 0 0 0-764.48 0z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

export default IconIconSee;
