import header_logo from "../../../public/main_page_logo.svg";

export const LandingComponent = () => {
  return (
    <>
      <img className="w-2/12 mt-[5vw]" src={header_logo} />
      <span className="flex justify-center">כל הבקשות שלכם, במקום אחד.</span>
    </>
  );
};
