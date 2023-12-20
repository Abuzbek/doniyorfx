import mongoose from "mongoose";
import { PaymentXperts } from "../models/payment-xpert.model.js";
import { add } from "../componentLoader.js";

const paymentsNavigation = {
  name: "Tolovlar MediaXpert",
  icon: "DollarSign",
};

export const PaymentXpertResource = {
  resource: PaymentXperts,
  options: {
    navigation: paymentsNavigation,
    properties: {
      _id: {
        isVisible: false,
      },
      updatedAt: {
        isVisible: false,
      },
      course: {
        components: {
          list: add("components/course.jsx", "Course"),
          show: add("components/course-show.jsx", "CourseShow"),
        },
      },
      plan: {
        components: {
          list: add("components/plan-xpert.jsx", "PlanXpert"),
          show: add("components/plan-xpert-show.jsx", "PlanShowXpert"),
        },
      },
      file: {
        components: {
          list: add("components/photo-for-list.jsx", "PhotoForList"),
          show: add("components/photo-for-show.jsx", "PhotoForShow"),
          // show: add("components/plan.jsx", "Plan"),
        },
      },
    },
    actions: {
      show: {
        // showInDrawer: true,
      },
      edit: { isAccessible: false },
      new: { isAccessible: false },
      delete: { isAccessible: false },
      bulkDelete: { isAccessible: false },
      // delete: {
      //   redirectUrl: "/admin/resources/Users",
      //   handler: async (request, response, context) => {
      //     const { record, currentAdmin } = context;
      //     const _id = record.params._id;
      //     const deletedUser = await Payments.findByIdAndDelete({ _id });
      //     console.log(deletedUser);
      //     return {
      //       record: record.toJSON(currentAdmin),
      //       msg: deletedUser,
      //     };
      //   },
      // },
    },
    branding: {
      companyName: "Amazing c.o.",
    },
  },
};
