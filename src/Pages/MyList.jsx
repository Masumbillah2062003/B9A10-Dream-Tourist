import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { IoMdPricetags } from "react-icons/io";

const MyList = () => {
  const [email, setEmail] = useState({});

  const { user } = useContext(AuthContext);
  const allEmail = useLoaderData();

  useEffect(() => {
    allEmail.map((emailData) => setEmail(emailData));
  }, [allEmail]);

  console.log(email);
  console.log(user);

  return (
    <div>
      {email.userEmail == user.email ? (
        <div>
          <div className=" lg:w-full border rounded-2xl p-6 gap-6">
            <figure className="w-full rounded-2xl flex justify-center items-center">
              <img src={email.image} alt="" />
            </figure>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mt-4">{email.touristsName}</h2>
              <div className="space-y-3">
                <p className="mt-4 text-2xl flex gap-2 text-[#e8604c] items-center">
                  <span className="font-bold">
                    <IoMdPricetags />
                  </span>{" "}
                  {email.averageCost}
                </p>
                <p className="text-xl">
                  <span className="font-bold">Seasonality :</span>{" "}
                  {email.seasonality}
                </p>
                <p className="text-xl">
                  <span className="font-bold">Travel Time :</span>{" "}
                  {email.travelTime}{" "}
                </p>
                <p className="text-xl">
                  {" "}
                  <span className="font-bold">Total Visitors :</span>{" "}
                  {email.totalVisitors}
                </p>
              </div>
            </div>
            <hr className="mt-4 w-full" />
            <div className="mt-4 space-x-5 flex justify-end">
              <Link className="btn bg-[#e8604c] hover:bg-[#e8604c] text-white">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[500px]"> 
         <div className="flex justify-center items-center h-full flex-col">
         <h1 className="text-3xl">You have not Added any card . So, Please add the card...</h1>
          <Link className="btn mt-5 text-xl font-bold bg-[#e8604c] hover:bg-transparent hover:text-[#e8604c] hover:border-[#e8604c] text-white" to="/addTourists">Go To Add Card Page</Link>
         </div>
        </div>
      )}
    </div>
  );
};

export default MyList;
