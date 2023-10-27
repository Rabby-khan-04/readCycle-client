import "./Slides.css";
import SlideHeading from "../../../Shared/SlideHeading/SlideHeading";
import Description from "../../../Shared/Description/Description";
import readersGroup from "../../../../assets/image/home/readers-group.png";
import PrimaryButton from "../../../Shared/Buttons/PrimaryButton";
import SecondaryButton from "../../../Shared/Buttons/SecondaryButton";
import { BsChatLeftQuoteFill } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";

const SliderFour = () => {
  return (
    <section className="bg-[#fff6f7]">
      <div className="slide__container">
        {/* Slider Left Starts*/}
        <div className="space-y-5 self-center">
          {/* Slider Title */}
          <SlideHeading text={`Join Read Cycle Where Readers Unite`} />
          {/* Sub Title */}
          <Description
            text="Connect with a community of avid readers. Share your love for books, discuss your latest reads, and make new literary connections. Start your reading journey with us today!"
            width="max-w-3xl"
          />
          {/* CTA Buttons */}
          <div className="flex items-center gap-5">
            <PrimaryButton
              url="/"
              text="Discover Book Clubs"
              Icon={HiMiniUserGroup}
            />

            <SecondaryButton
              url="/"
              text="Start a Discussion"
              Icon={BsChatLeftQuoteFill}
            />
          </div>
        </div>
        {/* Slider Left Ends*/}

        {/* Slider Right Starts */}
        <div className="relative">
          <div className="absolute w-full h-full -bottom-12 left-0 right-0 mx-auto flex items-end">
            <img src={readersGroup} alt="" />
          </div>
        </div>
        {/* Slider Right Ends */}
      </div>
    </section>
  );
};

export default SliderFour;
