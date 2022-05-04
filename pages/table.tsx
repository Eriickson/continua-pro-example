import React, { useEffect } from "react";
import axios from "axios";

import { MainContainer } from "@/components";

const TablePagination = () => {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((data) => {
      console.log(data);
    });
  }, []);

  return <MainContainer>Example of table</MainContainer>;
};

export default TablePagination;
