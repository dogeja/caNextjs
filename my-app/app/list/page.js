import Image from "next/image";
export default function list() {
  let product = ["Tomato", "pasta", "coconut"];

  return (
    <div>
      <h2>리스트입니다.</h2>
      <div className="food_wrap">
        {product.map((list, i) => {
          return (
            <div className="food" key={i}>
              <h4>{list.toUpperCase()} $40</h4>
              <img src={`/food${i}.png`} className="food-img"></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
