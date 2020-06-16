const core = require("@actions/core");
const xpath = require("xpath");
const DOMParser = require("xmldom").DOMParser;
const fs = require("fs");

try {
  const manifestPath = core.getInput("manifest-path").replace(/\/$/, "");

  const versionExpression = "string(//manifest/control/@version)";
  const controlNameExpression = "string(//manifest/control/@constructor)";

  const filename = manifestPath + "/ControlManifest.Input.xml";

  console.log(`Manifest path: ${filename}`);

  const content = fs.readFileSync(filename, "utf8");
  const document = new DOMParser().parseFromString(content);

  const controlVersion = xpath.select(versionExpression, document);
  console.log(`Control Version: ${controlVersion}`);

  const controlName = xpath.select(controlNameExpression, document);
  console.log(`Control Name: ${controlName}`);

  core.setOutput("control-name", controlName);
  core.setOutput("control-version", controlVersion);
} catch (error) {
  core.setFailed(error.message);
}