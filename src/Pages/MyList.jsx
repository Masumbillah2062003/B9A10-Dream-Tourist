import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import { IoMdPricetags } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const { user, loading } = useContext(AuthContext);
  const [tour, setTour] = useState([]);
  


  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b9a10-assignment-server.vercel.app/assignment/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // console.log(data)
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              console.log(tour)
              const remaining = tour.filter((t) => t._id !== _id);
              console.log(remaining)
              setTour(remaining);
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(`https://b9a10-assignment-server.vercel.app/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTour(data);
      });
  }, [user]);

  if (loading) {
    return (
      <div className="w-full h-[550px] flex justify-center items-center">
        <h1 className="text-5xl font-semibold">
          Loading <span className="loading loading-ball loading-xs"></span>
          <span className="loading loading-ball loading-sm"></span>
          <span className="loading loading-ball loading-md"></span>
          <span className="loading loading-ball loading-lg"></span>
        </h1>
      </div>
    );
  }

  return (
    <div className="py-16">
        <h1 className="text-4xl mb-16 font-bold text-center text-[#e8604c]">My List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tour.map((loadedData) => (
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
              <hr className="mt-3" />
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
                  <Link
                    to={`/data/${loadedData._id}`}
                    className="btn bg-[#0000009b] hover:bg-transparent hover:border-[black] text-[white] hover:text-[black]"
                  >
                    View
                  </Link>
                  <Link
                    to={`/update/${loadedData._id}`}
                    className="btn bg-[#e8604c] hover:bg-transparent hover:border-[#e8604c] text-[white] hover:text-[#e8604c]"
                  >
                    Update
                  </Link>
                  <Link
                    onClick={() => handleDelete(loadedData._id)}
                    className="btn bg-[white] hover:bg-transparent border-[black] text-[black] hover:text-[black]"
                  >
                    Delete
                  </Link>
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
