import {TPoint, TLine} from '../types';

// 2点を水平・垂直の線で結ぶ。startから水平に延ばす
export function horizontalLLine(start: TPoint, end: TPoint): TPoint[] {
  return [start, [end[0], start[1]], end];
}

// 2点を水平・垂直の線で結ぶ。startから垂直に延ばす
export function varticalLLine(start: TPoint, end: TPoint): TPoint[] {
  return [start, [start[0], end[1]], end];
}