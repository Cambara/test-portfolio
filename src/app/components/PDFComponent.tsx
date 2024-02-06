"use client";

import { useEffect, useState } from "react";
import { isSafari } from "react-device-detect";

interface Props {
  pdfUrl: string;
}

const second = 1000;
const PdfObject = ({pdfUrl}:Props) => {

  if (isSafari) {
    setTimeout(() => window.location.href = pdfUrl, 2*second);
    return <div></div>;
  }

  return <object data={pdfUrl} style={{width:'100%', height:'100vh'}}></object>
}

export const PDFComponent = (props:Props) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (<>{ domLoaded && (<PdfObject pdfUrl={props.pdfUrl} />)}</>);
};
