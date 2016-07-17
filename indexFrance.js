"use strict";

const madeIn = require("lib");

// Some cool JS stuff made in France
madeIn("France", {
    language: "JavaScript"
  , token: "..."
}, (err, data) => {
    console.log(err || data.map(c => c.full_name + " ( " + c.stargazers_count + " stars ) ").join("\n"));
});