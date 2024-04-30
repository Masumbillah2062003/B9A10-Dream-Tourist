import { Link, useLoaderData } from "react-router-dom";
import Slider from "../Component/Slider";
import TourCard from "../Component/TourCard";
import left from "../assets/images/left.jpg";
import plen from "../assets/images/plean.png";
import map from "../assets/images/location.png";
import offer from "../assets/images/fifteen.png";
import bd from "../assets/images/bd.jpg";
import thiland from "../assets/images/thiland.jpg";
import indroneshiya from "../assets/images/indroneshiya.jpg";
import maleshiya from "../assets/images/maleshiya.jpg";
import vietnam from "../assets/images/vietnam.jpg";
import combodia from "../assets/images/combodia.jpg";

const Home = () => {
  const tourData = useLoaderData();
  console.log(tourData);



  const someData = tourData.slice(0, 6);
  console.log(someData);

  const handlebd = (country) => {
    console.log(country);
    fetch(`https://b9a10-assignment-server.vercel.app/country/${country}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  

  return (
    <div className="p-5">
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

      {/* country */}

      <div>
        <h1 className="lg:text-5xl text-3xl font-bold text-[#e8604c] text-center">
          Countries
        </h1>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to={`/country/Bangladesh`}
            onClick={() => handlebd("Bangladesh")}
            className="w-full block active:scale-95 duration-500"
          >
            <div className="p-5 border-2 border-[#e8604c] rounded-md flex flex-col h-full">
              <figure>
                <img src={bd} alt="" className="w-full  h-52" />
              </figure>
              <div className="mt-3 flex-grow">
                <h1 className="text-3xl text-[#e8604c]">Bangladesh</h1>
                <hr className="mt-2 mb-2" />
                <p className="text-lg">
                  Bangladesh is Located in the north-eastern part of South Asia.
                  The majestic Himalayas stand some distance to the north, while
                  in the south lays the Bay of Bengal.
                </p>
              </div>
            </div>
          </Link>
          <Link
           to={`/country/Thailand`}
            onClick={() => handlebd("Thailand")}
            className="w-full block active:scale-95 duration-500"
          >
            <div className="p-5 border-2 border-[#e8604c] rounded-md flex flex-col h-full">
              <figure>
                <img src={thiland} alt="" className="w-full  h-52" />
              </figure>
              <div className="mt-3 flex-grow">
                <h1 className="text-3xl text-[#e8604c]">Thailand</h1>
                <hr className="mt-2 mb-2" />
                <p className="text-lg">
                  Thailand is a country in Southeast Asia, Its capital city is
                  Bangkok, also known as Krung Thep (City of Angels) in Thai
                </p>
              </div>
            </div>
          </Link>
          <Link
          to={`/country/Indonesia`}
            onClick={() => handlebd("Indonesia")}
            className="w-full block active:scale-95 duration-500"
          >
            <div className="p-5 border-2 border-[#e8604c] rounded-md flex flex-col h-full">
              <figure>
                <img src={indroneshiya} alt="" className="w-full  h-52" />
              </figure>
              <div className="mt-3 flex-grow">
                <h1 className="text-3xl text-[#e8604c]"> Indonesia</h1>
                <hr className="mt-2 mb-2" />
                <p className="text-lg">
                  Indonesia, officially the Republic of Indonesia, is the world
                  largest island country, made up of over 17,000 islands between
                  the Indian and Pacific Oceans
                </p>
              </div>
            </div>
          </Link>
          <Link
          to={`/country/Malaysia`}
            onClick={() => handlebd("Malaysia")}
            className="w-full block active:scale-95 duration-500"
          >
            <div className="p-5 border-2 border-[#e8604c] rounded-md flex flex-col h-full">
              <figure>
                <img src={maleshiya} alt="" className="w-full  h-52" />
              </figure>
              <div className="mt-3 flex-grow">
                <h1 className="text-3xl text-[#e8604c]"> Malaysia</h1>
                <hr className="mt-2 mb-2" />
                <p className="text-lg">
                  Malaysia is a multi-ethnic, multi-religious country in
                  Southeast Asia made up of 13 states and three federal
                  territories
                </p>
              </div>
            </div>
          </Link>
          <Link
          to={`/country/Vietnam`}
            onClick={() => handlebd("Vietnam")}
            className="w-full block active:scale-95 duration-500"
          >
            <div className="p-5 border-2 border-[#e8604c] rounded-md flex flex-col h-full">
              <figure>
                <img src={vietnam} alt="" className="w-full  h-52" />
              </figure>
              <div className="mt-3 flex-grow">
                <h1 className="text-3xl text-[#e8604c]">Vietnam</h1>
                <hr className="mt-2 mb-2" />
                <p className="text-lg">
                  Vietnam, officially the Socialist Republic of Vietnam (SRV),
                  is a country in Southeast Asia thats about 331,000 square
                  kilometers (128,000 sq mi) in area and has a population of
                  over 100 million.
                </p>
              </div>
            </div>
          </Link>
          <Link
          to={`/country/Cambodia`}
            onClick={() => handlebd("Cambodia")}
            className="w-full block active:scale-95 duration-500"
          >
            <div className="p-5 border-2 border-[#e8604c] rounded-md flex flex-col h-full">
              <figure>
                <img src={combodia} alt="" className="w-full  h-52" />
              </figure>
              <div className="mt-3 flex-grow">
                <h1 className="text-3xl text-[#e8604c]">Cambodia</h1>
                <hr className="mt-2 mb-2" />
                <p className="text-lg">
                  Cambodia, officially the Kingdom of Cambodia, is a country in
                  Southeast Asia with a land area of 69,898 square miles
                  (181,035 square kilometers).
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* extra section */}

      <div className="lg:flex bg-[#e8614c] lg:p-20 p-4 mt-20">
        <figure className="lg:w-1/2 h-[300px] flex justify-center items-center">
          <img src={offer} alt="" className="w-[200px] lg:w-[400px]" />
        </figure>
        <div className="lg:w-1/2 flex pb-5 justify-center flex-col text-white space-y-2 lg:space-x-0">
          <h1 className="lg:text-5xl text-3xl font-bold">
            Last Minute Offer For You
          </h1>
          <h2 className="lg:text-3xl text-xl font-semibold lg:mt-10">
            Offers of all tourist places in Bangladesh
          </h2>
          <p className="lg:text-xl text-base font-medium text-[#dcdbdbfa] lg:mt-5">
            Tourism offers a wide range of benefits, including economic benefits
            for countries attracting many visitors due to the money they spend
            not only on their actual stay but also on local businesses. It also
            provides many jobs for people working in the transport and
            hospitality industry, among others.
          </p>
          <button className="btn text-xl w-60 font-bold bg-transparent hover:bg-transparent border-white text-white mt-5">
            View More
          </button>
        </div>
      </div>

      <div className="w-full flex lg:flex-row flex-col lg:h-[763px] mt-24 mb-20">
        <div className="lg:w-1/2">
          <img src={left} className="w-full lg:h-full h-[350px]" />
        </div>
        <div className="lg:w-1/2 relative bg-[#302e41]">
          <div className=" flex items-center justify-start h-full">
            <div className="text-white px-10 py-10">
              <p className="text-[#e8604c] lg:text-3xl text-xl md:text-xl">
                Our benefit lists
              </p>
              <h1 className="font-semibold lg:text-4xl text-2xl md:text-3xl">
                Why Choose Travel Tour
              </h1>
              <p className="lg:mt-16 mt-8 text-xl md:text-base text-[#e8604c]">
                There are many variations of passages of Lorem Ipsum is simply
                free text available in the market for you, but the majority have
                suffered alteration in some form.
              </p>
              <div className="flex items-center lg:flex-row md:flex-row flex-col mt-5 gap-6">
                <figure>
                  <img src={plen} alt="" className="lg:w-56 md:w-56 w-32" />
                </figure>
                <div>
                  <p className="text-2xl font-bold">
                    Professional and Certified
                  </p>
                  <p className="text-base text-[#e8604c] mt-5">
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
                  <p className="text-2xl font-bold">
                    Get Instant Tour Bookings
                  </p>
                  <p className="text-base text-[#e8604c] mt-5">
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
