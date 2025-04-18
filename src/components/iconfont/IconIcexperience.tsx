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

const IconIcexperience: FunctionComponent<Props> = ({ size = 18, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M896.576 220.256l-159.168 0 0-53.024c0-58.592-47.552-106.112-106.144-106.112l-265.184 0c-58.592 0-106.08 47.52-106.08 106.112l0 53.024-132.576 0c-58.592 0-106.08 47.52-106.08 106.144l0 530.4c0 58.592 47.52 106.08 106.08 106.08l769.152 0c58.592 0 106.112-47.52 106.112-106.08l0-530.4c-0.032-58.592-47.52-106.144-106.112-106.144l0 0zM339.616 193.728c0-29.28 23.776-53.024 53.024-53.024l212.192 0c29.248 0 53.024 23.776 53.024 53.024l0 26.496-318.24 0 0-26.496zM923.104 830.304c0 29.248-23.776 53.024-53.024 53.024l-716.128 0c-29.28 0-53.024-23.776-53.024-53.024l0-238.752 344.8 0 0 23.616c0 30.912 29.696 55.968 66.304 55.968s66.272-25.056 66.272-55.968l0-23.616 344.8 0 0 238.752 0.032 0zM923.104 538.496l-344.832 0 0-23.616c0-30.88-29.728-55.936-66.272-55.936s-66.304 25.056-66.304 55.936l0 23.616-344.8 0 0-185.632c0-29.28 23.776-53.024 53.024-53.024l716.096 0c29.28 0 53.024 23.744 53.024 53.024l0 185.632 0.096 0z"
        fill={getIconColor(color, 0, '#444444')}
      />
    </svg>
  );
};

export default IconIcexperience;
