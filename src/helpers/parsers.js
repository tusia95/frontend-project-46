import yaml from "js-yaml";

const jsonParser = (jsonData) => {
  return JSON.parse(jsonData);
};

const yamlParser = (yamlData) => {
  return yaml.load(yamlData);
};

export { jsonParser, yamlParser };
