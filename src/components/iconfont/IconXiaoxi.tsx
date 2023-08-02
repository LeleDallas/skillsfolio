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

const IconXiaoxi: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M748.4416 272.7936l7.7824 5.7856a25.57952 25.57952 0 0 0 35.84-5.2736 25.64096 25.64096 0 0 0-5.2736-35.84l-7.7824-5.7856a25.64096 25.64096 0 0 0-35.84 5.2736 25.6 25.6 0 0 0 5.2736 35.84z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M847.0528 282.2144l-5.9392-4.4032a25.53856 25.53856 0 0 0-35.7888 5.3248 25.53856 25.53856 0 0 0 5.3248 35.7888l5.888 4.4032c45.312 33.6384 72.3456 87.4496 72.3456 143.872v269.568c0 98.816-80.384 179.2-179.2 179.2h-20.992v-221.9008c0-68.2496-55.552-123.8016-123.8016-123.8016H462.592c-68.2496 0-123.8016 55.5008-123.8016 123.8016v221.9008h-20.992c-98.816 0-179.2-80.384-179.2-179.2V467.2c0-56.4224 27.0336-110.2336 72.3456-143.872l195.9424-145.5104c63.8976-47.4624 149.76-47.4624 213.9136 0.2048l74.24 53.6576a25.56928 25.56928 0 0 0 35.7376-5.7344 25.61536 25.61536 0 0 0-5.7344-35.7376l-73.984-53.4528c-82.1248-60.9792-192.512-60.9792-274.688 0L180.48 282.2144c-58.2656 43.264-93.0304 112.4352-93.0304 184.9856v269.568c0 127.0272 103.3728 230.4 230.4 230.4H709.7344c127.0272 0 230.4-103.3728 230.4-230.4V467.2c-0.0512-72.5504-34.816-141.7216-93.0816-184.9856zM389.9904 915.968v-221.9008c0-40.0384 32.5632-72.6016 72.6016-72.6016h102.3488c40.0384 0 72.6016 32.5632 72.6016 72.6016v221.9008H389.9904z"
        fill={getIconColor(color, 1, '#44454A')}
      />
    </svg>
  );
};

IconXiaoxi.defaultProps = {
  size: 18,
};

export default IconXiaoxi;
