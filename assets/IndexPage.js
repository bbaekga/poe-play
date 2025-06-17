import { Q as QPage } from "./QPage.js";
import { s as defineComponent, v as onMounted, y as openBlock, z as createBlock } from "./index.js";
const _sfc_main = defineComponent({
  ...{
    name: "IndexPage"
  },
  __name: "IndexPage",
  setup(__props) {
    onMounted(() => {
      console.log(window.location);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "t-page" });
    };
  }
});
export { _sfc_main as default };
