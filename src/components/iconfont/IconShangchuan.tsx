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

const IconShangchuan: FunctionComponent<Props> = ({ size = 18, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M940.544 581.7344c-14.1312 0-25.6 11.4688-25.6 25.6v130.6624c0 75.9808-61.7984 137.7792-137.7792 137.7792H257.024c-75.9808 0-137.7792-61.7984-137.7792-137.7792v-130.6624c0-14.1312-11.4688-25.6-25.6-25.6s-25.6 11.4688-25.6 25.6v130.6624c0 104.192 84.7872 188.9792 188.9792 188.9792h520.192c104.192 0 188.9792-84.7872 188.9792-188.9792v-130.6624a25.6512 25.6512 0 0 0-25.6512-25.6z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M328.8576 332.5952c13.2096 0 14.2848 0 116.5312-98.9696 16.2304-15.6672 32.3072-31.3856 46.592-45.312v406.4256c0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6V180.992l145.1008 144.1792c5.0176 4.9664 11.52 7.424 18.0224 7.424 6.6048 0 13.1584-2.5088 18.176-7.5776a25.56928 25.56928 0 0 0-0.1024-36.1984l-184.6784-183.5008a25.6 25.6 0 0 0-35.9936-0.1024c-80.1792 78.848-171.52 167.0656-186.9824 179.2512-7.9872 4.352-13.4144 12.8-13.4144 22.528a25.4976 25.4976 0 0 0 25.5488 25.6z"
        fill={getIconColor(color, 1, '#44454A')}
      />
    </svg>
  );
};

export default IconShangchuan;
