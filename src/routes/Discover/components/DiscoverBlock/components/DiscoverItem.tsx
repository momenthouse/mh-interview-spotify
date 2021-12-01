import cn from "classnames";
import React, { FC } from "react";
import styled from "styled-components";

export type DiscoverItemProps = {
  className?: string;
  images?: { url: string }[];
  name: string;
};

const DiscoverItem: FC<DiscoverItemProps> = (p) => {
  return (
    <Container
      className={cn(
        "discover-item animate__animated animate__fadeIn",
        p.className
      )}
    >
      <div
        className="art"
        style={
          p.images ? { backgroundImage: `url(${p.images[0].url})` } : undefined
        }
      />
      <p className="title">{p.name}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  margin: 20px;

  @media only screen and (max-width: 500px) {
    width: 100%;
    min-width: 100%;
    margin-right: 0 !important;
  }

  &:hover > .art {
    transform: scale(1.05);
  }

  > .art {
    height: 150px;
    width: 150px;
    border-radius: 6px;
    background-size: cover;
    transition: transform 0.15s ease-in-out;
    cursor: pointer;
  }

  > .title {
    font-size: 15px;
    text-align: center;
  }
`;

export default DiscoverItem;
