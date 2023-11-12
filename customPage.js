import { add } from "./componentLoader.js";
import { Payments } from "./models/payments.model.js";

export const pages = {
  customPage: {
    component: add("components/custom-page.jsx", "CustomPage"),
    icon: "File",
    handler: async (request, response, context) => {
      const payments = await Payments.find({});
      return {
        payments,
      };
    },
  },
  //   designSystemExamples: {
  //     component: DESIGN_SYSTEM_PAGE,
  //     icon: "Layout",
  //   },
};
