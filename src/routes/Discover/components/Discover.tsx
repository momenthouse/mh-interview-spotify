import React, { FC, useState } from "react";
import styled from "styled-components";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";

type DiscoverProps = {
  className?: string;
};

const Discover: FC<DiscoverProps> = (p) => {
  const [newReleases] = useState<any[]>([]);
  const [playlists] = useState<any[]>([]);
  const [categories] = useState<any[]>([]);

  return (
    <Container className={p.className}>
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
      />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories}
        imagesKey="icons"
      />
    </Container>
  );
};

const Container = styled.div`
  .animate__animated.animate__fadeIn {
    --animate-duration: 1.5s;
  }
`;

export default Discover;
