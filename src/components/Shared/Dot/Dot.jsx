import "./Dot.css";

const Dot = ({ color }) => {
  return (
    <div
      className="w-4 h-4 rounded-full feature__dot"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default Dot;
