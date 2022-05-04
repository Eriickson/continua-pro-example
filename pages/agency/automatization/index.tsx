import React from "react";

import { /*  GetServerSideProps,  */ NextPage } from "next";

import { AutomatizationTemplate } from "@/templates";

import { MainContainer } from "@/components";
import { withAuth } from "@/hocs";

const AutomationsPage: NextPage = () => {
  return (
    <MainContainer>
      <AutomatizationTemplate />
    </MainContainer>
  );
};

// const urlDefaultClient = "/agency/automatization/create";
// const urlDefaultAgency = "/agency/automatization";

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   // contant with value host
//   let host = ctx.req.headers.host?.split(".")[0] || "client";

//   console.log(host);

//   // Check if host containt value agency
//   if (host !== "agency") {
//     // redirect to urlDefaultClient
//     // ctx.res.writeHead(302, {
//     //   Location: urlDefaultClient,
//     // });
//     // ctx.res.end();

//     return {
//       props: {},
//       redirect: {
//         destination: urlDefaultClient,
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };

export default withAuth(AutomationsPage);
