import {TPoint} from '../types';

// 2点の中心点を返す
export function centerPoint(point1: TPoint, point2: TPoint): TPoint {
  return [(point1[0] + point2[0]) / 2, (point1[1] + point2[1]) / 2];
}
