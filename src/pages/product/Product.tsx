import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { getProduct } from "../../services/api";
import { IProduct } from "../../types/server";

function Product() {
  const params = useParams<{id: string }>();

  const [product , setProduct] = useState<IProduct>()

  useEffect(() => {
    getProduct(params.id as string).then((data)=>{
      setProduct(data)
    })
  }, []);

  return (
    <div>
      <Container>
        <div className="h-80 shadow mt-4 grid grid-cols-12">
          <div className="bg-orange-300 col-span-8 text-right p-3">
            <h1>{product?.title}</h1>
            <p>{product?.price}</p>
            <p>
              {product?.description}
            </p>
          </div>

          <div className="bg-slate-400 col-span-4 p-4">
            <img
              className="rounded"
              src={product?.image}
              alt=""
            />
            <div>
              <Link to="/cart">
                <Button className="mt-2 w-full" variant="primary">
                  Add to card
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
