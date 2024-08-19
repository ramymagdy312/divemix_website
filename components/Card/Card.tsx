import Image from "next/image";
import React from "react";

type props = {
  img: string;
  title: string;
  desc: string;
  cta: string;
  onClick?: () => void;
  ctaAction?: () => void;
};

const Card = (props: props) => {
  return (
    <div className="customCard" onClick={props.onClick}>
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
