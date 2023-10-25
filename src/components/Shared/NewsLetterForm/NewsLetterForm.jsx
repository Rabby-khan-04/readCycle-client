import "./NewsLetterForm.css";

const NewsLetterForm = () => {
  return (
    <form className="text-sm relative font-oranienbaum flex justify-end items-center">
      <input
        type="text"
        name="email"
        placeholder="Your e-mail"
        id="newsletter__email"
        className="h-[72px] text-black border border-solid border-[#b3b1ac] rounded-full pl-14 pr-48 text-lg transition-all duration-300 bg-transparent"
      />
      <button type="submit" className="submit__button absolute right-2">
        Subscribe
      </button>
    </form>
  );
};

export default NewsLetterForm;
