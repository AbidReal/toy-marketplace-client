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
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [toyToDelete, setToyToDelete] = useState(null);

  const url = `http://localhost:5000/toys?email=${user.email}&sort=1`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);

  const handleDelete = (toyId) => {
    setToyToDelete(toyId);
    setConfirmModalOpen(true);
  };

  const handleEdit = (toyId) => {
    console.log(`Edit toy with ID: ${toyId}`);
  };
  const handleConfirmDelete = () => {
    if (toyToDelete) {
      fetch(`http://localhost:5000/toys/${toyToDelete}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            handleToast();
            const remaining = myToys.filter((toy) => toy._id !== toyToDelete);
            setMyToys(remaining);
          }
        })
        .finally(() => {
          setToyToDelete(null);
          setConfirmModalOpen(false);
        });
    }
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
      {/* Confirm Delete Modal */}
      {confirmModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <FaTrashAlt className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Delete Toy
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete this toy?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleConfirmDelete}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={() => setConfirmModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default MyToys;
