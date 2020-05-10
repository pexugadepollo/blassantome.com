import styled from "styled-components";

export const RepoLink = styled.a`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  padding: 10px;

  &:hover{
    opacity: 70%
  }
`;

export const RepoContent = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
`;

export const RepoTitle = styled.h4`
  color: #1890ff;

`;

export const RepoArticle = styled.article`
  margin: 10px;
  border-bottom: 1px solid #6eb9ff;
`;
