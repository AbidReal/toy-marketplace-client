import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ShopByCategory = () => {
  const [actionFigures, setActionFigures] = useState([]);
  const tabs = ["game", "movie", "anime"];

  useEffect(() => {
    // Fetch action figures from the database or API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/toys"); // Replace with your API endpoint
        const data = await response.json();
        setActionFigures(data);
      } catch (error) {
        console.error("Error fetching action figures:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="custom-container text-center mt-20 ">
        <span
          className="text-transparent text-7xl  font-extrabold"
          style={{
            "--text-stroke-color": "white",
            "--text-stroke-width": "2px",
            WebkitTextStroke:
              "var(--text-stroke-width) var(--text-stroke-color)",
            textStroke: "var(--text-stroke-width) var(--text-stroke-color)",
          }}
        >
          Shop
        </span>
        {/* Picture, Name, Price, Rating and View Details button. */}

        {/* tabs */}
        <div className="mt-20">
          <Tabs>
            <TabList className="flex justify-evenly text-4xl font-bold mb-4  ">
              {tabs.map((tab) => (
                <Tab
                  className=" border-white border-2 rounded-lg px-7 py-4 hover:cursor-pointer "
                  selectedClassName=" bg-btnL "
                  key={tab}
                >
                  {tab}
                </Tab>
              ))}
            </TabList>

            {tabs.map((tab) => (
              <TabPanel
                className="grid grid-cols-2 text-center text-xl  "
                key={tab}
              >
                {actionFigures
                  .filter((figure) => figure.sub_category === tab)
                  .map(({ _id, picture_url, toy_name, price, rating }) => (
                    <div
                      className=" mx-auto border-2 border-white rounded-2xl"
                      key={_id}
                    >
                      <div className="h-96 w-96 m-2  overflow-hidden rounded-2xl  ">
                        <img
                          className="rounded-2xl object-cover w-full h-full transition-transform duration-300 transform hover:scale-110 "
                          src={picture_url}
                          alt=""
                        />
                      </div>
                      <div className="my-4">
                        <p>
                          <span className="font-extrabold ">Figure Name:</span>{" "}
                          {toy_name}
                        </p>
                        <p>
                          <span className="font-extrabold ">Price:</span> $
                          {price}
                        </p>
                        <p>
                          <span className="font-extrabold ">Rating:</span>{" "}
                          {rating}/5
                        </p>
                      </div>
                      <div>
                        <Link to="/login">
                          <button className=" px-9  py-4 btn-color  font-extrabold md:text-lg rounded-lg my-6 ">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
