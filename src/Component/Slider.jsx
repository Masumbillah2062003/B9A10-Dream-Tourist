import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import martin from "../assets/images/martin.jpg";
import bangkok from "../assets/images/bangkok.jpg";
import malaysia from "../assets/images/Malaysia.jpg";
import { CACHE_SIZE_UNLIMITED } from "firebase/firestore";

const Slider = () => {
  const [text] = useTypewriter({
    words: ["St. Martins Island ..."],
    loop: CACHE_SIZE_UNLIMITED,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

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
          <SwiperSlide className="h-[550px]  relative">
            <img src={martin} alt="" className="w-full h-[550px]" />
            <div className="absolute top-0 flex justify-around w-full h-full bg-[#313041a0]">
              <div className="flex flex-col justify-center items-center">
                <div className=" p-6 rounded-lg text-center ">
                  <h1 className="text-[#e8604c] text-6xl font-bold">
                    <span>{text}</span>
                    <Cursor cursorColor="tometo" />
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
          <SwiperSlide className="h-[550px]  relative">
            <img src={bangkok} alt="" className="w-full h-[550px]" />
            <div className="absolute top-0 flex justify-around w-full h-full bg-[#313041a0]">
              <div className="flex flex-col justify-center items-start">
                <div className=" p-6 rounded-lg ">
                  <h1 className="text-[#e8604c] text-6xl font-bold">
                    Bangkok, Thailand
                  </h1>
                  <p className="w-[700px] text-white text-xl mt-3">
                    Bangkok is renowned for its vibrant street life, rich
                    cultural heritage, and majestic temples like the Grand
                    Palace and Wat Arun. It is also famous for its bustling
                    markets, delectable cuisine, and lively nightlife. Why is
                    Bangkok so popular? Bangkok`s popularity stems from its
                    diverse attractions and experiences
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[550px]  relative">
            <img src={malaysia} alt="" className="w-full h-[550px]" />
            <div className="absolute top-0 flex justify-around w-full h-full bg-[#313041a0]">
              <div className="flex flex-col justify-center items-start">
                <div className=" p-6 rounded-lg ">
                  <h1 className="text-[#e8604c] text-6xl font-bold">
                    Kuala Lumpur, Malaysia
                  </h1>
                  <p className="w-[700px] text-white text-xl mt-3">
                    The capital of Malaysia is widely recognized for numerous
                    landmarks, including Petronas Twin Towers (twin skyscrapers
                    with a sky bridge and observation deck), the Petaling Street
                    flea market, and Batu Caves, which is over
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
          <div className="carousel-item  relative w-full">
            <img src={martin} className="w-full" />
            <div className="absolute top-0 flex justify-around w-full h-full bg-[#313041a0]">
              <div className="mt-10 -ml-24">
                <div className=" rounded-lg text-center">
                  <h1 className="text-[#e8604c] text-xl md:text-4xl font-bold">
                  <span>{text}</span>
                    <Cursor cursorColor="tometo" />
                  </h1>
                  <p className="w-[200px] md:w-[600px] text-white md:text-start text-[10px] md:text-2xl mt-3">
                    St. Martin is generally known as “Narikel Zinzira” in
                    Bengali, means Coconut Island and this is the only coral
                    reef island in Bangladesh.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-[12rem] right-5 top-[80%]">
              <a
                href="#slide3"
                className="btn bg-[#0000009b] hover:bg-[#0000009b] text-white"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn bg-[#0000009b] hover:bg-[#0000009b] text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div className="carousel-item  relative w-full">
            <img src={bangkok} className="w-full" />
            <div className="absolute top-0 flex justify-around w-full h-full bg-[#313041a0]">
              <div className="mt-10 -ml-24">
                <div className=" rounded-lg text-center">
                  <h1 className="text-[#e8604c] text-xl md:text-4xl font-bold">
                  Bangkok, Thiland
                  </h1>
                  <p className="w-[200px] md:w-[600px] text-white md:text-start text-[10px] md:text-2xl mt-3">
                    Bangkok is renowned for its vibrant street life, rich
                    cultural heritage, and majestic temples like the Grand
                    Palace and Wat Arun.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-[12rem] right-5 top-[80%]">
              <a
                href="#slide1"
                className="btn bg-[#0000009b] hover:bg-[#0000009b] text-white "
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn bg-[#0000009b] hover:bg-[#0000009b] text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div className="carousel-item  relative w-full">
            <img src={malaysia} className="w-full" />
            <div className="absolute top-0 flex justify-around w-full h-full bg-[#313041a0]">
              <div className="mt-10 -ml-24">
                <div className=" rounded-lg text-center">
                  <h1 className="text-[#e8604c] text-xl md:text-4xl font-bold">
                    Kuala Lumpur, Malaysia
                  </h1>
                  <p className="w-[200px] md:w-[600px] text-white md:text-start text-[10px] md:text-2xl mt-3">
                    The capital of Malaysia is widely recognized for numerous
                    landmarks, including Petronas Twin Towers and Batu Caves.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-[12rem] right-5 top-[80%]">
              <a
                href="#slide2"
                className="btn bg-[#0000009b] hover:bg-[#0000009b] text-white "
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn bg-[#0000009b] hover:bg-[#0000009b] text-white "
              >
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
