import Buttons from "../../../UI/Buttons/Buttons";
import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";

export default function Content() {
  return (
    <div className="py-6 flex flex-col">
      <div className="my-4">
        <PrimaryTitle
          main={"Hay! i am Hasan"}
          mainStyle={"text-6xl"}
          subStyle={"bg-secondary"}
          subTitle={"Md. Hasan Kha"}
        />
      </div>
      <div className="my-4">
        <p className="text-justify text-xl text-[#c7ced1]">
          With over 1 year of experience creating engaging and functional web
          experiences. Expert in front-end technologies including HTML5, CSS3,
          JavaScript and frameworks such as React, Next.js, Astro. Able to
          translate creative designs into interactive code and optimize website
          speed and performance.
        </p>
      </div>
      <div className="my-4 flex gap-10">
        <Buttons type="bg-btn">Get In Touch</Buttons>
        <Buttons type="outline-btn">See Resume</Buttons>
      </div>
    </div>
  );
}
