import { MainContainer } from "@/components";
import { withAuth } from "@/hocs";
import { CreateAutomatizationTemplate } from "@/templates";
import React from "react";

const CreateAutomatizationPage = () => {
  return (
    <MainContainer>
      <CreateAutomatizationTemplate />
    </MainContainer>
  );
};
// const urlDefaultClient = "/agency/automatization/create";
// const urlDefaultAgency = "/agency/automatization";

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   // contant with value host
//   let host = ctx.req.headers.host?.split(".")[0] || "agency";

//   console.log(host);

//   // Check if host containt value agency
//   if (host === "agency") {
//     // redirect to urlDefaultClient
//     // ctx.res.writeHead(302, {
//     //   Location: urlDefaultClient,
//     // });
//     // ctx.res.end();

//     return {
//       props: {},
//       redirect: {
//         destination: urlDefaultAgency,
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };

export default withAuth(CreateAutomatizationPage);
