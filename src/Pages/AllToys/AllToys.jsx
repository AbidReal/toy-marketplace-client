import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const options = [{ value: "Price-Ascending" }, { value: "Price-Descending" }];

  const [searchText, setSearchText] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(options[0]);

  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/toySearchByName/${searchText}`)
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
  useEffect(() => {
    setLoading(true);
    const fetchToys = async () => {
      try {
        const [value, type] = selected.value
          .split("-")
          .map((item) => item.toLowerCase());
        const response = await fetch(
          `http://localhost:5000/toys?value=${value}&type=${type}`
        );
        const data = await response.json();
        setToys(data);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    fetchToys();
  }, [selected]);
  return (
    <div>
      <div className="custom-container">
        <div className=" flex justify-end mt-5 mb-10 gap-4 ">
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn btn-color ">
              Sort
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow 
              bg-[#2d398a]
               rounded-box w-52"
            >
              <li>
                <a>Price-Ascending</a>
              </li>
              <li>
                <a>Price-Descending</a>
              </li>
            </ul>
          </div>
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
