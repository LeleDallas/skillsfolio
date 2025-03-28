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

const IconBianji: FunctionComponent<Props> = ({ size = 18, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M752.896 944.6912H267.4176c-98.816 0-179.2-80.384-179.2-179.2V270.9504c0-98.816 80.384-179.2 179.2-179.2h242.176c14.1312 0 25.6 11.4688 25.6 25.6s-11.4688 25.6-25.6 25.6h-242.176c-70.6048 0-128 57.3952-128 128v494.5408c0 70.6048 57.3952 128 128 128h485.4784c70.6048 0 128-57.3952 128-128v-246.6816c0-14.1312 11.4688-25.6 25.6-25.6s25.6 11.4688 25.6 25.6v246.6816c0 98.816-80.384 179.2-179.2 179.2z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M439.7056 641.8432a41.5744 41.5744 0 0 1-28.8768-11.6736c-10.8544-10.3424-15.3088-25.2416-11.9296-39.8848l33.5872-145.7152a42.5472 42.5472 0 0 1 11.2128-20.2752l317.6448-317.6448c37.376-37.376 98.2016-37.376 135.5776 0l30.208 30.208c18.1248 18.1248 28.0576 42.1888 28.0576 67.7888s-9.984 49.664-28.0576 67.7888a25.61536 25.61536 0 0 1-36.1984 0 25.61536 25.61536 0 0 1 0-36.1984c8.448-8.448 13.056-19.6608 13.056-31.5904s-4.6592-23.1424-13.056-31.5904l-30.208-30.208c-17.408-17.408-45.7216-17.408-63.1808 0L481.7408 458.6496l-29.5424 128.1536 122.4704-34.304 218.112-218.112a25.61536 25.61536 0 0 1 36.1984 0 25.61536 25.61536 0 0 1 0 36.1984l-219.8016 219.8016c-5.12 5.12-11.4688 8.8064-18.3808 10.752l-139.6224 39.1168c-3.7888 1.0752-7.6288 1.5872-11.4688 1.5872z"
        fill={getIconColor(color, 1, '#44454A')}
      />
      <path
        d="M854.0672 334.7456c-6.6048 0-13.2608-2.56-18.2784-7.68a25.5744 25.5744 0 0 1 0.3072-36.1984l7.424-7.2704c10.0864-9.9328 26.2656-9.7792 36.1984 0.3072s9.7792 26.3168-0.3072 36.1984l-7.424 7.2704a25.1392 25.1392 0 0 1-17.92 7.3728z"
        fill={getIconColor(color, 2, '#44454A')}
      />
    </svg>
  );
};


export default IconBianji;
