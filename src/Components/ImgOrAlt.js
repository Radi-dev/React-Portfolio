import React, { useState } from "react";
const ImgOrAlt = ({ src, alt = "Image", ...props }) => {
  /*
  This function displays the target image if its available, but
  only displays alt text (without the broken image icon) when the 
  target image isn't available. User can pass in extra props acceptable to the img tag */
  const altImg = <div>{alt}</div>;
  const clickHandler = () => {
    setImg(altImg);
  };
  const imgJsx = (
    <img src={src} alt={alt} onError={clickHandler} {...props}></img>
  );
  const [Img, setImg] = useState(imgJsx);
  return Img;
};

export default ImgOrAlt;
