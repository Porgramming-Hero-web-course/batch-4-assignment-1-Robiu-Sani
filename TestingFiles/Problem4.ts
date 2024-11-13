type CircleTest = {
  shape: "circle";
  radius: number;
};

type RectangleTest = {
  shape: "rectangle";
  width: number;
  height: number;
};

type ShapeTest = CircleTest | RectangleTest;

function calculateShapeAreaTest(shape: ShapeTest): number {
  if (shape.shape === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else if (shape.shape === "rectangle") {
    return shape.width * shape.height;
  }
  throw new Error("Unknown shape");
}
