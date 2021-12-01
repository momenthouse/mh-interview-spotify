import React, { FC } from "react";
import { Route, Routes as ReactRoute } from "react-router-dom";
import Discover from "./Discover";
import Search from "./Search";

type RoutesProps = {
  className?: string;
};

const Routes: FC<RoutesProps> = (p) => {
  return (
    <ReactRoute>
      <Route path="/" element={<Discover />} />
      <Route path="/search" element={<Search />} />
    </ReactRoute>
  );
};

export default Routes;
