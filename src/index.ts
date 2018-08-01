import {TPoint, TRect} from './types';
import {legendLine} from './legendLine';
import {pointsLine} from './d3lib/SvgUtils';

// legend text rect
const textRect: TRect = [10, 15, 80, 20];

// legend line end point
const endPoint: TPoint = [5, 120];

const legentLinePoints = legendLine(textRect, endPoint);
const pointsLineFunc = pointsLine();

const res = pointsLineFunc(legentLinePoints);

console.log(textRect, endPoint);
console.log(legentLinePoints);
console.log(res);