import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  });
  return (
    <div>
      all toys section
      <div className="custom-container">
        <table className="table-auto w-full text-xl ">
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Quantity</th>

              <th>Edit</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {toys.map(
              (
                {
                  _id,
                  toy_name,
                  sub_category,
                  quantity_available,
                  price,
                  seller_name,
                },
                index
              ) => (
                <tr
                  key={_id}
                  className={index % 2 === 0 ? "bg-gray-800" : "bg-[#1b1d2a]"}
                >
                  <td>{seller_name}</td>
                  <td>{toy_name}</td>
                  <td>{sub_category}</td>
                  <td>${price}</td>
                  <td>{quantity_available}</td>

                  <td>
                    <Link to={`/toys/${_id}`}>
                      <button className=" px-5  py-3 btn-color  font-extrabold md:text-lg rounded-lg my-6 ">
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
