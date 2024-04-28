import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import { IoMdPricetags } from "react-icons/io";
import { Link } from "react-router-dom";
// import { IoMdPricetags } from "react-icons/io";
// import { Link } from "react-router-dom";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [match, setMatch] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMatch(data);
      });
  }, [user]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {match.map((loadedData) => (
          <div
            key={loadedData._id}
            className=" lg:w-full border rounded-2xl p-6 gap-6"
          >
            <figure className="w-full rounded-2xl flex justify-center items-center">
              <img src={loadedData.image} alt="" />
            </figure>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mt-4">
                {loadedData.touristsName}
              </h2>
              <hr className="mt-3"/>
              <div className="flex justify-between items-center gap-10">
              <div className="space-y-3">
                <p className="mt-4 text-2xl flex gap-2 text-[#e8604c] items-center">
                  <span className="font-bold">
                    <IoMdPricetags />
                  </span>{" "}
                  {loadedData.averageCost}
                </p>
                <p className="text-xl">
                  <span className="font-bold">Country :</span>{" "}
                  {loadedData.countryName}
                </p>
                <p className="text-xl">
                  {" "}
                  <span className="font-bold">Location :</span>{" "}
                  {loadedData.location}
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <Link to={`/data/${loadedData._id}`} className="btn bg-[#0000009b] hover:bg-transparent hover:border-[black] text-[white] hover:text-[black]">View</Link>
                <Link to={`/update/${loadedData._id}`} className="btn bg-[#e8604c] hover:bg-transparent hover:border-[#e8604c] text-[white] hover:text-[#e8604c]">Update</Link>
                <Link className="btn bg-[white] hover:bg-transparent border-[black] text-[black] hover:text-[black]">Delete</Link>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;
