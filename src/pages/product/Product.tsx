import React from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

function Product() {
  const params = useParams();
  return (
    <div>
      <Container>
        <div className="h-80 shadow mt-4 grid grid-cols-12">
          <div className="bg-orange-300 col-span-8 text-right p-3">
            <h1>عنوان محصول</h1>
            <p>قیمت 25﷼</p>
            <p>
              {" "}
              موبایل گالاکسی از بهترین های بازار می باشد . برای ما بسیار کارایی
              دار موبایل گالاکسی از بهترین های بازار می باشد . برای ما بسیار
              کارایی دار موبایل گالاکسی از بهترین های بازار می باشد . برای ما
              بسیار کارایی دار
            </p>
          </div>

          <div className="bg-slate-400 col-span-4 p-4">
            <img
              className="rounded"
              src="https://cdn.idealo.com/folder/Product/202076/0/202076029/s1_produktbild_max/samsung-galaxy-xcover-field-pro.jpg"
              alt=""
            />
            <div>
              <Link to="/cart">
              <Button className='mt-2 w-full' variant="primary">Add to card</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
