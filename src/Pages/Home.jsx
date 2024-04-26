import { useLoaderData } from "react-router-dom";
import Slider from "../Component/Slider";
import TourCard from "../Component/TourCard";

const Home = () => {
    const tourData = useLoaderData()
    console.log(tourData)
    return (
        <div>
            <Slider></Slider>
            <TourCard></TourCard>
        </div>
    );
};

export default Home;