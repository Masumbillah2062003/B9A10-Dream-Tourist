import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoMdPricetags } from "react-icons/io";
const TourCard = ({ data }) => {
  const { _id, image, touristsName, countryName, location, averageCost } = data;

  return (
    <div className="lg:h-[500px] h-[400px] w-full relative">
      <figure className=" w-full lg:h-[500px] h-[400px] overflow-hidden ">
        <div className="h-full w-full hover:scale-105 duration-500">
        <img
          src={image}
          alt=""
          className="h-full w-full "
        />
      <div className="absolute top-0 lg:h-[500px] h-[400px] w-full hover:bg-[#0000004a] hover:duration-500">
      </div>
        </div>
      </figure>
      <h3 className="absolute top-0 text-white font-bold text-2xl p-5 bg-[#e8604c] rounded-br-xl flex items-center justify-center gap-3">
      <IoMdPricetags /> <span className="text-white">{averageCost}</span>
      </h3>
      <div className="absolute bottom-0 p-5  lg:backdrop-blur-sm">
        <h2 className="text-white  text-lg">
          <span className="font-bold text-[white]">Name :</span> {touristsName}
        </h2>
        <h2 className="text-white  text-lg">
          <span className="font-bold text-[white]">Country :</span> {countryName}
        </h2>
        <div className="w-full flex lg:justify-between flex-col lg:flex-row">
          <h3 className="text-white  text-lg">
            <span className="font-bold text-[white]">Location :</span> {location}
          </h3>
          <Link
            to={`/data/${_id}`}
            className="btn mt-4 lg:mt-0 bg-[#e8604c] hover:bg-transparent  text-white border-2"
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
