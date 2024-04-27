import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import martin from "../assets/images/martin.jpg";
import coxs from "../assets/images/coxs.jpg";
import sundor from "../assets/images/sundor.jpg";

const Slider = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="h-[550px] relative">
            <img src={martin} alt="" className="w-full h-[550px]" />
            <div className="absolute top-0 flex justify-around w-full h-full">
              <div className="flex flex-col justify-center items-center">
                <div className="backdrop-blur-sm p-6 rounded-lg text-center">
                  <h1 className="text-[#6d4416] text-6xl font-bold">
                    St. Martins Island
                  </h1>
                  <p className="w-[700px] text-white text-xl mt-3">
                    St. Martin is generally known as “Narikel Zinzira” in
                    Bengali, means Coconut Island and this is the only coral
                    reef island in Bangladesh. It is a small island in the north
                    eastern part of the Bay of Bengal, created the southernmost
                    part of our country.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[550px] relative">
            <img src={coxs} alt="" className="w-full h-[550px]" />
            <div className="absolute top-0 flex justify-around w-full h-full">
              <div className="flex flex-col justify-center items-start">
                <div className="backdrop-blur-sm p-6 rounded-lg ">
                  <h1 className="text-[#6d4416] text-6xl font-bold">
                    Coxs Bazar
                  </h1>
                  <p className="w-[700px] text-white text-xl mt-3">
                  Cox`s Bazar is a city, fishing port, tourism center, and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world. It is located 150 km (93 mi) south of the divisional headquarter city of Chittagong.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[550px] relative">
            <img src={sundor} alt="" className="w-full h-[550px]" />
            <div className="absolute top-0 flex justify-around w-full h-full">
              <div className="flex flex-col justify-center items-start">
                <div className="backdrop-blur-sm p-6 rounded-lg ">
                <h1 className="text-[#6d4416] text-6xl font-bold">
                Bandarban
                  </h1>
                  <p className="w-[700px] text-white text-xl mt-3">
                  Bandarban Hill District was once called Bohmong Htaung since the Arakanese rule. Once Bohmong Htaung was ruled by Bohmong Rajas who were the subordinates to the Arakanese kings. Ancestors of the present Bohmong dynasty were the successor of the Pegu King of Burma under the Arakans rule in Chittagong.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
      <div className="lg:hidden block">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={martin} className="w-full" />
            <div className="absolute top-0 flex justify-around w-full h-full">
              <div className="mt-10 -ml-24">
                <div className="backdrop-blur-sm rounded-lg text-center">
                  <h1 className="text-[#6d4416] text-base font-bold">
                    St. Martins Island
                  </h1>
                  <p className="w-[200px] text-white text-[10px] mt-3">
                    St. Martin is generally known as “Narikel Zinzira” in
                    Bengali, means Coconut Island and this is the only coral
                    reef island in Bangladesh. 
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn bg-transparent hover:bg-transparent text-white">
                ❮
              </a>
              <a href="#slide2" className="btn bg-transparent hover:bg-transparent text-white">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={coxs} className="w-full" />
            <div className="absolute top-0 flex justify-around w-full h-full">
              <div className="mt-10 -ml-24">
                <div className="backdrop-blur-sm rounded-lg text-center">
                  <h1 className="text-[#6d4416] text-base font-bold">
                  Cox`s Bazar
                  </h1>
                  <p className="w-[200px] text-white text-[10px] mt-3">
                  Cox`s Bazar is a city, fishing port, tourism center, and district headquarters in southeastern Bangladesh. 
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn bg-transparent hover:bg-transparent text-white ">
                ❮
              </a>
              <a href="#slide3" className="btn bg-transparent hover:bg-transparent text-white">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={sundor} className="w-full" />
            <div className="absolute top-0 flex justify-around w-full h-full">
              <div className="mt-10 -ml-24">
                <div className="backdrop-blur-sm rounded-lg text-center">
                  <h1 className="text-[#6d4416] text-base font-bold">
                  Bandarban
                  </h1>
                  <p className="w-[200px] text-white text-[10px] mt-3">
                  Bandarban Hill District was once called Bohmong Htaung since the Arakanese rule. 
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn bg-transparent hover:bg-transparent text-white ">
                ❮
              </a>
              <a href="#slide1" className="btn bg-transparent hover:bg-transparent text-white ">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
