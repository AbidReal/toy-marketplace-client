import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const ToyDetails = () => {
  //dynamic title
  const pageName = "Toy Details";

  useEffect(() => {
    document.title = `${pageName} | AceFig`;
  }, [pageName]);

  const toy = useLoaderData();
  const {
    seller_name,
    _id,
    toy_name,
    sub_catagory,
    price,
    quantity_available,
    picture_url,
    rating,
    description,
    seller_email,
  } = toy;
  console.log(seller_name);
  return (
    <div className="custom-container">
      <div className="grid grid-cols-1 text-center lg:text-left ">
        {/* toy img */}
        <div className=" rounded-2xl overflow-hidden my-10 h-full w-full ">
          <img
            src={picture_url}
            alt="chef image"
            className="object-cover h-full w-full"
          />
        </div>
        {/* toy details */}
        <div className=" flex flex-col gap-6 mb-20 text-xl  ">
          <p className="mt-24 text-4xl font-extrabold">{toy_name}</p>
          <p>
            <span className="font-medium ">Seller Name: </span>

            {seller_name}
          </p>
          <p>
            <span className="font-medium ">Seller Email:</span> {seller_email}
          </p>
          <p>
            {" "}
            <span className="font-medium ">Sub-category:</span> {sub_catagory}
          </p>
          <p>
            <span className="font-medium">Price:</span>{" "}
            <span className="text-red-500">${price}</span>
          </p>
          <p>
            <span className="font-medium">Rating:</span> {rating}
          </p>
          <p>
            <span className="font-medium">Available Quantity:</span>{" "}
            {quantity_available}
          </p>
          <p>
            <span className="font-medium">
              Description: <br />{" "}
            </span>{" "}
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
