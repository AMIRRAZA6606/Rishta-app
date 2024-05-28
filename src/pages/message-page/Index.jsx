import React from "react";
import Layout from "../Layout";
import Chat from "./Chat";
import "./chat.css";

const Index = () => {
  return (
    <Layout isHeader={true} isFooter={false} bgColor={"#e5efef"}>
      <Chat />
    </Layout>
  );
};

export default Index;
