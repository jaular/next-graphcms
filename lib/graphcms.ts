import { GraphQLClient } from "graphql-request";

export const graphcmsClient = new GraphQLClient(
  process.env.GRAPHCMS_CONTENT_API || ""
);
