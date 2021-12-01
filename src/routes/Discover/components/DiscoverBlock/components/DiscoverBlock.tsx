import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useCallback } from "react";
import styled from "styled-components";
import DiscoverItem, { DiscoverItemProps } from "./DiscoverItem";

type DiscoverBlockProps = {
  className?: string;
  id: string;
  text: string;
  data: {
    name: DiscoverItemProps["name"];
    images?: DiscoverItemProps["images"];
    icons?: DiscoverItemProps["images"];
  }[];
  imagesKey?: "images" | "icons";
};

const DiscoverBlock: FC<DiscoverBlockProps> = ({
  imagesKey = "images",
  ...p
}) => {
  const onPaginationClick = useCallback(
    (id: string, { isNegative }: { isNegative?: boolean } = {}) => {
      return () => {
        const scrollableContainer = document.getElementById(id);
        if (scrollableContainer) {
          const amount = isNegative
            ? -scrollableContainer.offsetWidth
            : scrollableContainer.offsetWidth;
          scrollableContainer.scrollLeft =
            scrollableContainer.scrollLeft + amount;
        }
      };
    },
    []
  );

  return (
    <Container className={p.className}>
      <div className="header">
        <h2>{p.text}</h2>
        <span />
        {p.data.length ? (
          <div className="animate__animated animate__fadeIn">
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={onPaginationClick(p.id, { isNegative: true })}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={onPaginationClick(p.id)}
            />
          </div>
        ) : null}
      </div>

      <div className="row" id={p.id}>
        {p.data.map(({ [imagesKey]: images, name }) => (
          <DiscoverItem key={name} images={images} name={name} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  > .header {
    display: flex;
    align-items: center;
    min-height: 20px;

    > h2 {
      color: var(--primary-grey);
      font-size: 15px;
      letter-spacing: 1px;
      margin: 0;
    }

    > span {
      background: #eee;
      flex: 1;
      height: 2px;
      display: block;
      margin-left: 20px;
      margin-right: 20px;
    }

    > div {
      font-size: 20px;
      display: flex;

      > svg {
        transition: transform 0.2s ease-in-out;
        cursor: pointer;
        color: var(--primary-blue);

        &:hover {
          transform: scale(1.15);
        }
      }

      > svg:first-of-type {
        margin-right: 20px;
      }
    }

    > .__icon {
      > .__disabled {
        color: unset;
        pointer-events: none;
      }
    }
  }

  > .row {
    display: flex;
    margin-bottom: 50px;
    width: 100%;
    overflow-x: scroll;
    height: 250px;
    scroll-behavior: smooth;
    margin-top: 20px;

    > :first-child {
      margin-left: 4px;
    }

    > :last-child {
      margin-right: 4px;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    @media only screen and (max-height: 750px) {
      margin-bottom: 20px;
    }
  }
`;

export default DiscoverBlock;
