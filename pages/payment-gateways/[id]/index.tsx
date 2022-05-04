import React from "react";

import { PaymentGatewaysTemplate } from "@/templates";
import { SEO, TemplateContainer } from "@/components";
import { withAuth } from "@/hocs";
import { useSelector } from "@/store";

const PaymentGatewaysDetails = () => {
  const { data } = useSelector(({ paymentGateways }) => paymentGateways.getPaymentGateway);
  return (
    <>
      {data && <SEO title={`Forma de pago ${data?.name}`} />}
      <TemplateContainer title="Cuenta">
        <PaymentGatewaysTemplate />
      </TemplateContainer>
    </>
  );
};

export default withAuth(PaymentGatewaysDetails);
