import React, { FC, useEffect, useState } from "react";
import { GraphQLClient } from "graphql-request";

const GitHubApi = new GraphQLClient('https://api.github.com/graphql', {
        headers: {
          Authorization: 'Bearer f630115b3a23bc5409cbc918495d8d950ccf4980',
        },
      });
      const query = `
      {
        viewer {
          repositories(first: 100, affiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER], privacy: PUBLIC) {
            nodes{
                name
                  owner {
                    login
                  }          
                }    
              }
           }
      }
      `;

const Projects: FC = () => {
  const [githubRepos, setGithub] = useState({
    viewer: {
      repositories: {
        nodes: [
          {
            name: "",
            owner: {
              login: "",
            },
          },
        ],
      },
    },
  });
  useEffect(()=>{
    GitHubApi.request(query).then(data => setGithub(data))
  },[])
  const generateProjects = githubRepos.viewer.repositories.nodes.map((repo,index)=>{
    return <li key={index}>{repo.name}</li>
  });
  return (
    <ul>
      {generateProjects}
    </ul>
  );
};

export default Projects;
