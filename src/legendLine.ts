import {TPoint, TLine, TRect, TRectMinMax, TRectSide, TRectCorner} from './types';
import {rectMinMax, pointDirection, sideCenter, num2side} from './lib/RectUtil';
import {horizontalLLine} from './lib/LineUtil';

export function legendLine(startRect: TRect, endPoint: TPoint): TPoint[] {
  let legendLine: TPoint[] = [];

  const pSide: TRectSide = pointDirection(startRect, endPoint);
  const [trmmX, trmmY] = rectMinMax(startRect);

  // endPoint がテキストの左右にある場合
  if (pSide[1] || pSide[3]) {
    const startPoint = sideCenter(startRect, (pSide[1]) ? num2side(1) : num2side(3));
    legendLine = horizontalLLine(startPoint, endPoint);
  }
  // endPoint がテキストの真上・真下にある
  else if (pSide[0] || pSide[2]) {
    legendLine = [
      [endPoint[0], trmmY[(pSide[0]) ? 0 : 1]],
      endPoint,
    ];
  }
  return legendLine;
}
 