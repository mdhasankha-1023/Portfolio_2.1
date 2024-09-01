import ContactForm from "../../../UI/ContactForm/ContactForm";
import Icons from "../../../UI/Icons/Icons";
import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";
import image from "../../../../public/portfolio_1.png";


export default function Contact() {
  return (
    <div className="text-white bg-secondary pt-14 rounded-2xl shadow-2xl mx-auto max-w-full lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
      <div className="mb-8">
        <PrimaryTitle
          main={"Let's Discus Your"}
          sub={"Project"}
          mainStyle={"text-4xl text-center"}
        />
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-end py-4 px-10 bg-primary relative shadow-2xl">
        <div className="lg:flex hidden justify-start absolute top-[-30%]">
          <div className="rounded-full w-80 h-80 flex justify-center items-center">
            <figure className="rounded-full h-full w-full">
              <img
                src={image}
                className="w-full h-full rounded-full"
                alt="hasan"
              />
            </figure>
          </div>
        </div>
        <div className="w-full lg:w-[40%] p-6 my-8 lg:my-16">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-start gap-4">
              <h1 className="text-xl">Email</h1>
              <p className="text-2xl font-bold">mdhasankha.wd@gmail.com</p>
            </div>
            <div className="flex flex-col justify-start gap-4">
              <h1 className="text-xl">Phone</h1>
              <p className="text-2xl font-bold">+880 1923720498</p>
            </div>
            <div className="flex flex-col justify-start gap-4">
              <h1 className="text-xl">Address</h1>
              <p className="text-2xl font-bold">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <div>
              <Icons style={"text-5xl cursor-pointer"} type="instagram" />
            </div>
            <div>
              <Icons style={"text-5xl cursor-pointer"} type="whatsapp" />
            </div>
            <div>
              <Icons style={"text-5xl cursor-pointer"} type="linkedin" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[60%] p-6 my-8 lg:my-16">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
