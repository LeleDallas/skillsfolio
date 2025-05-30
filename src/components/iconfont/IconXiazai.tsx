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

const IconXiazai: FunctionComponent<Props> = ({ size = 18, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M941.0048 581.7344c-14.1312 0-25.6 11.4688-25.6 25.6v130.6624c0 75.9808-61.7984 137.7792-137.7792 137.7792H257.4336c-75.9808 0-137.7792-61.7984-137.7792-137.7792v-130.6624c0-14.1312-11.4688-25.6-25.6-25.6s-25.6 11.4688-25.6 25.6v130.6624c0 104.192 84.7872 188.9792 188.9792 188.9792h520.192c104.192 0 188.9792-84.7872 188.9792-188.9792v-130.6624c0-14.1312-11.4688-25.6-25.6-25.6z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M317.1328 433.8176c15.5136 12.1856 106.8544 100.352 186.9824 179.2512 4.9664 4.9152 11.4688 7.3728 17.9712 7.3728 6.5024 0 13.056-2.4576 18.0224-7.424l184.6784-183.5008a25.56928 25.56928 0 0 0 0.1024-36.1984 25.56928 25.56928 0 0 0-36.1984-0.1024l-145.1008 144.1792V123.4944c0-14.1312-11.4688-25.6-25.6-25.6s-25.6 11.4688-25.6 25.6v406.4256c-14.2848-13.9264-30.3616-29.5936-46.592-45.312C343.552 385.6896 342.4768 385.6896 329.2672 385.6896c-14.1312 0-25.6 11.4688-25.6 25.6 0 9.728 5.4272 18.2272 13.4656 22.528z"
        fill={getIconColor(color, 1, '#44454A')}
      />
    </svg>
  );
};

export default IconXiazai;
