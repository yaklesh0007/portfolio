import React from "react";
import './Project.css'
import doctor from "../../images/doctor.jpg";
import blog from "../../images/blog.png";
import nepsitter from "../../images/nepsitter.jpg";
import portfolio from "../../images/portfolio.jpg";
import { Card } from "react-bootstrap";

export default function Project() {
  const Projects = [
    {
      id: 1,
      name: "Doctor Information system",
      technology: ["Laravel", "HTML", "MYSQL", "CSS", "git","Bootstrap4","XAMPP"],
      imageUrl: doctor,
      gitlink:"https://github.com/yaklesh0007/CP"
    },
    {
      id: 2,
      name: "Blog Portal",
      technology: [
        "MongoDB",
        "NodeJs",
        "Express",
        "ReactJs",
        "git",
        "Kotlin",
        "XML",
        "roomdb",
      ],
      imageUrl: blog,
      gitlink:"https://github.com/yaklesh0007/blogportalfrontend"
    },
    {
      id: 3,
      name: "Nepsitter",
      technology: ["MongoDB", "NodeJs", "Express", "ReactJs", "Heroku", "git"],
      imageUrl: nepsitter,
      gitlink:"https://github.com/yaklesh0007/Agile_NepSitter_Front-end"
    },
    {
      id: 4,
      name: "Portfolio",
      technology: [
        "ReactJs",
        "Heroku",
        "git",
        "Materials UI",
        "react-bootstrap",
      ],
      imageUrl: portfolio,
      gitlink:"https://github.com/yaklesh0007/portfolio"
    },
  ];
  return (
    <div className="Projects">
     
        <h3>Previous Projects</h3>
      <div className="wrapper">
        {
          Projects.map((item)=>{
            return( 
              <div>
              <Card className=''>
              <Card.Img variant="top" src={item.imageUrl} className="imgcard"/>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {item.technology.join(", ")}
                </Card.Text>
              </Card.Body>
              <Card.Footer><a href={item.gitlink} className="btn btn-success">View source Code</a></Card.Footer>
              </Card>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
