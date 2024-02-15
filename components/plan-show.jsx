import { Box, Label } from "@adminjs/design-system";
const PlanShow = (props) => {
  const { record, property } = props;
  const value = record.params[property.name];
  const plans = [
    {
      title: "Standart tarif",
      price: "3.297.000 so‘m",
      value: 1,
    },
    {
      title: "Premium tarif",
      price: "3.497.000 so‘m",
      value: 2,
    },
    {
      title: "VIP tarif",
      price: "6.997.000 so‘m",
      value: 3,
    },
  ];
  if (plans.find((n) => n.value === value)) {
    return (
      <Box style={{ marginBottom: 24 }}>
        <Label variant="light">Tarifi</Label>
        {plans.find((n) => n.value === value).title}
      </Box>
    );
  } else {
    return (
      <Box style={{ marginBottom: 24 }}>
        <Label variant="light">Tarifi</Label>
        {value}
      </Box>
    );
  }
};

export default PlanShow;
