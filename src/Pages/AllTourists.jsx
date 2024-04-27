import { useLoaderData } from "react-router-dom";
import AllTouristCard from "../Component/AllTouristCard";


const AllTourists = () => {
  const allData = useLoaderData();
  console.log(allData);


  return (
    <div>
      <div className="mt-20 mb-20">
        <h1 className="text-5xl font-bold text-[#6d4416] text-center">
          All Tourists Spots
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-16 gap-8">
          {allData.map((data) => (
            <AllTouristCard key={data._id} data={data}></AllTouristCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTourists;
