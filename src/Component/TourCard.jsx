import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const TourCard = ({ data }) => {
  const { _id, image, touristsName, countryName, location, averageCost } = data;

  return (
    <div className="lg:w-[500px] lg:h-[500px] h-[400px] w-full relative">
      <figure className="lg:w-[500px] w-full lg:h-[500px] h-[400px] overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full w-full hover:scale-105 duration-200"
        />
      </figure>
      <h3 className="absolute top-0 text-white font-bold text-2xl p-5">
        Price : {averageCost}
      </h3>
      <div className="absolute bottom-0 p-5  lg:backdrop-blur-sm">
        <h2 className="text-white  text-lg">
          <span className="font-bold">Name :</span> {touristsName}
        </h2>
        <h2 className="text-white  text-lg">
          <span className="font-bold">Country :</span> {countryName}
        </h2>
        <div className="w-full flex lg:justify-between flex-col lg:flex-row">
          <h3 className="text-white  text-lg">
            <span className="font-bold">Location :</span> {location}
          </h3>
          <Link
            to={`/data/${_id}`}
            className="btn mt-4 lg:mt-0 bg-[#6d4416] hover:bg-transparent  text-white border-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

TourCard.propTypes = {
  data: PropTypes.object,
};
