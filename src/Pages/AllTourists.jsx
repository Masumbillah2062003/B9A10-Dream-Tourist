import { useLoaderData } from "react-router-dom";
import AllTouristCard from "../Component/AllTouristCard";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AllTourists = () => {
  const { loading } = useContext(AuthContext);
  const allData = useLoaderData();
  console.log(allData);

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


  return (
    <div>
      <div className="mt-20 mb-20">
        <h1 className="text-5xl font-bold text-[#e8604c] text-center">
          All Tourists Spots
        </h1>
        {/* <div className="text-center mt-14">
          <form onSubmit={handleCost}>
            <select
              name="sort"
              className="text-2xl font-bold py-2 text-[#e8604c] 
             px-5 border-2 outline-none border-[#e8604c]"
            >
              <option className="text-xl" value="averageCost">
                Average Cost
              </option>
            </select>
            <input
              type="submit"
              value="Sort"
              className="text-2xl font-bold py-[10px] text-[white] 
             px-5 border-2 outline-none bg-[#e8604c] "
            />
          </form>
        </div> */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-16 gap-8">
          {allData.map((toristData) => (
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
