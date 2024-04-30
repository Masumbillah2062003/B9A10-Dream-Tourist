
import { Link, useLoaderData } from "react-router-dom";

const Country = () => {
  const country = useLoaderData()

  return (
    <div className="mb-10 px-5">
          <h1 className="text-5xl font-bold text-[#e8604c] text-center mt-10">
          Countries Details
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
        {country.map((c) => (
        <div key={c._id}>
          <div className=" border-2 border-[#e8604c] p-6">
            <h1>
              <span className="text-2xl font-bold">tourists_spot_name :</span>{" "}
              <span className="text-2xl font-bold">{c.touristsName}</span>
            </h1>
            <hr className="mt-3" />
            <h1>
              <span className="text-xl font-bold">country_Name :</span>{" "}
              <span>{c.countryName}</span>
            </h1>
            <hr className="mt-3" />
            <h1>
              <span className="text-xl font-bold"> location :</span>{" "}
              <span>{c.location}</span>
            </h1>
            <hr className="mt-3" />
            <h1>
              <span className="text-xl font-bold">short description :</span>{" "}
              <span>{c.shortDescription}</span>
            </h1>
            <hr className="mt-3" />
            <h1>
              <span className="text-xl font-bold">average_cost :</span>{" "}
              <span>{c.averageCost}</span>
            </h1>
            <hr className="mt-3" />
            <h1>
              <span className="text-xl font-bold">seasonality :</span>{" "}
              <span>{c.seasonality}</span>
            </h1>
            <hr />
            <Link to={`/data/${c._id}`} className="btn bg-[#e8604c] hover:bg-[#e8604c] text-white">View Details</Link>
          </div>
        </div>
      ))}
        </div>
    </div>
  );
};

export default Country;
