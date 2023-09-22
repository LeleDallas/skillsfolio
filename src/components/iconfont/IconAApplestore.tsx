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

const IconAApplestore: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 28.452571A483.547429 483.547429 0 1 1 512 995.474286 483.547429 483.547429 0 0 1 512 28.452571zM512 125.074286A386.852571 386.852571 0 1 0 512 898.925714 386.852571 386.852571 0 0 0 512 125.074286z m-153.6 548.571428l-38.253714 66.194286a39.862857 39.862857 0 1 1-69.046857-39.789714l28.525714-49.078857c31.890286-9.947429 58.075429-2.340571 78.774857 22.674285z m212.114286-323.291428l117.174857 202.898285h103.497143a39.643429 39.643429 0 0 1 28.233143 67.876572 39.716571 39.716571 0 0 1-28.233143 11.702857h-57.563429l38.838857 67.218286a39.862857 39.862857 0 0 1-68.973714 39.789714l-147.017143-254.683429c-33.353143-57.490286-9.508571-115.2 14.043429-134.729142z m13.458285-147.163429c19.017143 10.971429 25.526857 35.328 14.628572 54.418286L427.885714 553.106286h123.465143c39.936 0 62.390857 47.030857 44.982857 79.506285H234.788571a39.643429 39.643429 0 0 1-28.086857-67.876571 39.643429 39.643429 0 0 1 28.086857-11.702857h101.449143L465.92 328.192l-40.521143-70.436571a39.862857 39.862857 0 0 1 68.973714-39.789715l17.334858 30.646857 17.773714-30.646857a39.789714 39.789714 0 0 1 54.418286-14.628571z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconAApplestore.defaultProps = {
  size: 18,
};

export default IconAApplestore;
