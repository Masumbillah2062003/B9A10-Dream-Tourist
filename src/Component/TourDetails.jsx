import { useLoaderData } from "react-router-dom";

const TourDetails = () => {
  const detailsData = useLoaderData();
  console.log(detailsData);
  const {
    image,
    touristsName,
    countryName,
    location,
    shortDescription,
    averageCost,
    seasonality,
    travelTime,
    totalVisitors,
  } = detailsData;
  return (
    <div className="mx-44 my-20 border-2 border-[#6d4416]">
      <figure className="w-full h-[500px] rounded-md p-5">
        <img src={image} alt="" className="w-full h-[500px] rounded-md" />
      </figure>
      <div>
        <div>
          <div>
            <h1 className="text-5xl mt-5 text-[#6d4416] font-bold p-5">
              {touristsName}
            </h1>
            <h1 className="text-4xl text-[#6d4416] font-semibold p-5 pt-0">
              <span className="font-bold">Price : </span> {averageCost}
            </h1>
          </div>
        </div>
        <hr />
        <p className="text-lg text-[#6d4416] font-semibold p-5">
          <span className="text-xl font-bold">Description :</span>{" "}
          {shortDescription}
        </p>
        <hr />
        <p className="text-lg text-[#6d4416] font-semibold p-5">
          <span className="text-xl font-bold">Country :</span> {countryName}
        </p>
        <hr />
        <p className="text-lg text-[#6d4416] font-semibold p-5">
          <span className="text-xl font-bold">Location :</span> {location}
        </p>
        <hr />
        <p className="text-lg text-[#6d4416] font-semibold p-5">
          <span className="text-xl font-bold">Travel Time :</span> {travelTime}
        </p>
        <hr />
        <p className="text-lg text-[#6d4416] font-semibold p-5">
          <span className="text-xl font-bold">Total Visitors :</span>{" "}
          {totalVisitors}
        </p>
        <hr />
        <p className="text-lg text-[#6d4416] font-semibold p-5">
          <span className="text-xl font-bold">Seasonality :</span> {seasonality}
        </p>
      </div>
    </div>
  );
};

export default TourDetails;
