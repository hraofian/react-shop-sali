import { IProduct } from "../../types/server";

type TProductItem = IProduct;

function ProductItem({ title, price, description, image }: TProductItem) {
  return (
    <div className="shadow-xl border rounded pb-2">
      <img className="rounded-t" src={image} alt="" />
      <div className="flex justify-between  px-4 mt-2">
        <h3 className="bg-red-400 line-clamp-1 font-bold w-44">{title}</h3>
        <span className="bg-green-400">{price}$</span>
      </div>
      <div className="px-4 mt-1">
        <p className="line-clamp-2 ">{description}</p>
      </div>
    </div>
  );
}

export default ProductItem;
