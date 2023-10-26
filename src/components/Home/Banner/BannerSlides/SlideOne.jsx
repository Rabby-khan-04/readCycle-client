import "./Slides.css";
import heroImg from "../../../../assets/image/home/banner_hero.png";
import PrimaryButton from "../../../Shared/Buttons/PrimaryButton";
import { BiSolidBookOpen } from "react-icons/bi";
import { BsArrowRight, BsPlayCircle } from "react-icons/bs";
import SecondaryButton from "../../../Shared/Buttons/SecondaryButton";
import userOne from "../../../../assets/image/home/user-1.jpg";
import userTwo from "../../../../assets/image/home/user-2.jpg";
import userThree from "../../../../assets/image/home/user-3.jpg";
import userFour from "../../../../assets/image/home/user-4.jpg";
import { Link } from "react-router-dom";
import Dot from "../../../Shared/Dot/Dot";

const SlideOne = () => {
  return (
    <section className="">
      <div className="py-[50px] pl-[50px] pr-5 grid grid-cols-2 gap-[60px]">
        {/* Slider Left Starts*/}
        <div className="space-y-5 self-center">
          {/* Slider Title */}
          <h1 className="font-oranienbaum text-[7vw] leading-[1.1]">
            Discover a World of Books, Swap Stories
          </h1>

          {/* Slider Text */}
          <p className="text-grayText font-poppins text-base max-w-3xl">
            Welcome to Read Cycle, where book lovers connect to swap, share, and
            explore new stories. Unlock the joy of reading and build a community
            of fellow book enthusiasts.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-5">
            <PrimaryButton
              url="/"
              text="Explore Books"
              Icon={BiSolidBookOpen}
            />

            <SecondaryButton url="/" text="Get Started" Icon={BsPlayCircle} />
          </div>
        </div>
        {/* Slider Left Ends*/}

        {/* Slider Right Starts*/}
        <div className="flex justify-center items-center relative">
          <img src={heroImg} className="w-[500px]" alt="" />

          {/* Featured Card Starts*/}
          <div className="featured__box absolute bg-white w-[380px] p-5 rounded-md bottom-0 left-0">
            <div className="flex justify-between items-center mb-1">
              {/* Title */}
              <h3 className="font-oranienbaum text-2xl">Book Swap Perks!</h3>
              {/* Green Dot */}
              <Dot color="#2bae6d" />
            </div>
            {/* Sub Title */}
            <p className="text-grayText font-poppins">
              Swap stories, not just books!
            </p>
            <div className="flex items-center justify-between mt-5">
              {/* User Image Container */}
              <div className="flex items-center">
                <img
                  src={userOne}
                  className="w-10 h-10 object-cover object-center rounded-md"
                  alt=""
                />
                <img
                  src={userTwo}
                  className="w-10 h-10 object-cover object-center rounded-md"
                  alt=""
                />
                <img
                  src={userThree}
                  className="w-10 h-10 object-cover object-center rounded-md"
                  alt=""
                />
                <img
                  src={userFour}
                  className="w-10 h-10 object-cover object-center rounded-md"
                  alt=""
                />
              </div>
              <Link
                to="/"
                className="group flex items-center justify-center rounded-md bg-secondary p-3 overflow-hidden relative h-10 w-10 text-2xl"
              >
                <BsArrowRight className="absolute top-0 left-0 right-0 bottom-0 m-auto translate-x-0 group-hover:translate-x-10 transition-transform duration-300" />
                <BsArrowRight className="absolute top-0 left-0 right-0 bottom-0 m-auto -translate-x-10 group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          {/* Featured Card Ends*/}
        </div>
        {/* Slider Right End*/}
      </div>
    </section>
  );
};

export default SlideOne;
