import { Link, useLoaderData } from "react-router-dom";
import Slider from "../Component/Slider";
import TourCard from "../Component/TourCard";

const Home = () => {
  const tourData = useLoaderData();
  console.log(tourData);

  const someData = tourData.slice(0, 6)
  console.log(someData)
  return (
    <div>
      <Slider></Slider>
      <div className="lg:mt-20 lg:mb-20 mt-10 mb-10">
        <h1 className="lg:text-5xl text-3xl font-bold text-[#6d4416] text-center">
          Tourists Spots
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-16 mt-5 gap-8">
          {someData.map((data) => (
            <TourCard key={data._id} data={data}></TourCard>
          ))}
        </div>
        <div className="w-full flex justify-end items-center mt-7">
        <Link to="/allTourists" className="btn bg-[#6d4416] hover:bg-[#6d4416] text-white text-3xl font-semibold">See more</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
