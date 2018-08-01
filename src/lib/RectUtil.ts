import {TPoint, TLine, TRect, TRectMinMax, TRectSide, TRectCorner} from '../types';
import {centerPoint} from './PointsUtil';

// TRect型として正しい値が入っているかどうか
export function validRect(rect: TRect): boolean {
  return (rect[2] >= 0 && rect[3] >= 0);
}

// TRectMinMaxに変換
export function rectMinMax(rect: TRect): TRectMinMax {
  return [
    [rect[0], rect[0] + rect[2]],
    [rect[1], rect[1] + rect[3]],
  ];
}

// 左上から時計回りに４点の座標を返す
export function cornerPoints(rect: TRect): [TPoint, TPoint, TPoint, TPoint] {
  const [mmX, mmY] = rectMinMax(rect);
  return [
    [mmX[0], mmY[0]],
    [mmX[1], mmY[0]],
    [mmX[1], mmY[1]],
    [mmX[0], mmY[1]],
  ];
}

// 接している辺を求める
// 接している辺を返す。接していなければすべてfalse
export function touchedSide(rect: TRect, point: TPoint): TRectSide {
  const [mmX, mmY] = rectMinMax(rect);
  return [
    (mmY[0] === point[1]),
    (mmX[1] === point[0]),
    (mmY[1] === point[1]),
    (mmX[0] === point[0]),
  ];
}

// Rectangleのどちら側にあるかを求める
// すべてfalseの場合、pointは rectと重なっている
export function pointDirection(rect: TRect, point: TPoint): TRectSide {
  const [mmX, mmY] = rectMinMax(rect);
  return [
    (point[1] < mmY[0]),
    (point[0] > mmX[1]),
    (point[1] > mmY[1]),
    (point[0] < mmX[0]),
  ];
}

// 該当する角を求める
export function touchedCorner(rect: TRect, point: TPoint) : TRectCorner {
  const side = touchedSide(rect, point);
  return [
    (side[3] && side[0]),
    (side[0] && side[1]),
    (side[1] && side[2]),
    (side[2] && side[3]),
  ];
}

// 辺を取得
// sideは必ず１つだけtrueを持っていることを前提としてます。
export function sideLine(rect: TRect, side: TRectSide): TLine {
  const corners = cornerPoints(rect);
  const sideNum = side.indexOf(true);
  return [corners[sideNum], corners[(sideNum + 1) % 4]];
}

// 辺の中心点を取得
// sideは必ず１つだけtrueを持っていることを前提としてます。
export function sideCenter(rect: TRect, side: TRectSide): TPoint {
  const line = sideLine(rect, side);
  return centerPoint(line[0], line[1]);
}

// 数値をTRectSideに変換 (0-3)
export function num2side(num: number): TRectSide {
  num = num % 4;
  const sideSeed = [false, false, false, false] as TRectSide;
  sideSeed[num] = true;
  return sideSeed;
}
