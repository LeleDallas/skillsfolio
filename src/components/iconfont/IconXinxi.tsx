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

const IconXinxi: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M916.48 450.9184c-14.1312 0-25.6-11.4688-25.6-25.6v-4.4032c0-14.1312 11.4688-25.6 25.6-25.6s25.6 11.4688 25.6 25.6v4.4032c0 14.1312-11.4688 25.6-25.6 25.6z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M700.1088 893.0304H318.3616c-133.4272 0-241.9712-108.544-241.9712-241.9712v-301.568C76.3904 216.064 184.9344 107.52 318.3616 107.52h381.7472C833.536 107.52 942.08 216.064 942.08 349.4912c0 14.1312-11.4688 25.6-25.6 25.6s-25.6-11.4688-25.6-25.6C890.88 244.3264 805.3248 158.72 700.1088 158.72H318.3616c-105.1648 0-190.7712 85.5552-190.7712 190.7712v301.568c0 105.1648 85.5552 190.7712 190.7712 190.7712h381.7472c105.1648 0 190.7712-85.5552 190.7712-190.7712v-74.8032c0-14.1312 11.4688-25.6 25.6-25.6s25.6 11.4688 25.6 25.6v74.8032c0 133.4272-108.544 241.9712-241.9712 241.9712z"
        fill={getIconColor(color, 1, '#44454A')}
      />
      <path
        d="M916.48 529.664c-14.1312 0-25.6-11.4688-25.6-25.6V497.664c0-14.1312 11.4688-25.6 25.6-25.6s25.6 11.4688 25.6 25.6v6.4c0 14.1312-11.4688 25.6-25.6 25.6zM514.816 580.4544c-16.4352 0-32.8704-5.4784-46.336-16.384L264.6016 398.4896a25.6 25.6 0 0 1-3.7376-35.9936 25.6 25.6 0 0 1 35.9936-3.7376l203.8784 165.5808a22.4256 22.4256 0 0 0 28.2624-0.1024l202.8544-167.1168c10.9056-9.0112 27.0336-7.424 36.0448 3.4816 9.0112 10.9056 7.424 27.0336-3.4816 36.0448l-202.8544 167.1168c-13.5168 11.1616-30.1568 16.6912-46.7456 16.6912z"
        fill={getIconColor(color, 2, '#44454A')}
      />
    </svg>
  );
};

IconXinxi.defaultProps = {
  size: 18,
};

export default IconXinxi;
