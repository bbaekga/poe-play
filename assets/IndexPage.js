import { Q as QPage } from "./QPage.js";
import { s as defineComponent, v as openBlock, x as createBlock } from "./index.js";
import "./render.js";
const _sfc_main = defineComponent({
  ...{
    name: "IndexPage"
  },
  __name: "IndexPage",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "t-page" });
    };
  }
});
export { _sfc_main as default };
