const actions = {
  index: {
    type: "add",
    path: `{{destinationpath}}/{{pascalCase name}}/index.ts`,
    templateFile: `plop/index.ts.hbs`,
  },
  component: {
    type: "add",
    path: `{{destinationpath}}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
    templateFile: `plop/component.tsx.hbs`,
  },
};

module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "empty component",
    prompts: [
      {
        type: "input",
        default: "src",
        name: "destinationpath",
        message: "Destination path",
      },
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],
    actions: [actions.component, actions.index],
  });
};
