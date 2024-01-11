import Image from "next/image";
import React from "react";

type props = {
  img: string;
  url: string;
  
  onClick?: () => {};
  ctaAction?: () => {};
};

const ProvidersCard = (props: props) => {
  return (
    <div className="providerLogo">
      <img src={props.img} alt="" />
    </div>
  );
};

export default ProvidersCard;
