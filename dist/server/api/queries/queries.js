"use strict";
const graphql_tag_1 = require("graphql-tag");
const allBaseProfiles = graphql_tag_1.default `query a {
  allBaseProfiles {
    id
    firstName
    lastName
  }
}`;
exports.allBaseProfiles = allBaseProfiles;
const gqlGetExtra = graphql_tag_1.default `query getExtra($emailId: String) {
  ExtraUser(emailId: $emailId){
    id
  }
}`;
exports.gqlGetExtra = gqlGetExtra;
//# sourceMappingURL=queries.js.map