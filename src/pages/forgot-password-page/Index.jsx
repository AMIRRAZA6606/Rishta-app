import React from "react";
import Layout from "../Layout";
import "./friends.css";
import FriendsListing from "./Friends";

const Index = () => {
  return (
    <Layout isHeader={true} isFooter={true}>
      <FriendsListing />
    </Layout>
  );
};

export default Index;
