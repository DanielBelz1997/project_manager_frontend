import header_logo from "../../../public/main_page_logo.svg";

export const LandingComponent = () => {
  const mainText = `ניהול בקשות - בדרך שלכם.`;
  const subText = `המערכת מאפשרת ניהול יעיל ומותאם אישית של בקשות,\n בצורה שמתאימה לכם - בדרך שלכם.`;
  return (
    <>
      <img className="w-2/12 mt-[5vw] " src={header_logo} />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {mainText}
      </h1>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight whitespace-pre-line mt-5 mb-40 text-center">
        {subText}
      </h3>
    </>
  );
};

