import React, { FC } from "react";
import styled from "styled-components";

type SearchProps = {
  className?: string;
};

const Search: FC<SearchProps> = (p) => {
  return <Container className={p.className}>search page</Container>;
};

const Container = styled.div`
  display: flex;
`;

export default Search;
