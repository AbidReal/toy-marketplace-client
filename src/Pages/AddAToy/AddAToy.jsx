import { useForm } from "react-hook-form";

const AddAToy = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2" htmlFor="pictureUrl">
            Picture URL of the toy
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            type="text"
            id="pictureUrl"
            {...register("pictureUrl", { required: true })}
          />
          {errors.pictureUrl && (
            <span className="text-red-500">Picture URL is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">
            Toy Name
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="sellerName">
            Seller Name
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            type="text"
            id="sellerName"
            {...register("sellerName")}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="sellerEmail">
            Seller Email
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            type="email"
            id="sellerEmail"
            {...register("sellerEmail")}
          />
        </div>

        <div className="flex gap-10">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="subCategory">
              Sub-category
            </label>

            <select
              className=" px-10 border border-gray-300 p-2 rounded text-black"
              id="subCategory"
              {...register("subCategory")}
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
            <label className="block mb-2" htmlFor="quantity">
              Available Quantity
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              type="number"
              id="quantity"
              {...register("quantity", { required: true })}
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
              className=" w-36 border border-gray-300 p-2 rounded"
              type="number"
              id="price"
              {...register("price", { required: true })}
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
              className="w-full border border-gray-300 p-2 rounded"
              type="number"
              id="rating"
              {...register("rating", { required: true })}
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
            className="w-full border border-gray-300 p-2 rounded"
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
