function ProductItem() {
  return (
    <div className="shadow-xl border rounded pb-2">
      <img
        className="rounded-t"
        src="https://cdn.idealo.com/folder/Product/202076/0/202076029/s1_produktbild_max/samsung-galaxy-xcover-field-pro.jpg"
        alt=""
      />
      <div className="flex justify-between flex-row-reverse px-4 mt-2">
        <h3>عنوان محصول</h3>
        <span>55$</span>
      </div>
      <div className="px-4 mt-1">
        <p className="line-clamp-2 text-right">
          موبایل گالاکسی از بهترین های بازار می باشد . برای ما بسیار کارایی دار
          موبایل گالاکسی از بهترین های بازار می باشد . برای ما بسیار کارایی دارد
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
