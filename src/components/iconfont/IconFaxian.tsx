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

const IconFaxian: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M712.192 179.2512c-4.1472 0-8.3968-1.024-12.288-3.1744-5.2224-2.8672-10.496-5.632-15.8208-8.192a25.63072 25.63072 0 0 1-11.7248-34.2528 25.63072 25.63072 0 0 1 34.2528-11.7248c5.9904 2.9184 11.9808 6.0928 17.8688 9.3184a25.6512 25.6512 0 0 1 10.1376 34.7648 25.50272 25.50272 0 0 1-22.4256 13.2608zM926.0544 540.4672c-14.1312 0-25.6-11.4688-25.6-25.6 0-118.9376-53.6064-229.4784-147.0464-303.2576a25.5744 25.5744 0 0 1 31.6928-40.1408c105.8304 83.5584 166.5024 208.7424 166.5024 343.4496 0.0512 14.08-11.4176 25.5488-25.5488 25.5488z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M514.2016 952.2688c-241.2032 0-437.4528-196.2496-437.4528-437.4528s196.2496-437.4528 437.4528-437.4528c43.0592 0 85.6064 6.2464 126.464 18.5856 13.5168 4.096 21.1968 18.3808 17.1008 31.8976a25.60512 25.60512 0 0 1-31.8976 17.1008 387.04128 387.04128 0 0 0-111.6672-16.384C301.2608 128.6144 128 301.8752 128 514.8672S301.2608 901.12 514.2528 901.12c189.3888 0 349.5424-135.3216 380.8768-321.7408a25.61536 25.61536 0 0 1 29.4912-20.992c13.9264 2.3552 23.3472 15.5648 20.992 29.4912-16.9472 100.8128-69.2736 193.0752-147.456 259.7888a437.85216 437.85216 0 0 1-283.9552 104.6016z"
        fill={getIconColor(color, 1, '#44454A')}
      />
      <path
        d="M359.9872 710.912c-10.6496 0-21.1968-4.096-29.184-11.8784a41.7792 41.7792 0 0 1-8.704-47.616l93.4912-214.4256c0.1536-0.3072 0.3072-0.6656 0.4608-0.9728 4.096-8.3968 10.9568-15.2576 19.3024-19.3024 0.3072-0.1536 0.6656-0.3072 0.9728-0.4608l214.4256-93.4912a41.6768 41.6768 0 0 1 47.616 8.704 41.728 41.728 0 0 1 7.4752 47.8208l-97.792 210.1248c-0.1536 0.3072-0.3072 0.6656-0.4608 0.9728a41.49248 41.49248 0 0 1-17.92 17.92c-0.3072 0.1536-0.6656 0.3072-0.9728 0.4608L378.5728 706.56c-5.888 2.9184-12.288 4.352-18.5856 4.352zM460.8 461.4144l-82.2784 188.672 184.8832-86.016 86.016-184.8832L460.8 461.4144z m200.5504-115.4048z"
        fill={getIconColor(color, 2, '#44454A')}
      />
    </svg>
  );
};

IconFaxian.defaultProps = {
  size: 18,
};

export default IconFaxian;
