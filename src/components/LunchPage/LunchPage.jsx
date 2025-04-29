
import React from "react";
import "./LunchPage.css";
import Section1 from "../section-1/Section1";
import Section2 from "../section-2/Section2";
import Section3 from "../section-3/Section3";
import Section4 from "../section4/Section4";
import Footer from "../Footer/Footer";
function LunchPage() {
  return (
    <div>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <hr></hr>
      {/* <Footer/> */}
    </div>
   
  );
}

export default LunchPage;
