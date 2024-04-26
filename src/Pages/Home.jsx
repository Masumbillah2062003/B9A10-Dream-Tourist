import { useLoaderData } from "react-router-dom";
import Slider from "../Component/Slider";
import TourCard from "../Component/TourCard";

const Home = () => {
  const tourData = useLoaderData();
  console.log(tourData);
  return (
    <div>
      <Slider></Slider>
      <div className="mt-20 mb-20">
        <h1 className="text-5xl font-bold text-[#6d4416] text-center">
          Tourists Spots
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-16 gap-8">
          {tourData.map((data) => (
            <TourCard key={data._id} data={data}></TourCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
