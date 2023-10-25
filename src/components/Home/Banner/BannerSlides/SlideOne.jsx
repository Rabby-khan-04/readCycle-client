import PillSubHeading from "../../../Shared/PillSubHeading/PillSubHeading";
import "./Slides.css";
import heroImg from "../../../../assets/image/home/banner_hero.png";
import NewsLetterForm from "../../../Shared/NewsLetterForm/NewsLetterForm";

const SlideOne = () => {
  return (
    <section className="">
      <div className="py-[50px] pl-[50px] pr-5 grid grid-cols-2 gap-[60px]">
        {/* Slider Left Starts*/}
        <div className="space-y-5">
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

          {/* Newsletter Form */}
          <div className="max-w-xl">
            <NewsLetterForm />
          </div>
        </div>
        {/* Slider Left Ends*/}

        {/* Slider Right Starts*/}
        <div className="flex justify-center items-center">
          <img src={heroImg} className="w-[450px]" alt="" />
        </div>
        {/* Slider Right End*/}
      </div>
    </section>
  );
};

export default SlideOne;
