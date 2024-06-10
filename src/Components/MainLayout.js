import React from "react";
import FormComponent from "./Form";
import CardComponent from "./Card";
import logo from "../Assets/EZ Works Blue.png";
import img1 from "../Assets/Research@4x-5.png";
import img2 from "../Assets/Research@4x-2.png";
import img3 from "../Assets/Research@4x-1.png";
import img4 from "../Assets/Research@4x-4.png";
import img5 from "../Assets/Research@4x-5.png";
import img6 from "../Assets/Research@4x-3.png";

const MainLayout = () => {
  const cards = [
    {
      imgSrc: img1,
      heading: "Presentation Design",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    },
    {
      imgSrc: img2,
      heading: "Audio - Visual Production",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    },
    {
      imgSrc: img3,
      heading: "Translation Services",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    },
    {
      imgSrc: img4,
      heading: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    },
    {
      imgSrc: img5,
      heading: "Research & Analytics",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    },
    {
      imgSrc: img6,
      heading: "Data Processing",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <div className=" flex flex-col lg:flex-row">
      <div className="lg:w-[35%] flex flex-col p-8">
        <div className="flex flex-col items-center mb-8 sm:mx-auto sm:w-full sm:max-w-md">
          <img src={logo} alt="EZ Works Logo" className="w-44 mb-8" />
          <h1 className="text-3xl font-bold text-customBlue text-center">
            Suite Of Business Support Services
          </h1>
          <p className="text-xl mt-2 text-customBlue text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed
          </p>
        </div>

        <div className="flex-grow hidden sm:block">
          <FormComponent />
        </div>
      </div>
      <div className="lg:w-[65%] p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </div>
      <div className="md:hidden p-8">
        <FormComponent />
      </div>
    </div>
  );
};

export default MainLayout;
