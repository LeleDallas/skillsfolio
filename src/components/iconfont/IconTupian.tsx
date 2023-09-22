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

const IconTupian: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M944.7936 464.896c-14.1312 0-25.6 11.4688-25.6 25.6v2.2528c-72.7552-47.4112-160.6144-64.3584-262.0416-50.3296-135.936 18.8416-239.5648 102.5536-301.6192 242.944-77.056-68.864-179.0464-75.0592-249.6512-68.5568V352.9728c0-100.352 81.664-182.016 182.016-182.016h449.28c95.3856 0 175.1552 74.4448 181.6064 169.472a25.61536 25.61536 0 0 0 27.2896 23.808 25.61536 25.61536 0 0 0 23.808-27.2896c-8.2432-121.8048-110.4896-217.2416-232.704-217.2416H287.8976c-128.6144 0-233.216 104.6016-233.216 233.216v318.3104c0 128.6144 104.6016 233.216 233.216 233.216h449.3312c128.6144 0 233.216-104.6016 233.216-233.216V490.496c-0.0512-14.1312-11.52-25.6-25.6512-25.6zM290.7648 853.2992c-101.9392 0-184.8832-82.944-184.8832-184.8832v-0.1536c68.352-7.0656 173.0048-1.536 238.6432 79.616a25.66656 25.66656 0 0 0 24.1152 9.1648 25.7024 25.7024 0 0 0 19.8656-16.4864c53.3504-146.2272 146.1248-229.4784 275.712-247.3984 102.1952-14.1312 187.904 7.0656 255.0272 63.0784v112.1792c0 101.9392-82.944 184.8832-184.8832 184.8832H290.7648z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M944.7936 383.488c-14.1312 0-25.6 11.4688-25.6 25.6v10.24c0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6v-10.24c0-14.1824-11.4688-25.6-25.6-25.6zM194.8672 369.8688c0 57.9072 47.104 105.0624 105.0624 105.0624 57.9072 0 105.0624-47.104 105.0624-105.0624 0-57.9072-47.104-105.0624-105.0624-105.0624-57.9072 0.0512-105.0624 47.1552-105.0624 105.0624z m158.9248 0c0 29.696-24.1664 53.8624-53.8624 53.8624s-53.8624-24.1664-53.8624-53.8624 24.1664-53.8624 53.8624-53.8624c29.696 0.0512 53.8624 24.1664 53.8624 53.8624z"
        fill={getIconColor(color, 1, '#44454A')}
      />
    </svg>
  );
};

IconTupian.defaultProps = {
  size: 18,
};

export default IconTupian;
