import { category } from "../data/Data";

const Category = () => {
  return (
    <div>
      <div className="w-10/12 m-auto">
        <div>
          <div className="flex">
            {category.map((category, key) => (
              <div className="m-2" key={key}>
                <div>
                  {category.img && (
                    <div className="relative overflow-hidden rounded-3xl">
                      <img
                        className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all ease-in-out duration-700"
                        src={category.img}
                        alt="catimg"
                      />

                      <p className="absolute rounded-full rounded-s-none p-3 border-white bg-white bottom-0 left-0 text-xl capitalize">
                        {category.name}
                      </p>
                    </div>
                  )}

                  {category.imgs && category.imgs.length > 0 && (
                    <div>
                      {category.imgs.map((image, key) => (
                        <div
                          key={key}
                          className="relative overflow-hidden rounded-3xl mb-4"
                        >
                          <img
                            src={image.img}
                            alt="img"
                            className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all ease-in-out duration-700"
                          />

                          <p className="absolute rounded-3xl rounded-s-none p-3 border-white bg-white bottom-0 text-xl capitalize">
                            {image.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
