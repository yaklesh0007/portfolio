import React from "react";
import { Carousel } from "react-bootstrap";
import "./Testimonial.css";
import ras from "../../images/ras.jpg";
import ajay from "../../images/ajay.jpg";
import avishek from "../../images/avishek.jpg";
import achyut from "../../images/achyut.jpg";
export default function Testimonial() {
  const Testimonials = [
    { imgUrl: ajay, name: "Ajay Yadav", text: "" },
    { imgUrl: avishek, name: "Abisehek K.C", text: "" },
    { imgUrl: achyut, name: "Achyut Timsina", text: "" },
    { imgUrl: ras, name: "Roosy Poudel", text: "" },
  ];
  return (
    <>
      <Carousel className="TestimonialPage">
        <h2>Testimonials</h2>
        {Testimonials.map((item) => {
          return (
            <Carousel.Item fade={true} interval={2000}>
              <img className="imgcarousel" src={item.imgUrl} alt={item.name} />

              <h3>{item.name}</h3>
              <p className="text-red">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
