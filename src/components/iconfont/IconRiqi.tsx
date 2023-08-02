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

const IconRiqi: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M688.2304 147.4048v-30.1056c0-14.1312-11.4688-25.6-25.6-25.6s-25.6 11.4688-25.6 25.6v29.44h-270.848v-29.44c0-14.1312-11.4688-25.6-25.6-25.6s-25.6 11.4688-25.6 25.6v30.0544C197.12 155.5456 103.7312 253.952 103.7312 373.8112v338.8416c0 125.184 101.8368 227.072 227.072 227.072h341.2992c125.184 0 227.072-101.8368 227.072-227.072v-105.7792c0-14.1312-11.4688-25.6-25.6-25.6s-25.6 11.4688-25.6 25.6v105.7792c0 96.9728-78.8992 175.872-175.872 175.872H330.8032c-96.9728 0-175.872-78.8992-175.872-175.872V439.9616h692.992v11.9808c0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6V373.8112c0-119.7568-93.2352-218.112-210.8928-226.4064zM154.9312 388.7616v-14.8992c0-91.648 70.4512-167.0656 160.0512-175.104v42.24c0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6v-43.008h270.848v43.008c0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6v-42.24c89.4464 8.192 159.744 83.5584 159.744 175.104v14.8992H154.9312z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M873.5232 500.1216c-14.1312 0-25.6 11.4688-25.6 25.6v5.4272c0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6v-5.4272c0-14.1312-11.4688-25.6-25.6-25.6zM325.4784 536.4736c-18.5344 0-33.536 15.0016-33.536 33.536s15.0016 33.536 33.536 33.536c18.5344 0 33.536-15.0016 33.536-33.536s-15.0016-33.536-33.536-33.536z"
        fill={getIconColor(color, 1, '#44454A')}
      />
      <path
        d="M503.7568 570.0096m-33.536 0a33.536 33.536 0 1 0 67.072 0 33.536 33.536 0 1 0-67.072 0Z"
        fill={getIconColor(color, 2, '#44454A')}
      />
      <path
        d="M679.424 536.4736c-18.5344 0-33.536 15.0016-33.536 33.536s15.0016 33.536 33.536 33.536 33.536-15.0016 33.536-33.536-15.0016-33.536-33.536-33.536zM325.4784 695.1424c-18.5344 0-33.536 15.0016-33.536 33.536s15.0016 33.536 33.536 33.536c18.5344 0 33.536-15.0016 33.536-33.536s-15.0016-33.536-33.536-33.536z"
        fill={getIconColor(color, 3, '#44454A')}
      />
      <path
        d="M503.7568 728.7296m-33.536 0a33.536 33.536 0 1 0 67.072 0 33.536 33.536 0 1 0-67.072 0Z"
        fill={getIconColor(color, 4, '#44454A')}
      />
      <path
        d="M679.424 695.1424c-18.5344 0-33.536 15.0016-33.536 33.536s15.0016 33.536 33.536 33.536 33.536-15.0016 33.536-33.536-15.0016-33.536-33.536-33.536z"
        fill={getIconColor(color, 5, '#44454A')}
      />
    </svg>
  );
};

IconRiqi.defaultProps = {
  size: 18,
};

export default IconRiqi;