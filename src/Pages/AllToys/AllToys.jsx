import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  //dynamic title
  const pageName = "All Toys";

  useEffect(() => {
    document.title = `${pageName} | AceFig`;
  }, [pageName]);

  const [searchText, setSearchText] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [asc, setAsc] = useState(true);

  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-nine-eta.vercel.app/toys?sort=${
        asc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [asc]);

  const handleSearch = () => {
    fetch(
      `https://toy-marketplace-server-nine-eta.vercel.app/toySearchByName/${searchText}`
    )
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  //loader
  // if (loading) {
  //   return (
  //     <div className="flex h-screen justify-center items-center ">
  //       <progress className="progress w-56"></progress>
  //     </div>
  //   );
  // }

  return (
    <div>
      <div className="custom-container">
        <div className=" flex justify-end mt-5 mb-10 gap-4 ">
          <button
            className="btn-color px-4 rounded-xl "
            onClick={() => setAsc(!asc)}
          >
            {asc ? "Price: Descending" : "Price: Ascending"}
          </button>
          <div className="form-control">
            <div className="input-group">
              <input
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleKeyPress}
                type="text"
                placeholder="Search Name…"
                className="input input-bordered bg-black "
              />
              <button
                onClick={handleSearch}
                className="btn btn-square btn-color "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <table className="table-auto w-full text-xl ">
          <thead>
            <tr>
              <th>Number</th>
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
                  <td>{index + 1}</td>
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
