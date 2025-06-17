import { Q as QPage } from "./QPage.js";
import { s as defineComponent, u as useRouter, v as onMounted, L as routes, y as openBlock, z as createBlock } from "./index.js";
const _sfc_main = defineComponent({
  ...{
    name: "IndexPage"
  },
  __name: "IndexPage",
  setup(__props) {
    const router = useRouter();
    onMounted(() => {
      const queryString = window.location.search;
      if (queryString && queryString.indexOf("?p=") === 0) {
        const page = queryString.replace("?p=", "");
        const pageNames = [];
        routes.forEach((route) => {
          if (route.children) {
            pageNames.push(...route.children.map((c) => String(c.name)));
          }
        });
        if (pageNames.includes(page)) {
          router.push({ name: page });
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "t-page" });
    };
  }
});
export { _sfc_main as default };
