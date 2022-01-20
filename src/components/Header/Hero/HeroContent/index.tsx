import React from "react";
import { trustedData } from "../../../../utils/data/trusted";
import Trusted from "../Trusted/Trusted";
import HeroContent from "./HeroContent";
import HeroContentInput from "./HeroContentInput";

export default function HeroContentGroup() {
  return (
    <>
      <HeroContent />
      <HeroContentInput />
      <Trusted data={trustedData}/>
    </>
  );
}
