import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import styled from "styled-components";
import { ReactComponent as Hero } from "../../../assets/images/hero.svg";

type HeaderProps = {
  className?: string;
};

const Header: FC<HeaderProps> = (p) => {
  return (
    <Container className={p.className}>
      <Hero />
      <div>
        <h1>Your favourite tunes</h1>
        <h2>
          All <FontAwesomeIcon icon={faSun} /> and all{" "}
          <FontAwesomeIcon icon={faMoon} />
        </h2>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 300px;
  background: var(--secondary-orange);
  overflow: hidden;
  display: flex;
  align-items: center;
  color: white;
  letter-spacing: 1px;
  font-weight: 300;
  justify-content: space-between;
  padding-right: 5%;
  min-height: 300px;
  margin-bottom: 50px;
  user-select: none;

  @media only screen and (max-height: 775px) {
    height: 100px;
    min-height: 100px;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 750px) {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 1300px) {
    padding-left: 5%;
    padding-right: unset;
  }

  @media only screen and (min-width: 415px) and (max-width: 600px) {
    padding: 20px !important;
    height: 100px;
    min-height: 100px;
  }

  @media only screen and (max-width: 415px) {
    padding: 20px !important;
    height: auto;
    min-height: 100px;
  }

  > div {
    margin-left: auto;

    @media only screen and (max-width: 1300px) {
      margin-left: unset;
    }

    @media only screen and (max-width: 650px) {
      margin-left: auto;
      margin-right: auto;
    }

    h1,
    h2 {
      font-weight: 500;
      text-shadow: var(--box-shadow);
      text-align: right;

      @media only screen and (max-width: 1300px) {
        text-align: unset;
      }
    }

    h1 {
      font-size: 60px;
      margin-bottom: 10px;

      @media only screen and (max-width: 600px) {
        font-size: 24px;
      }

      @media only screen and (max-height: 775px) {
        font-size: 24px;
      }
    }

    h2 {
      font-size: 45px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-top: 0;

      @media only screen and (max-width: 1300px) {
        justify-content: unset;
      }

      @media only screen and (max-width: 600px) {
        font-size: 20px;
      }

      @media only screen and (max-height: 775px) {
        font-size: 20px;
      }

      > svg {
        margin-left: 10px;
        margin-right: 10px;

        &:first-of-type {
          color: #ffd60b;
        }
      }

      > svg:last-of-type {
        color: var(--deep-grey);
      }
    }
  }

  > svg {
    align-self: flex-end;
    height: 150%;
    width: auto;
    transform: scaleX(-1);
    margin-left: -50px;
    margin-bottom: -60px;

    @media only screen and (max-height: 775px) {
      height: 200%;
      margin-left: -20px;
    }

    @media only screen and (max-width: 1300px) {
      display: none;
    }
  }
`;

export default Header;
