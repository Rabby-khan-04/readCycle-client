import { Link } from "react-router-dom";

const SecondaryButton = ({ text, url, Icon }) => {
  return (
    <Link to={url} className="secondary__button">
      <span className="flex items-center gap-3">
        <span>{text}</span>
        <Icon className="text-2xl" />
      </span>
    </Link>
  );
};

export default SecondaryButton;
