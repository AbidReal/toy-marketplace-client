import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const ToyDetails = () => {
  const toy = useLoaderData();
  const { seller_name, _id } = toy;
  console.log(seller_name);
  return <div>details of The toy seller: {seller_name}</div>;
};

export default ToyDetails;
