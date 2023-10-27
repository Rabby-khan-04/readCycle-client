import "./SliderBookCard.css";
import bookShadow from "../../../../assets/image/home/book_shadow.png";
import { Link } from "react-router-dom";

const SliderBookCard = ({ img, title, desc }) => {
  return (
    <Link
      to="/"
      className="book__img__wrapper max-w-[300px] w-[300px] inline-block"
    >
      <div className="bg-white p-4 relative z-10 ">
        <img src={img} className="slider__book__img inline-block" alt="" />
        <img
          src={bookShadow}
          alt=""
          className="absolute w-full h-auto bottom-0 left-0 right-0 -z-[1] mx-auto book__shadow"
        />
      </div>
      <div className="mt-6 w-4/5">
        <h2 className="text-[26px] font-oranienbaum ">{title}</h2>
        <p className="text-grayText text-sm">{desc}</p>
      </div>
    </Link>
  );
};

export default SliderBookCard;
