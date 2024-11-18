import Button from "../button/Button";

function CartItem() {
  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2">
      <img
        className="rounded w-24"
        src="https://cdn.idealo.com/folder/Product/202076/0/202076029/s1_produktbild_max/samsung-galaxy-xcover-field-pro.jpg"
        alt=""
      />
      <div className="mr-4">
      <h3 className="text-right p-2" >عنوان محصول</h3>
      <div className="mt-2">
      <Button className="mx-2" variant="warning">remove</Button>
      <Button variant="primary">+</Button>
      <span className="mx-2">{2}</span>
      <Button variant="danger">-</Button>
      </div>
      </div>
    </div>
  );
}

export default CartItem;
