"use client";

import { useEffect, useState } from "react";
import { isSafari } from "react-device-detect";

const pdfUrl = `/test-portfolio/assets/PORTFOLIO24_ANA_MORAES_ROCHA.pdf`;
const second = 1000;
const PdfObject = () => {

  if (isSafari) {
    setTimeout(() => window.location.href = pdfUrl, 2*second);
    return <div></div>;
  }

  return <object data={pdfUrl} style={{width:'100%', height:'100vh'}}></object>
}

export const Portfolio = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (<>{ domLoaded && (<PdfObject />)}</>);
};
