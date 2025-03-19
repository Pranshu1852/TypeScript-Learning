interface ShapeBase {
    getArea(): number;
}
   
interface Circle extends ShapeBase {
    radius: number;
}

interface Square extends ShapeBase {
    side: number;
}

type Shape =
| { kind: Circle; data: { radius: number } }
| { kind: Square; data: { side: number } };

function calculateArea(shape: Shape) {
    if("radius" in shape.data){
        return Math.PI * shape.data.radius ** 2;
    }else{
        return shape.data.side * shape.data.side;
    }
}
   
   
   