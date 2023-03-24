import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2020,
    title: "Content Creator",
    duration: "3 Years",
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente aperiam doloribus voluptatibus reprehenderit! Similique error, mollitia inventore provident sit obcaecati est voluptate asperiores voluptas perspiciatis maiores sunt, delectus illo.",
  },
  {
    year: 2017,
    title: "Google",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eaque asperiores quia in vel error. Officiis dolorum maxime, ratione quae eaque possimus, quidem odio corporis ipsum, architecto tempora dolor deleniti.",
  },
  {
    year: 2013,
    title: "Amazon",
    duration: "2 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni, cum neque ipsum, placeat, porro accusamus temporibus consequuntur quia itaque repudiandae ratione eveniet iusto sed quod perspiciatis magnam. Atque, omnis! ",
  },
  {
    year: 2012,
    title: "Facebook",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora vero, fugit minima tempore dolorem. Modi dolorem tempore iure cum iste incidunt, sed eum aut, omnis repellendus hic optio cumque?",
  },
];

function Work() {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h2 className="text-4xl font-bold text-center text-[#001b5e]">Work</h2>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
}

export default Work;
