import React from "react";
import ProjectItem from "./ProjectItem";
import foodImg from "../assets/Food_order.jpg";
import groceryImg from "../assets/Grocery_Bud.jpg";
import sliderImg from "../assets/Slider_autoplay.jpg";
import tenziesImg from "../assets/Tenzies_Game.jpg";

function Projects() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h2>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et
        aspernatur vitae quibusdam natus sunt fuga omnis ratione pariatur ipsam,
        expedita modi sapiente tempora velit error asperiores doloremque
        praesentium. Repudiandae.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={foodImg} title={"Food Order App"} />
        <ProjectItem img={groceryImg} title={"Grocery Bud App"} />
        <ProjectItem img={sliderImg} title={"Slider Autoplay App"} />
        <ProjectItem img={tenziesImg} title={"Tenzies Game"} />
      </div>
    </div>
  );
}

export default Projects;
