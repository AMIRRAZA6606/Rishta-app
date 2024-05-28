import React from "react";
import Layout from "../Layout";
import "./requests.css";
import RequestsListing from "./Requests";
// import RequestsListing from "./Requests";

const Index = () => {
  return (
    <Layout isHeader={true} isFooter={true}>
      <RequestsListing />
    </Layout>
  );
};

export default Index;
