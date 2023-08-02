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

const IconGaishuai: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M903.2192 706.7136a25.64096 25.64096 0 0 1-23.6032-35.584 386.3552 386.3552 0 0 0 23.2448-75.4688 25.58976 25.58976 0 0 1 50.176 10.0352 442.83904 442.83904 0 0 1-26.3168 85.4016c-4.0448 9.7792-13.5168 15.616-23.5008 15.616zM518.0416 961.9456c-244.6336 0-443.6992-199.0144-443.6992-443.6992 0-211.3536 150.272-394.4448 357.3248-435.3024 13.824-2.7648 27.3408 6.2976 30.0544 20.1728a25.58976 25.58976 0 0 1-20.1728 30.0544c-183.1424 36.1472-316.0576 198.0416-316.0576 385.0752 0 216.4224 176.0768 392.4992 392.4992 392.4992a391.89504 391.89504 0 0 0 281.2928-118.8352c8.3968-8.6016 16.4864-17.7152 24.0128-27.0336a25.55904 25.55904 0 0 1 35.9936-3.7888 25.55904 25.55904 0 0 1 3.7888 35.9936 450.29376 450.29376 0 0 1-27.136 30.5664c-8.0896 8.2944-16.5888 16.384-25.2928 24.0128-80.7936 71.1168-184.7296 110.2848-292.608 110.2848z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <path
        d="M934.2464 504.064h-380.16c-14.1312 0-25.6-11.4688-25.6-25.6V101.6832c0-7.168 3.0208-14.0288 8.2944-18.8416a25.51808 25.51808 0 0 1 19.5072-6.656c213.6576 18.2272 383.3344 186.4192 403.456 399.872 0.6656 7.168-1.6896 14.2848-6.5536 19.6096a25.48736 25.48736 0 0 1-18.944 8.3968z m-354.56-51.2h325.4272c-27.7504-166.1952-158.9248-296.1408-325.4272-322.304v322.304z"
        fill={getIconColor(color, 1, '#44454A')}
      />
    </svg>
  );
};

IconGaishuai.defaultProps = {
  size: 18,
};

export default IconGaishuai;
