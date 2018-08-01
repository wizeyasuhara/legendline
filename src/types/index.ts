/**
 * 座標
 * x, y
 */
export type TPoint = [number, number];

/**
 * 線
 * [x1,y1],[x2,y2]
 * 始点と終点の座標
 */
export type TLine = [[number, number], [number, number]];

/**
 * 四角
 * x, y, w, h
 * x, y は左上の座標を表す
 */
export type TRect = [number, number, number, number];

/**
 * 四角のx,yの[min,max]の配列
 */
export type TRectMinMax = [[number, number], [number, number]];

/**
 * Rectangleから見た方向（ or 辺)
 * 上: [true, false, false, false]
 * 右: [false, true, false, false]
 * 下: [false, false, true, false]
 * 左: [false, false, false, true]
 * 該当無し: [false, false, false, false]
 * ２つのtrueがあれば、角を指す
 */
export type TRectSide = [boolean, boolean, boolean, boolean];

/**
 * 角
 * 左上: [true, false, false, false]
 * 右上: [false, true, false, false]
 * 右下: [false, false, true, false]
 * 左下: [false, false, false, true]
 * 該当無し: [false, false, false, false]
 */
export type TRectCorner = [boolean, boolean, boolean, boolean];
