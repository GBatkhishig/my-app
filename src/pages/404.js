import * as React from "react";
import Layout from "../components/Layout";

const NotFoundPage = (props) => {
  return (
    <Layout>
      <section className="h-[60vh] w-full flex items-center flex-col justify-center">
        <h1 className="mb-4 text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9d3801] to-[#cc6600]">
          404
        </h1>
        <p className="text-lg">Уучлаарай, Үр дүн олдсонгүй.</p>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
