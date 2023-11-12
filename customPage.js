import { add } from "./componentLoader.js";
import { Payments } from "./models/payments.model.js";

export const pages = {
  excel: {
    component: add("components/custom-page.jsx", "Excel"),
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
