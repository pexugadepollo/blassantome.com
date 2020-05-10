import React, { FC } from "react";
import { possiblePrimaryLanguage } from "./checkLanguage";
import * as SC from "./style";

interface GithubRepoProps {
  name: string;
  url: string;
  description?: string;
  primaryLanguage?: keyof typeof possiblePrimaryLanguage;
}

const GithubRepo: FC<GithubRepoProps> = ({
  name,
  url,
  description,
  primaryLanguage,
}) => {
  let languageIcon: JSX.Element | undefined;

  if (primaryLanguage) {
    languageIcon = possiblePrimaryLanguage[primaryLanguage];
  } else {
    languageIcon = possiblePrimaryLanguage["TypeScript"];
  }

  return (
    <SC.RepoArticle>
      <SC.RepoLink href={url}>
        <SC.RepoContent>
          <SC.RepoTitle>{name}</SC.RepoTitle>
          <p>{description}</p>
        </SC.RepoContent>
        {languageIcon}
      </SC.RepoLink>
    </SC.RepoArticle>
  );
};

export default GithubRepo;
