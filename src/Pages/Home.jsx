import { Link, useLoaderData } from "react-router-dom";
import Slider from "../Component/Slider";
import TourCard from "../Component/TourCard";
import left from "../assets/images/left.jpg";
import plen from "../assets/images/plean.png";
import map from "../assets/images/location.png";
import offer from '../assets/images/fifteen.png'

const Home = () => {
  const tourData = useLoaderData();
  console.log(tourData);

  const someData = tourData.slice(0, 6);
  console.log(someData);
  return (
    <div>
      <Slider></Slider>
      <div className="lg:mt-20 lg:mb-20 mt-10 mb-10">
        <h1 className="lg:text-5xl text-3xl font-bold text-[#e8604c] text-center">
          Tourists Spots
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-16 mt-5 gap-8">
          {someData.map((data) => (
            <TourCard key={data._id} data={data}></TourCard>
          ))}
        </div>
        <div className="w-full flex justify-end items-center mt-7">
          <Link
            to="/allTourists"
            className="btn bg-[#e8604c] hover:bg-[#e8604c] text-white text-3xl font-semibold"
          >
            See more
          </Link>
        </div>
      </div>

      {/* extra section */}


      <div className="lg:flex bg-[#e8614c] lg:p-20 p-4">
        <figure className="lg:w-1/2 h-[300px] flex justify-center items-center">
          <img src={offer} alt="" className="w-[200px]" />
        </figure>
        <div className="lg:w-1/2 flex pb-5 justify-center flex-col text-white space-y-2 lg:space-x-0">
          <h1 className="lg:text-5xl text-3xl font-bold">Last Minute Offer For You</h1>
          <h2 className="lg:text-3xl text-xl font-semibold lg:mt-10">Offers of all tourist places in Bangladesh</h2>
          <p className="lg:text-xl text-base font-medium text-[#dcdbdbfa] lg:mt-5">Tourism offers a wide range of benefits, including economic benefits for countries attracting many visitors due to the money they spend not only on their actual stay but also on local businesses. It also provides many jobs for people working in the transport and hospitality industry, among others.</p>
          <button className="btn text-xl w-60 font-bold bg-transparent hover:bg-transparent border-white text-white mt-5">View More</button>
        </div>
      </div>



      <div className="w-full flex lg:flex-row flex-col lg:h-[763px] mt-24 mb-20">
        <div className="lg:w-1/2">
          <img src={left} className="w-full lg:h-full h-[350px]" />
        </div>
        <div className="lg:w-1/2 relative bg-[#302e41]">
          <div className=" flex items-center justify-start h-full">
            <div className="text-white px-10 py-10">
              <p className="text-[#e8604c] lg:text-3xl text-xl md:text-xl">Our benefit lists</p>
              <h1 className="font-semibold lg:text-4xl text-2xl md:text-3xl">Why Choose Travel Tour</h1>
              <p className="lg:mt-16 mt-8 text-xl md:text-base text-gray-400">
                There are many variations of passages of Lorem Ipsum is simply
                free text available in the market for you, but the majority have
                suffered alteration in some form.
              </p>
              <div className="flex items-center lg:flex-row md:flex-row flex-col mt-5 gap-6">
                <figure>
                  <img src={plen} alt=""  className="lg:w-56 md:w-56 w-32"/>
                </figure>
                <div>
                  <p className="text-2xl font-bold">Professional and Certified</p>
                  <p className="text-base text-gray-400 mt-5">
                    Air pressure is lower at higher altitudes, which means your
                    body takes in less oxygen. Airlines “pressurize” the air in
                    the cabin, but not to sea-level pressures, so theres still
                    less oxygen getting to your body when you fly, which can
                    make you feel drained or even short of breath
                  </p>
                </div>
              </div>
              <div className="flex items-center lg:flex-row md:flex-row flex-col mt-5 gap-6">
                <figure>
                  <img src={map} alt="" className="lg:w-56 md:w-56 w-32" />
                </figure>
                <div>
                  <p className="text-2xl font-bold">Get Instant Tour Bookings</p>
                  <p className="text-base text-gray-400 mt-5">
                    Tours with the ability to be instantly booked on TourRadar
                    have much higher conversion rates than those that require
                    manual confirmation. This simply means that the tours are
                    automatically confirmed when the traveler books.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
