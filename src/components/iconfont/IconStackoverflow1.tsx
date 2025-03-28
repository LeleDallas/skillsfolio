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

const IconStackoverflow1: FunctionComponent<Props> = ({ size = 18, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M620.714667 895.829333L213.376 896 213.333333 808.832l407.338667-0.213333 0.042667 87.210666zM896 402.133333L826.325333 0l-85.76 14.933333 69.674667 402.090667 85.76-14.933333z m-265.472 294.698667l-405.632-37.418667-7.978667 86.826667 405.632 37.376 7.978667-86.784z m26.752-113.749333l-393.386667-105.941334-22.613333 84.181334 393.429333 105.984 22.613334-84.224z m51.370667-99.712L357.76 276.053333 313.6 351.146667l350.890667 207.36 44.202666-75.093334z m86.016-61.013334l-229.504-337.237333-71.893334 49.066667 229.546667 337.237333 71.850667-49.066667z"
        fill={getIconColor(color, 0, '#FF810F')}
      />
      <path
        d="M697.770667 597.333333v357.973334h-541.866667V597.333333H85.333333v426.666667h682.666667V597.333333z"
        fill={getIconColor(color, 1, '#BEBCBC')}
      />
    </svg>
  );
};


export default IconStackoverflow1;
