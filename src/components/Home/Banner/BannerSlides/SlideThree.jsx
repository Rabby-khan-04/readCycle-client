import "./Slides.css";
import SlideHeading from "../../../Shared/SlideHeading/SlideHeading";
import Description from "../../../Shared/Description/Description";
import bookSwapImg from "../../../../assets/image/home/slider-three-banner.png";
import PrimaryButton from "../../../Shared/Buttons/PrimaryButton";
import SecondaryButton from "../../../Shared/Buttons/SecondaryButton";
import { BiSolidBookOpen } from "react-icons/bi";
import { AiOutlineSwap } from "react-icons/ai";

const SlideThree = () => {
  return (
    <section className="bg-[#f0f5f9]">
      <div className="slide__container">
        {/* Slider Left Starts*/}
        <div className="space-y-5 self-center">
          {/* Slider Title */}
          <SlideHeading text="Swap Books Effortlessly" />
          {/* Sub Title */}
          <Description
            text="Our platform makes book swapping a breeze. Browse through a diverse collection of books, connect with fellow readers, and exchange your favorite reads. It's a simple, fun, and sustainable way to enjoy new stories."
            width="max-w-4xl"
          />

          {/* CAT */}
          <div className="flex items-center gap-5">
            <PrimaryButton
              url="/"
              text="Explore Books"
              Icon={BiSolidBookOpen}
            />

            <SecondaryButton
              url="/"
              text="Start Swapping"
              Icon={AiOutlineSwap}
            />
          </div>
        </div>
        {/* Slider Left Ends*/}

        {/* Slider Right Starts */}
        <div className="self-center justify-self-center">
          <div className="max-w-2xl">
            <img src={bookSwapImg} alt="" />
          </div>
        </div>
        {/* Slider Right Ends */}
      </div>
    </section>
  );
};

export default SlideThree;
