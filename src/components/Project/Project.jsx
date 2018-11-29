import "./Project.css";

import { Link } from "react-router-dom";
import Page from "../Page/Page";
import React from "react";
import projects from "../../ProjectService.js";

export default function Project(props) {
  console.log(props.match.params.projectID);

  let project = projects.filter(i => i.id == props.match.params.projectID)[0];
  console.log(project);
  if (!project) return null;
  return (
    <div className="project">
      <div className="titlebar">
        <h1>{project.name}</h1>
      </div>
      <div className="description">
        <p>{project.description}</p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ipsa
          perferendis optio delectus, quia ad nostrum nihil accusantium neque
          aliquid non reprehenderit consequatur ullam! Quaerat cupiditate
          tempore sapiente maxime eligendi! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eos est vitae officia perspiciatis quos.
          Natus, consectetur commodi. Maxime, iure aperiam et dolorum sed
          adipisci, magni facilis error inventore provident perferendis! Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Ea laboriosam
          ducimus sint eligendi labore. Ad rem omnis impedit possimus quidem
          porro ex. Praesentium distinctio ipsum culpa! Labore veniam libero
          consectetur?
        </p>

        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
          dolorem nulla quasi, assumenda laborum eligendi impedit aliquam
          excepturi possimus distinctio tempora natus repellendus accusamus
          officiis molestias facilis, facere mollitia optio. Earum delectus quas
          aspernatur maiores quam mollitia quod, doloribus deserunt incidunt sit
          repudiandae, iure debitis cupiditate dolores expedita qui architecto
          rem minima? Recusandae perferendis saepe suscipit repellendus velit
          nisi excepturi? Aperiam temporibus minima quo iste reiciendis, beatae
          sed odit velit quaerat consectetur at et pariatur voluptas delectus
          quidem voluptatibus itaque sequi voluptates doloribus fuga quisquam
          voluptate aliquam molestiae. Vero, ab?
        </p>
      </div>
      <br/>
      <Link to={"/"} className="button">
        Run
      </Link>
      <br/>
    </div>
  );
}
