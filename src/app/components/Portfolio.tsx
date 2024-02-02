"use client";

const pdfUrl = "/assets/PORTFOLIO24_ANA_MORAES_ROCHA.pdf";
export const Portfolio = () => {
  return (
    <div>
      <object data={pdfUrl} type="application/pdf" style={{width:'100%', height:'100vh'}}></object>
    </div>
  );
};
