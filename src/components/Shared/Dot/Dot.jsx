import "./Dot.css";

const Dot = ({ color }) => {
  const rgbColor = `rgba(${parseInt(color.slice(-6, -4), 16)} , ${parseInt(
    color.slice(-4, -2),
    16
  )}, ${parseInt(color.slice(-2), 16)}, 0.7)`;

  return (
    <div
      className="w-4 h-4 rounded-full feature__dot "
      style={{ backgroundColor: color, boxShadow: `0 0 10px 5px ${rgbColor}` }}
    ></div>
  );
};

export default Dot;
