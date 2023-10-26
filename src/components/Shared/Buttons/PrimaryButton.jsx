import { Link } from "react-router-dom";

const PrimaryButton = ({ text, url, Icon }) => {
  return (
    <Link to={url} className="primary__button">
      <span className="flex items-center gap-3">
        <span>{text}</span>
        <Icon className="text-2xl" />
      </span>
    </Link>
  );
};

export default PrimaryButton;
