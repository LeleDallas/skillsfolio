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

const IconShanchu: FunctionComponent<Props> = ({ size = 18, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M371.3024 433.9712v360.704c0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6V433.9712c0-14.1312-11.4688-25.6-25.6-25.6s-25.6 11.4688-25.6 25.6zM613.7856 433.9712v360.704c0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6V433.9712c0-14.1312-11.4688-25.6-25.6-25.6s-25.6 11.4688-25.6 25.6z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M928.3584 244.3776h-188.16v-34.3552c0-75.8272-61.696-137.5744-137.5744-137.5744H436.48c-75.8272 0-137.5744 61.696-137.5744 137.5744v34.3552H102.8608c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6h50.176v494.7456c0 98.816 80.384 179.2 179.2 179.2h367.872c98.816 0 179.2-80.384 179.2-179.2v-272.7936c0-14.1312-11.4688-25.6-25.6-25.6s-25.6 11.4688-25.6 25.6v272.7936c0 70.6048-57.3952 128-128 128H332.2368c-70.6048 0-128-57.3952-128-128V295.5776h623.9232V358.912c0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6V295.5776h49.0496c14.1312 0 25.6-11.4688 25.6-25.6s-11.52-25.6-25.6512-25.6z m-578.2528 0v-34.3552c0-47.616 38.7584-86.3744 86.3744-86.3744h166.2464c47.616 0 86.3744 38.7584 86.3744 86.3744v34.3552H350.1056z"
        fill={getIconColor(color, 1, '#44454A')}
      />
      <path
        d="M853.7088 403.9168c-14.1312 0-25.6 11.4688-25.6 25.6v18.0736c0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6v-18.0736c0-14.1312-11.4176-25.6-25.6-25.6z"
        fill={getIconColor(color, 2, '#44454A')}
      />
    </svg>
  );
};

export default IconShanchu;
