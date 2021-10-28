import BaseRoutes from "./baseRoutes";
import BrandRoutes from "./brandRoutes";
import CustomerSupportRoutes from "./customerSupportRoutes";
import MiscRoutes from "./miscRoutes";
import NewsRoutes from "./newsRoutes";
import TypeRoutes from "./typeRoutes";
import UseRoutes from "./useRoutes";

const AllRouteData = [].concat(
  [...BaseRoutes],
  [...BrandRoutes],
  [...CustomerSupportRoutes],
  [...MiscRoutes],
  [...NewsRoutes],
  [...TypeRoutes],
  [...UseRoutes]
);

export default AllRouteData;