function calculateRectangleArea(length, width) {
  let rectangleArea = length * width;
  if (length <= 0 || width <= 0) {
    rectangleArea = undefined;
  }
  return rectangleArea;
}

function calculateTriangleArea(base, height) {
  let triangleArea = (base * height) / 2;
  if(base <= 0 || height <= 0) {
    triangleArea = undefined;
  }
  return triangleArea;
}

function calculateCircleArea(radius) {
  let circleArea = Math.PI * (radius * radius);
  if(radius <= 0){
    circleArea = undefined;
  }
  return circleArea;
}