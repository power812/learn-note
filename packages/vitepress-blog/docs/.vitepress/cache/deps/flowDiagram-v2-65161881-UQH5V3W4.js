import {
  flowRendererV2,
  flowStyles
} from "./chunk-5CMWNHX2.js";
import "./chunk-S42GDUTR.js";
import {
  flowDb,
  parser$1
} from "./chunk-2BKUQ2VR.js";
import "./chunk-IICGCLB7.js";
import "./chunk-44HB2DXF.js";
import "./chunk-57DPXTWL.js";
import "./chunk-7HU4NNIZ.js";
import "./chunk-SFXM2CGH.js";
import "./chunk-CHYOOXOE.js";
import "./chunk-OL4ZY2BY.js";
import {
  setConfig
} from "./chunk-TBQEZFON.js";
import "./chunk-UXIASGQL.js";

// ../../node_modules/.pnpm/mermaid@10.3.0/node_modules/mermaid/dist/flowDiagram-v2-65161881.js
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-65161881-UQH5V3W4.js.map
