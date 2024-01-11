import Image from "next/image";
import React from "react";

type props = {
  img: string;
  title: string;
  desc: string;
  cta: string;
  onClick?: () => {};
  ctaAction?: () => {};
};

const Card = (props: props) => {
  return (
    <div className="customCard">
      <div className="cardImg">
        <Image src={props.img} fill alt="" />
      </div>
      <h6 className="cardTitle">{props.title}</h6>
      <p className="cardDesc">{props.desc}</p>
      <button className="cardCta">{props.cta}</button>
    </div>
  );
};

export default Card;
