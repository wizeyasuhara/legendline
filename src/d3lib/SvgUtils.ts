import {line} from 'd3-shape';

export function pointsLine() {
  return line().x((d) => d[0]).y((d) => d[1]);
}