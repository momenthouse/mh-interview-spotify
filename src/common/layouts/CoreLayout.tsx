import React, { FC } from "react";
import Header from "../components/Header";
import Player from "../components/Player";
import SideBar from "../components/SideBar";

type CoreLayoutProps = {
  className?: string;
};

const CoreLayout: FC<CoreLayoutProps> = (p) => {
  return (
    <div className="main">
      <SideBar />
      <div className="main__content">
        <Header />
        <div className="main__content__child">{p.children}</div>
      </div>
      <Player />
    </div>
  );
};

export default CoreLayout;
