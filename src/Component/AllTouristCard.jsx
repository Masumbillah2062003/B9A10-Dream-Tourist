import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IoMdPricetags } from "react-icons/io";

const AllTouristCard = ({ toristData }) => {
  console.log(toristData);
  const {
    _id,
    image,
    touristsName,
    averageCost,
    seasonality,
    travelTime,
    totalVisitors,
  } = toristData;

  return (
    <div className=" lg:w-full border rounded-2xl p-6 gap-6">
      <figure className="w-full rounded-2xl flex justify-center items-center">
        <img src={image} alt="" />
      </figure>
      <div className="flex-1">
        <h2 className="text-4xl font-bold mt-4">{touristsName}</h2>
        <div className="space-y-3">
          <p className="mt-4 text-2xl flex gap-2 text-[#e8604c] items-center ">
            <span className="font-bold">
              <IoMdPricetags />
            </span>
            <span className="w-full">
              {averageCost}/
              <span className="text-sm -mr-5 text-gray-700">per person</span>
            </span>
          </p>
          <p className="text-xl">
            <span className="font-bold">Seasonality :</span> {seasonality}
          </p>
          <p className="text-xl">
            <span className="font-bold">Travel Time :</span> {travelTime}{" "}
          </p>
          <p className="text-xl">
            {" "}
            <span className="font-bold">Total Visitors :</span> {totalVisitors}
          </p>
        </div>
      </div>
      <hr className="mt-4 w-full" />
      <div className="mt-4 space-x-5 flex justify-end">
        <Link
          to={`/data/${_id}`}
          className="btn bg-[#e8604c] hover:bg-[#e8604c] text-white"
        >
          View Details
        </Link>
      </div>
    </div>   
  );
};

export default AllTouristCard;

AllTouristCard.propTypes = {
  toristData: PropTypes.object,
};
