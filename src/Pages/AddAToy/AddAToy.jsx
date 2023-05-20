import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };
  // console.log(user);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2" htmlFor="picture_url">
            Picture URL of the toy
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded text-black"
            type="text"
            id="picture_url"
            {...register("picture_url", { required: true })}
          />
          {errors.pictureUrl && (
            <span className="text-red-500">Picture URL is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="toy_name">
            Toy Name
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded text-black"
            type="text"
            id="toy_name"
            {...register("toy_name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="seller_name">
            Seller Name
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded text-black"
            value={user?.displayName}
            type="text"
            id="seller_name"
            {...register("seller_name")}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="seller_email">
            Seller Email
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded text-black"
            value={user?.email}
            type="email"
            id="seller_email"
            {...register("seller_email")}
          />
        </div>

        <div className="flex gap-10">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="sub_category">
              Sub-category
            </label>

            <select
              className=" px-10 border border-gray-300 p-2 rounded  text-black"
              id="sub_category"
              {...register("sub_category")}
            >
              <option value="game">game</option>
              <option value="movie">movie</option>
              <option value="anime">anime</option>
            </select>

            {errors.subCategory && (
              <span className="text-red-500">Sub-category is required</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="quantity_available">
              Available Quantity
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded text-black"
              type="number"
              id="quantity_available"
              {...register("quantity_available", { required: true })}
            />
            {errors.quantity && (
              <span className="text-red-500">
                Available Quantity is required
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-10">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="price">
              Price
            </label>
            <input
              className=" w-36 border border-gray-300 p-2 rounded text-black"
              type="number"
              step="0.01"
              id="price"
              {...register("price")}
            />
            {errors.price && (
              <span className="text-red-500">Price is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="rating">
              Rating
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded text-black"
              type="number"
              step="0.01"
              id="rating"
              {...register("rating")}
            />
            {errors.rating && (
              <span className="text-red-500">Rating is required</span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="description">
            Detail Description
          </label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded text-black"
            id="description"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="text-red-500">Description is required</span>
          )}
        </div>

        <button
          className=" mb-10 btn-color text-white px-4 py-2 rounded"
          type="submit"
        >
          Add Toy
        </button>
      </form>
    </div>
  );
};

export default AddAToy;
