import { useLoaderData } from "react-router-dom";
import AllTouristCard from "../Component/AllTouristCard";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AllTourists = () => {
  const { loading } = useContext(AuthContext);
  const allData = useLoaderData();
  const [data, setData] = useState(allData);

  if (loading) {
    return (
      <div className="w-full h-[550px] flex justify-center items-center">
        <h1 className="text-5xl font-semibold">
          Loading <span className="loading loading-ball loading-xs"></span>
          <span className="loading loading-ball loading-sm"></span>
          <span className="loading loading-ball loading-md"></span>
          <span className="loading loading-ball loading-lg"></span>
        </h1>
      </div>
    );
  }
//   console.log(data);

  const handleSubmit = (sort) => {
    if (sort == "ascending") {
      const x = [...data].sort((a,b)=> a.averageCost - b.averageCost) 
      setData(x)
      console.log(x)
    }
  };

  return (
    <div>
      <div className="mt-20 mb-20">
        <h1 className="text-5xl font-bold text-[#e8604c] text-center">
          All Tourists Spots
        </h1>
        <div className="text-center mt-14 w-40 mx-auto">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Click
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={() => handleSubmit("ascending")}>A-Z</button>
              </li>
              <li>
                {/* <button onClick={() => handleSubmit("descending")}>Z-A</button> */}
              </li>
            </ul>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-16 gap-8">
          {data.map((toristData) => (
            <AllTouristCard
              key={toristData._id}
              toristData={toristData}
            ></AllTouristCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTourists;
