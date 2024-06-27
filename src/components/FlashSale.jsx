import { useState } from "react";
import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
import { BiCart } from "react-icons/bi";

import Heading from "../common/Heading";
import { products } from "../data/Data";
import Modal from "../common/Modal";

const FlashSale = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);

  const handleOpen = (productId) => {
    setIsModalOpen(productId);
  };

  const handleClose = () => {
    setIsModalOpen(null);
  };

  return (
    <div>
      <div className="w-10/12 m-auto">
        <Heading heading={"You are in Kitchen"} />
        <div className="grid grid-cols-4 gap-3">
          {products.map((item, key) => (
            <div key={key} className="mt-8">
              <div className="overflow-hidden relative">
                <div className="image-container relative">
                  <div className="rounded-3xl">
                    <img src={item.img} alt="item" className="rounded-3xl" />
                  </div>

                  <div className="opacity-0 absolute top-0 right-0 m-4">
                    <div className="bg-white p-4 rounded-full mb-2">
                      <IoMdHeartEmpty />
                    </div>

                    <div className="bg-white p-4 rounded-full">
                      <IoMdSearch />
                    </div>
                  </div>

                  <div className="opacity-0 absolute -bottom-3 right-0 bg-white p-4 rounded-s-2xl">
                    <div className="bg-black text-white h-10 w-10 grid place-items-center rounded-3xl">
                      <button
                        className="text-2xl"
                        onClick={() => handleOpen(item.id)}
                      >
                        <BiCart />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="product-details mt-2">
                  <p className="mb-2">{item.title}</p>
                  <p>${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isModalOpen={isModalOpen}
        handleClose={handleClose}
        data={products.find((item) => item.id === isModalOpen)}
      />
    </div>
  );
};
export default FlashSale;
