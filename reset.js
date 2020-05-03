const fs = require("fs-extra");

fs.remove(".storybook", (err) => {
  if (err) return console.error(err);

  console.log(".storybook removed ok!");
});

fs.remove("src/components/Link.stories.tsx", (err) => {
  if (err) return console.error(err);

  console.log("Link.stories.ts removed ok!");
});
