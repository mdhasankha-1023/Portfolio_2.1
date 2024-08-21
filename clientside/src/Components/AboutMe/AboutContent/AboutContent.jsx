import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";

export default function AboutContent() {
  return (
    <div className="flex flex-col gap-2 text-white">
      <div className="my-2">
        <PrimaryTitle
          main={"I AM AVAILABLE FOR"}
          mainStyle={"text-4xl"}
          subStyle={"bg-primary"}
          sub={"Frontend Developement"}
          subTitle={"About Me"}
        />
      </div>
      <div className="my-2">
        <p className="text-justify text-xl">
          I am a software development professional, specialized in front-end web
          development. Since I began my studies in programming, I discovered my
          interest in creating intuitive and attractive web interfaces. Every
          day I dedicate myself to learning and practicing new technologies to
          continue improving my skills. I consider myself a responsible, dynamic
          and creative person, with a great capacity for adaptation and a
          constant desire to work and learn. I have initiative to solve problems
          and enjoy facing new challenges in the field of technology. In the
          future, I plan to expand my knowledge and master an even greater
          variety of tools and techniques in web development.
        </p>
      </div>
    </div>
  );
}
