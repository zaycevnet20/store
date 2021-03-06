import NewProducts from "../NewProducts";
import s from "./index.module.sass";
import Choice from "../Choice";
import { useGetProductsQuery } from "../../../store/product/product.api";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { TypeRoorState } from "../../../store/store";
import Footer from "../../Footer/Index";
import Home from "../../Home/index";

const OtherProducts: React.FC = () => {
  const { data, isLoading, error } = useGetProductsQuery(20);
  const router = useRouter();
  const valueRadio = useSelector(
    (state: TypeRoorState) => state.choiceRate.value
  );

  const path: any = router.query.id;
  const valueRange = useSelector(
    (state: TypeRoorState) => state.setting.firstValue
  );
  return (

      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.choice}>
            <Choice />
          </div>
          <div className={s.products}>
            <div className={s.title}>
              <h1>{path ? path : "All products"}</h1>
            </div>
            {isLoading ? (
              <div className={s["spinner-wrapper"]}>
                <div className={s.spinner}></div>
              </div>
            ) : error ? (
              <div className="error">Error</div>
            ) : (
              <div>
                <div className={s.product}>
                  {typeof path != "undefined" &&
                    data
                      ?.filter((name) => name.category.includes(path))
                      .map((product) => {
                        if (
                          product.price >= valueRange[0] &&
                          product.price <= valueRange[1] &&
                          product.rating.rate > valueRadio
                        ) {
                          return (
                            <NewProducts key={product.id} product={product} />
                          );
                        }
                      })}
                  {typeof path == "undefined" && <Home />}
                </div>
                <Footer />
              </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default OtherProducts;
