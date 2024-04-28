import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const loader = useLoaderData();

  const {
    _id,
    image,
    touristsName,
    countryName,
    location,
    shortDescription,
    averageCost,
    seasonality,
    travelTime,
    totalVisitors,
  } = loader;

  const handleDataSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const touristsName = form.touristsName.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const shortDescription = form.shortDescription.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitors = form.totalVisitors.value;

    const data = {
      image,
      touristsName,
      countryName,
      location,
      shortDescription,
      averageCost,
      seasonality,
      travelTime,
      totalVisitors,
    };
    console.log(data);

    fetch(`http://localhost:5000/assignment/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "user Update successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="container mx-auto px-[135px] py-14">
      <h1 className="text-4xl mb-5 font-bold text-center text-[#e8604c]">
        Update Tourists Spot
      </h1>
      <form onSubmit={handleDataSubmit}>
        <div className="flex gap-8">
          <label className="w-1/2">
            <span className="text-[#e8604c] font-medium text-xl py-2 block">
              Tourists Spot Name
            </span>
            <input
              type="text"
              name="touristsName"
              defaultValue={touristsName}
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#e8604c] rounded-md px-4 py-3 outline-none"
            />
          </label>
          <label className="w-1/2">
            <span className="text-[#e8604c] font-medium text-xl py-2 block">
              Country Name
            </span>
            <input
              type="text"
              name="countryName"
              defaultValue={countryName}
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#e8604c] rounded-md px-4 py-3 outline-none"
            />
          </label>
        </div>
        <div className="flex gap-8">
          <label className="w-1/2">
            <span className="text-[#e8604c] font-medium text-xl py-2 block">
              Short Description
            </span>
            <input
              type="text"
              name="shortDescription"
              defaultValue={shortDescription}
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#e8604c] rounded-md px-4 py-3 outline-none"
            />
          </label>
          <label className="w-1/2">
            <span className="text-[#e8604c] font-medium text-xl py-2 block">
              Average Cost
            </span>
            <input
              type="text"
              name="averageCost"
              defaultValue={averageCost}
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#e8604c] rounded-md px-4 py-3 outline-none"
            />
          </label>
        </div>
        <div className="flex gap-8">
          <label className="w-1/2">
            <span className="text-[#e8604c] font-medium text-xl py-2 block">
              Seasonality
            </span>
            <input
              type="text"
              name="seasonality"
              defaultValue={seasonality}
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#e8604c] rounded-md px-4 py-3 outline-none"
            />
          </label>
          <label className="w-1/2">
            <span className="text-[#e8604c] font-medium text-xl py-2 block">
              Travel Time
            </span>
            <input
              type="text"
              name="travelTime"
              defaultValue={travelTime}
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#e8604c] rounded-md px-4 py-3 outline-none"
            />
          </label>
        </div>
        <div className="flex gap-8">
          <label className="w-1/2">
            <span className="text-[#e8604c] font-medium text-xl py-2 block">
              Total Visitors PerYear
            </span>
            <input
              type="text"
              name="totalVisitors"
              defaultValue={totalVisitors}
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#e8604c] rounded-md px-4 py-3 outline-none"
            />
          </label>
          <label className="w-1/2">
            <span className="text-[#e8604c] font-medium text-xl py-2 block">
              Location
            </span>
            <input
              type="text"
              name="location"
              defaultValue={location}
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#e8604c] rounded-md px-4 py-3 outline-none"
            />
          </label>
        </div>
        <div className="flex gap-8">
          <label className="w-full">
            <span className="text-[#e8604c] font-medium text-xl py-2 block">
              Image URL
            </span>
            <input
              type="text"
              name="image"
              defaultValue={image}
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#e8604c] rounded-md px-4 py-3 outline-none"
            />
          </label>
        </div>
        <div>
          <input
            type="submit"
            value="Update"
            className="w-full btn border-2 bg-[#e8604c] hover:bg-transparent hover:border-[#e8604c] rounded-md font-bold text-xl text-white hover:text-[#e8604c] outline-none mt-5 "
          />
        </div>
      </form>
    </div>
  );
};

export default Update;
