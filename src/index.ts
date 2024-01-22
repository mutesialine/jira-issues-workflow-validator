import api, { route } from "@forge/api";

export const run = async ({ issue }) => {
  const { key: issuekey } = issue;
  const response = await api
    .asApp()
    .requestJira(route`/rest/api/3/issue/${issuekey}`);
  const issueData = await response.json();

  return {
    result: !!issueData.fields.assignee,
    errorMessage: "The issue must have an assignee before transitioning.",
  };
};
