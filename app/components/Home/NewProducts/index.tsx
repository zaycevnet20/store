import Image from "next/image";
import s from "./styled.module.sass";
import { IProduct } from "../../../store/product/product.type";
import { useRouter } from "next/router";

const NewProducts: React.FC<{ product: IProduct }> = ({ product }) => {
  const titleProductFirst = product.title.split('')
  const titleProductSecond = titleProductFirst.splice(50, product.title.length -50, '...')
  const router = useRouter()
  return (
    <>
      <div onClick={() => router.push(`/details/${product.id}`)} className={s.product}>
        <Image
        objectFit="contain"
          className={s.image}
          src={product.image}
          height='330px'
          width='310px'
        ></Image>
        <div className={s.desc}>
          <span className={s.title}>{product.title.length > 50 ? titleProductFirst.join('') : product.title}</span>
          <span className={s.price}>{`${product.price}$`}</span>
        </div>
      </div>
    </>
  );
};

export default NewProducts;
