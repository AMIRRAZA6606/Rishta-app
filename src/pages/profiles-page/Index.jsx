import React from "react";
import Layout from "../Layout";
import "./profiles.css";
import ProfilesListing from "./Profiles";

const Index = () => {
  return (
    <Layout isHeader={true} isFooter={true}>
      <ProfilesListing />
    </Layout>
  );
};

export default Index;
