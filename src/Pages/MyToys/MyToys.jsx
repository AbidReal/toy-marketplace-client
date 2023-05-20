import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MyToys = () => {
  const handleToast = () => {
    toast.success("Toy Deleted Successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const url = `http://localhost:5000/toys?email=${user.email}&sort=1`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);

  const handleEdit = (toyId) => {
    console.log(`Edit toy with ID: ${toyId}`);
  };
  const handleDelete = (toyId) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/toys/${toyId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            handleToast();
            const remaining = myToys.filter((toy) => toy._id !== toyId);
            setMyToys(remaining);
          }
        });
    }
    console.log(`delete toy id: ${toyId}`);
  };
  return (
    <div className="custom-container text-center">
      <table className="table-auto w-full ">
        <thead>
          <tr>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Quantity</th>
            <th>Price</th>

            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {myToys.map(
            (
              { _id, toy_name, sub_category, quantity_available, price },
              index
            ) => (
              <tr
                key={_id}
                className={index % 2 === 0 ? "bg-gray-800" : "bg-[#1b1d2a]"}
              >
                <td>{toy_name}</td>
                <td>{sub_category}</td>
                <td>{quantity_available}</td>
                <td>${price}</td>

                <td>
                  <button
                    className="text-blue-500 mr-4"
                    onClick={() => handleEdit(_id)}
                  >
                    <FaEdit className="h-5 w-5" />
                  </button>
                  <button
                    className="text-red-500 "
                    onClick={() => handleDelete(_id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default MyToys;
