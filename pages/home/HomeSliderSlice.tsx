import Modal from "@/components/ui/Modal";
import Image from "next/image";
import React, { useState } from "react";

type props = {
  title: string;
  imageURL: string;
};

const HomeSliderSlice = (props: props) => {
  const [modalShown, setModalShown] = useState(false);
  return (
    <>
      <div className="homeSlider_slice" onClick={() => setModalShown(true)}>
        <h5>{props.title}</h5>
        <div className="homeSlider_imageWrapper">
          <Image src={props.imageURL} fill alt="" />
        </div>
      </div>

      {modalShown && (
        <Modal onClose={() => setModalShown(false)}>
          <>
            <h2 className="text-capitalize fw-bold">{props.title}</h2>
            <div className="homeSlider_modalImage">
              <Image src={props.imageURL} fill alt="" />
            </div>
          </>
        </Modal>
      )}
    </>
  );
};

export default HomeSliderSlice;
