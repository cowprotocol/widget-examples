import { Box, Input } from "@mui/material";

export interface LimitOrderFormProps {
  price: string;
  amount: string;
  onUpdatePrice(price: string): void;
  onUpdateAmount(amount: string): void;
}

export function LimitOrderForm({
  price,
  amount,
  onUpdateAmount,
  onUpdatePrice,
}: LimitOrderFormProps) {
  return (
    <Box width={450} height={340} sx={{ border: "2px red solid" }}>
      Price:{" "}
      <Input
        value={price}
        onChange={(e) => onUpdatePrice(e.target.value)}
      ></Input>{" "}
      <br />
      Amount:{" "}
      <Input
        value={amount}
        onChange={(e) => onUpdateAmount(e.target.value)}
      ></Input>
      <br />
    </Box>
  );
}
