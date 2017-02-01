"use strict";
const graphql_tag_1 = require("graphql-tag");
const addBP = graphql_tag_1.default `mutation cbp {
  createBaseProfile(
    email:"Homie!@gmail.com",
    firstName:"Homie", lastName:"Foo", middleInitial:"Z"){
    id
  }
}`;
//# sourceMappingURL=mutations.js.map