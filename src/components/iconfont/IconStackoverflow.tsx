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

const IconStackoverflow: FunctionComponent<Props> = ({ size = 18, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M810.069333 932.906667v-273.237334h91.050667V1024H78.677333v-364.330667h90.88v273.237334h640.512zM260.736 841.856H718.933333v-91.178667H260.736v91.178667z m11.050667-207.018667l447.146666 93.397334 19.242667-88.32-447.061333-93.312-19.328 88.234666z m57.984-215.722666l414.08 193.28 38.528-83.2-414.122667-193.28-38.485333 82.602666v0.597334z m115.84-204.16l350.592 292.48 57.984-69.12-350.549334-292.394667-57.6 68.992-0.426666 0.042667zM672.042667 0l-74.496 55.210667 273.28 367.104 74.496-55.210667L671.957333 0h0.085334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

export default IconStackoverflow;
