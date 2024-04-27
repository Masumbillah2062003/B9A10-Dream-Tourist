import Swal from "sweetalert2";

const AddTourists = () => {
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
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;

    const allData = {
      image,
      touristsName,
      countryName,
      location,
      shortDescription,
      averageCost,
      seasonality,
      travelTime,
      totalVisitors,
      userEmail,
      userName,
    };
    console.log(allData);

    fetch("http://localhost:5000/assignment", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(allData)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'user Added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
      });
  };
  return (
    <div className="container mx-auto px-[135px] py-14">
      <h1 className="text-4xl mb-5 font-bold text-center text-[#6d4416]">
        Add Tourists Spot
      </h1>
      <form onSubmit={handleDataSubmit}>
        <div className="flex gap-8">
          <label className="w-1/2">
          <span className="text-[#6d4416] font-medium text-xl py-2 block">
              User Name
            </span>
            <input
              type="text"
              name="userName"
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#6d4416] rounded-md px-4 py-3 outline-none"
            />
          </label>
          <label className="w-1/2">
            <span className="text-[#6d4416] font-medium text-xl py-2 block">
              User Email
            </span>
            <input
              type="text"
              name="userEmail"
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#6d4416] rounded-md px-4 py-3 outline-none"
            />
          </label>
          
        </div>
        <div className="flex gap-8">
        <label className="w-1/2">
            <span className="text-[#6d4416] font-medium text-xl py-2 block">
              Tourists Spot Name
            </span>
            <input
              type="text"
              name="touristsName"
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#6d4416] rounded-md px-4 py-3 outline-none"
            />
          </label>
          <label className="w-1/2">
            <span className="text-[#6d4416] font-medium text-xl py-2 block">
              Country Name
            </span>
            <input
              type="text"
              name="countryName"
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#6d4416] rounded-md px-4 py-3 outline-none"
            />
          </label>
          
        </div>
        <div className="flex gap-8">
          <label className="w-1/2">
            <span className="text-[#6d4416] font-medium text-xl py-2 block">
              Short Description
            </span>
            <input
              type="text"
              name="shortDescription"
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#6d4416] rounded-md px-4 py-3 outline-none"
            />
          </label>
          <label className="w-1/2">
            <span className="text-[#6d4416] font-medium text-xl py-2 block">
              Average Cost
            </span>
            <input
              type="text"
              name="averageCost"
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#6d4416] rounded-md px-4 py-3 outline-none"
            />
          </label>
        </div>
        <div className="flex gap-8">
          <label className="w-1/2">
            <span className="text-[#6d4416] font-medium text-xl py-2 block">
              Seasonality
            </span>
            <input
              type="text"
              name="seasonality"
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#6d4416] rounded-md px-4 py-3 outline-none"
            />
          </label>
          <label className="w-1/2">
            <span className="text-[#6d4416] font-medium text-xl py-2 block">
              Travel Time
            </span>
            <input
              type="text"
              name="travelTime"
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#6d4416] rounded-md px-4 py-3 outline-none"
            />
          </label>
        </div>
        <div className="flex gap-8">
          <label className="w-1/2">
            <span className="text-[#6d4416] font-medium text-xl py-2 block">
              Total Visitors PerYear
            </span>
            <input
              type="text"
              name="totalVisitors"
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#6d4416] rounded-md px-4 py-3 outline-none"
            />
          </label>
          <label className="w-1/2">
            <span className="text-[#6d4416] font-medium text-xl py-2 block">
              Location
            </span>
            <input
              type="text"
              name="location"
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#6d4416] rounded-md px-4 py-3 outline-none"
            />
          </label>
        </div>
        <div className="flex gap-8">
            
          <label className="w-full">
          <span className="text-[#6d4416] font-medium text-xl py-2 block">
              Image URL
            </span>
            <input
              type="text"
              name="image"
              placeholder="Please Enter Your Name"
              className="w-full border-2 border-[#6d4416] rounded-md px-4 py-3 outline-none"
            />
          </label>
        </div>
        <div>
          <input
            type="submit"
            value="Add"
            className="w-full btn border-2 bg-[#6d4416] hover:bg-transparent hover:border-[#6d4416] rounded-md font-bold text-xl text-white hover:text-[#6d4416] outline-none mt-5 "
          />
        </div>
      </form>
    </div>
  );
};

export default AddTourists;
