import { useDispatch, useSelector } from "react-redux";
import { addCart, deleteCart } from "../redux/CartSlice";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartSlice);
  const handleCartAdd = (e) => {
    dispatch(
      addCart({ id: Date.now(), price: e.target.value, name: e.target.name })
    );
  };

  const handleCartDelete = (e) => {
    dispatch(deleteCart(e.target.id));
  };

  return (
    <div>
      <h1>쇼핑 카트</h1>
      <button onClick={handleCartAdd} name="상품 1" value="10000">
        상품 1 추가
      </button>
      <button onClick={handleCartAdd} name="상품 2" value="20000">
        상품 2 추가
      </button>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            {item.name} - {item.price}원
            <button id={item.id} onClick={handleCartDelete}>
              제거
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
