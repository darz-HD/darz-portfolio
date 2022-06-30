import Image from "next/image";
import React from "react";
import SkillsItem from "./SkillsItem";

const skills = [
  {
    id: "1",
    title: "PHP",
    image: "/../public/assets/skills/php.png",
  },
  {
    id: "2",
    title: "MYSQL",
    image: "/../public/assets/skills/mysql.png",
  },
  {
    id: "3",
    title: "HTML",
    image: "/../public/assets/skills/html.png",
  },
  {
    id: "4 ",
    title: "CSS",
    image: "/../public/assets/skills/css.png",
  },
  {
    id: "5",
    title: "JAVASCRIPT",
    image: "/../public/assets/skills/javascript.png",
  },
  {
    id: "6",
    title: "REACT",
    image: "/../public/assets/skills/react.png",
  },
  {
    id: "7",
    title: "JQUERY",
    image: "/../public/assets/skills/jquery.png",
  },
  {
    id: "8",
    title: "REDUX",
    image: "/../public/assets/skills/redux.png",
  },
  {
    id: "9",
    title: "CODEIGNITER",
    image: "/../public/assets/skills/codeigniter.png",
  },
  {
    id: "10",
    title: "LARAVEL",
    image: "/../public/assets/skills/laravel.png",
  },
  {
    id: "11",
    title: "NODEJS",
    image: "/../public/assets/skills/node.png",
  },
  {
    id: "12",
    title: "EXPRESSJS",
    image: "/../public/assets/skills/express.png",
  },
  {
    id: "13",
    title: "MONGODB",
    image: "/../public/assets/skills/mongo.png",
  },
  {
    id: "14",
    title: "TAILWIND",
    image: "/../public/assets/skills/tailwind.png",
  },
  {
    id: "15",
    title: "NEXTJS",
    image: "/../public/assets/skills/nextjs.png",
  },
  {
    id: "16",
    title: "SOLIDITY",
    image: "/../public/assets/skills/solidity.png",
  },
  {
    id: "17",
    title: "PACT",
    image: "/../public/assets/skills/pact.png",
  },
  {
    id: "19",
    title: "BOOTSTRAP",
    image: "/../public/assets/skills/bootstrap.png",
  },
  {
    id: "20",
    title: "WORDPRESS",
    image: "/../public/assets/skills/wordpress.png",
  },
  {
    id: "21",
    title: "MATERIALIZE",
    image: "/../public/assets/skills/materialize.png",
  },
  {
    id: "22",
    title: "GIT",
    image: "/../public/assets/skills/git.png",
  },
  {
    id: "23",
    title: "SOCKET.IO",
    image: "/../public/assets/skills/socketio.png",
  },
  {
    id: "24",
    title: "AJAX",
    image: "/../public/assets/skills/ajax.png",
  },
  {
    id: "25",
    title: "FIREBASE",
    image: "/../public/assets/skills/firebase.png",
  },
];
const Skills = () => {
  const skillList = skills.map((skill) => (
    <SkillsItem
      key={skill.id}
      title={skill.title}
      image={skill.image}
    />
  ));
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] pb-20 mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">{skillList}</div>
      </div>
    </div>
  );
};

export default Skills;
