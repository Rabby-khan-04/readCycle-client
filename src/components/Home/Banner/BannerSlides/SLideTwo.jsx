import React from "react";
import SlideHeading from "../../../Shared/SlideHeading/SlideHeading";
import Description from "../../../Shared/Description/Description";
import PrimaryButton from "../../../Shared/Buttons/PrimaryButton";
import SecondaryButton from "../../../Shared/Buttons/SecondaryButton";
import { BiSolidBookOpen } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";
import recommendedBook from "../../../../assets/image/home/recommended_book.png";

const SLideTwo = () => {
  return (
    <section className="bg-[#f9efcc]">
      <div className="slide__container">
        {/* Slider Left Starts */}
        <div className="space-y-5 self-center">
          {/* Slide Title */}
          <SlideHeading text="Discover Books Tailored Just For You" />

          {/* Sub Title */}
          <Description
            text="Our platform makes book swapping a breeze. Browse through a diverse collection of books, connect with fellow readers, and exchange your favorite reads. It's a simple, fun, and sustainable way to enjoy new stories."
            width="max-w-4xl"
          />
          {/* CTA Buttons */}
          <div className="flex items-center gap-5">
            <PrimaryButton
              url="/"
              text="Recommended Books"
              Icon={BiSolidBookOpen}
            />

            <SecondaryButton
              url="/"
              text="Update Preferences"
              Icon={RxUpdate}
            />
          </div>
        </div>
        {/* Slider Left Ends */}

        {/* Slider Right Starts */}
        <div className="self-center justify-self-center">
          <div className="max-w-2xl">
            <img src={recommendedBook} alt="" />
          </div>
        </div>
        {/* Slider Right Ends */}
      </div>
    </section>
  );
};

export default SLideTwo;
