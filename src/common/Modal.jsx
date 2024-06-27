import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { PiMinus, PiPlus } from "react-icons/pi";
import { useDispatch } from "react-redux";

import { addToCart, getCartTotal, updateQuantity } from "../redux/cartSlice";

const Modal = ({ isModalOpen, handleClose, data }) => {
  const [qty, setQty] = useState(1);
  const [addedItemToCart, setAddedItemToCart] = useState(false);

  const dispatch = useDispatch();

  const addItemToCart = (product) => {
    let totalPrice = qty * product.price;

    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };

    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());
    setAddedItemToCart(true);
  };

  useEffect(() => {
    if (isModalOpen) {
    } else {
      setQty(1);
      setAddedItemToCart(false);
      
    }
  }, [isModalOpen]);

  const increaseQuantity = (itemId, currentQuantity) => {
    const newQty = currentQuantity + 1;
    setQty(newQty);
    dispatch(updateQuantity({ id: itemId, quantity: newQty }));
  };

  const decreaseQuantity = (itemId, currentQuantity) => {
    const newQty = Math.max(currentQuantity - 1, 1);
    setQty(newQty);
    dispatch(updateQuantity({ id: itemId, quantity: newQty }));
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content w-2/3 relative bg-white overflow-hidden">
            <span
              className="absolute cursor-pointer top-0 right-0 p-4"
              onClick={() => handleClose()}
            >
              <FaTimes />
            </span>

            <div className="flex">
              <div>
                <div className="flash_sale_img">
                  <img src={data.img} alt="img" />
                </div>
              </div>

              <div className="modal-info ml-6">
                <p className="mb-2 font-bold">{data.short_description}</p>
                <p className="text-red-600 text-xl">${data.price}</p>
                <p className="my-2">{data.description}</p>

                <div className="flex items-center mb-2">
                  <p className="font-semibold mr-2">Shades: </p>
                  <select
                    name="shades"
                    id="Shades"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none"
                  >
                    <option value="options">Choose an Options</option>
                    <option value="options">Choose an Options 1</option>
                    <option value="options">Choose an Options 2</option>
                    <option value="options">Choose an Options 3</option>
                    <option value="options">Choose an Options 4</option>
                    <option value="options">Choose an Options 5</option>
                  </select>
                </div>

                <p className="text-green-700 m-0">In Stock 400 Items</p>

                <div className="flex items-center">
                  <div className="flex mr-3">
                    <button
                      className="border mt-4 py-3 px-6"
                      onClick={() => decreaseQuantity(data.id, qty)}
                    >
                      <PiMinus />
                    </button>
                    <span className="border mt-4 py-3 px-6 count">
                      {qty || 1}
                    </span>

                    <button
                      className="border mt-4 py-3 px-6"
                      onClick={() => increaseQuantity(data.id, qty)}
                    >
                      <PiPlus />
                    </button>
                  </div>

                  <div className="addtocart mr-3">
                    {addedItemToCart ? (
                      <button className="border mt-4 py-3 px-6 text-white">
                        <Link to="/cart">View Cart</Link>
                      </button>
                    ) : (
                      <button
                        className="border mt-4 py-3 px-6 text-white"
                        onClick={() => addItemToCart(data)}
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Modal;
