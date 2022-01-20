import React from "react";
import Header from "./Header";
import RecommendedJobs from "./RecommendedJobs";
import HowItWorks from "./HowItWorks";
import PopularCategory from "./PopularCategory";
import JobNetwork from "./JobNetwork";
import Testimonies from "./Testimonies";
import GetStarted from "./GetStarted";
import Footer from "./Footer";
import CopyRight from "./Footer/CopyRight";

export default function HomeComponent() {
  return (
    <>
      <Header />
      <RecommendedJobs />
      <HowItWorks />
      <PopularCategory />
      <JobNetwork />
      <Testimonies />
      <GetStarted />
      <Footer />
      <CopyRight />
    </>
  );
}
