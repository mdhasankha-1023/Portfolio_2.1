import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";

export default function Projects() {
  return (
    <div className="mx-auto max-w-full lg:max-w-5xl px-14 xl:max-w-7xl 2xl:max-w-[96rem]">
      <div className="my-4">
        <PrimaryTitle
          main={"My Working"}
          mainStyle={"text-4xl"}
          subStyle={"bg-primary"}
          sub={"Projects"}
          subTitle={"Projects"}
        />
      </div>
    </div>
  )
}
