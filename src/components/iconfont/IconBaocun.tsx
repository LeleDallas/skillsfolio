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

const IconBaocun: FunctionComponent<Props> = ({ size = 18, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M927.2832 463.7184c-14.1312 0-25.6 11.4688-25.6 25.6v13.7216c0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6v-13.7216c0-14.1312-11.4688-25.6-25.6-25.6z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M927.2832 563.0976c-14.1312 0-25.6 11.4688-25.6 25.6v126.72c0 98.816-80.384 179.2-179.2 179.2H311.4496c-98.816 0-179.2-80.384-179.2-179.2V304.384c0-89.1392 65.4336-163.2768 150.784-176.896v208.384c0 43.3152 35.2256 78.5408 78.5408 78.5408h172.544c43.3152 0 78.5408-35.2256 78.5408-78.5408V125.184h7.424c155.2896 0 281.6 126.3104 281.6 281.6 0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6c0-183.5008-149.2992-332.8-332.8-332.8H311.4496c-0.8704 0-1.6896 0-2.56 0.0512h-0.6656c-125.5424 1.7408-227.1232 104.3456-227.1232 230.2976v411.0336c0 127.0272 103.3728 230.4 230.4 230.4h411.0336c127.0272 0 230.4-103.3728 230.4-230.4v-126.72a25.6768 25.6768 0 0 0-25.6512-25.5488z m-365.824-437.9136V335.872c0 15.0528-12.288 27.3408-27.3408 27.3408h-172.544c-15.0528 0-27.3408-12.288-27.3408-27.3408V125.184h227.2256z"
        fill={getIconColor(color, 1, '#44454A')}
      />
      <path
        d="M467.456 503.3984c-83.8656 0-152.064 68.1984-152.064 152.064s68.1984 152.064 152.064 152.064 152.064-68.1984 152.064-152.064-68.1984-152.064-152.064-152.064z m0 252.928c-55.6032 0-100.864-45.2608-100.864-100.864s45.2608-100.864 100.864-100.864 100.864 45.2608 100.864 100.864-45.2608 100.864-100.864 100.864z"
        fill={getIconColor(color, 2, '#44454A')}
      />
    </svg>
  );
};

// Removed defaultProps as default parameters are used instead

export default IconBaocun;
