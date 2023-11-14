import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://cow.fi/">
        CoW Protocol
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
