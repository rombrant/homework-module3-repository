import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/parallax.js";
import "./scripts/works.js";
import "./scripts/reviews.js";
import "./scripts/popup.js";
import "./scripts/validator.js";