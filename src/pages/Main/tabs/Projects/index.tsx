import React, { FC, useEffect } from "react";
import GithubRepos from "../../../../components/GithubRepos";
import { useTab } from "../../../../hooks/useTab";

const Projects: FC = () => {
  const { setTab } = useTab();
  useEffect(()=>{
    setTab(1)
  }, [setTab])
  return <GithubRepos></GithubRepos>;
};

export default Projects;
