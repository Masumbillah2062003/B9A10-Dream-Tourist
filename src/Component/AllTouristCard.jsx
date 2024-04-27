import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AllTouristCard = ({ data }) => {
  console.log(data);
  const {
    _id,
    image,
    touristsName,
    averageCost,
    seasonality,
    travelTime,
    totalVisitors,
  } = data;
  return (
    <div className=" lg:w-full border border-[#13131326] rounded-2xl p-6 gap-6">
      <figure className="w-full bg-[#1313130D] rounded-2xl flex justify-center items-center">
        <img src={image} alt="" />
      </figure>
      <div className="flex-1">
        <h2 className="text-4xl font-bold mt-4">{touristsName}</h2>
        <div className="space-y-3">
        <p className="mt-4 text-2xl"><span className="font-bold">Price :</span> {averageCost}</p>
          <p  className="text-xl"><span className="font-bold">Seasonality :</span> {seasonality}</p>
          <p className="text-xl"><span className="font-bold">Travel Time :</span> {travelTime} </p>
          <p className="text-xl"> <span className="font-bold">Total Visitors :</span> {totalVisitors}</p>
        </div>
        </div>
        <hr className="mt-4 w-full" />
        <div className="mt-4 space-x-5 flex justify-end">
            <Link to={`/data/${_id}`} className="btn bg-[#6d4416] hover:bg-[#6d4416] text-white">View Details</Link>
        </div>
      </div>

  );
};

export default AllTouristCard;


AllTouristCard.propTypes = {
    data: PropTypes.object,
  };
  