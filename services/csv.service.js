import xlsx from "json-as-xlsx";

export const CreateCsvService = async (data, res) => {
  console.log(data);
  console.log(process.env.NODE_ENV);
  // const date = dayjs().format("DDMMYYYY-HHmmss_SSS");
  // const ws = fs.createWriteStream("./public/images/" + date + "-users.csv");
  const createLink = (link) => {
    if (process.env.NODE_ENV === "production") {
      return `https://payment.doniyorfx.uz${link}`;
    } else {
      return `http://localhost:8080${link}`;
    }
  };
  const plans = [
    {
      title: "Standart tarif",
      price: "2 797 000 so‘m",
      value: 1,
    },
    {
      title: "Premium tarif",
      price: "2 997 000 so‘m",
      value: 2,
    },
    {
      title: "VIP tarif",
      price: "5 997 000 so‘m",
      value: 3,
    },
  ];
  const sheet = [
    {
      sheet: "Users",
      columns: [
        {
          label: "Ism",
          value: "name",
        },
        {
          label: "Familya",
          value: "surname",
        },
        {
          label: "Telefon",
          name: "phone",
        },
        {
          label: "Tarif",
          value: (row) => plans.find((plan) => plan.value === row.plan).title,
        },
        {
          label: "Rasm",
          value: (row) => (row.file ? createLink(row.file) : "No Photo"),
        },
        {
          label: "Ro'yxatdan o'tgan sanasi",
          value: (row) =>
            new Date(row.createdAt).toLocaleDateString("ru-Ru", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
              hour: "numeric",
              second: "numeric",
              minute: "numeric",
            }),
        },
      ],
      content: data,
    },
  ];
  let settings = {
    writeOptions: {
      type: "buffer",
      compression: false,
      bookType: 'xlsx'
    },
  };
  const buffer = xlsx(sheet, settings);

  res.writeHead(200, {
    "Content-Type": "application/octet-stream",
    "Content-disposition": "attachment; filename=MySheet.xlsx",
  })
  res.end(buffer);
};
