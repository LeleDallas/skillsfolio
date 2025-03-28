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

const IconSubmit1: FunctionComponent<Props> = ({ size = 18, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1140 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M179.929021 556.308647L21.004775 374.113351A74.353844 74.353844 0 0 1 2.274418 342.896088a76.62419 76.62419 0 0 1 56.758659-93.084201L1042.660643 2.344133a74.92143 74.92143 0 0 1 45.974514 2.837933 76.62419 76.62419 0 0 1 43.704167 98.760067L796.895648 975.187553a70.948324 70.948324 0 0 1-20.433117 29.514503 76.056603 76.056603 0 0 1-107.273866-6.243453l-160.627006-180.492536A45.406927 45.406927 0 0 1 513.102351 754.396368a44.839341 44.839341 0 0 1 63.569699 3.973106l144.166994 165.167699 320.686426-825.838493-939.355812 232.710503 170.275978 199.222895-36.893129 238.953955 519.90932-462.583073a45.066375 45.066375 0 1 1 59.596592 67.542804L269.040116 858.832301a77.191777 77.191777 0 0 1-61.866938 18.162771 75.489017 75.489017 0 0 1-63.569699-86.840748z"
        fill={getIconColor(color, 0, '#1F8CEB')}
      />
    </svg>
  );
};

export default IconSubmit1;
