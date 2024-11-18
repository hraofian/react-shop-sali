import { ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "danger" | "success" | "warning";

type TButton = ComponentProps<"button"> & {
  variant?: TVariant;
};

function Button({ children, variant,style, ...rest }: TButton) {
  console.log(checkVariant(variant));
  return <button {...rest} style={{borderRadius:"6px",padding:"4px 8px", ...checkVariant(variant)}}>{children}</button>;
}

export default Button;

function checkVariant(variant?: TVariant) {
  if (variant === "primary") {
    return { backgroundColor: "blue", color: "white" };
  } else if (variant === "secondary") {
    return { backgroundColor: "gray", color: "white" };
  } else if (variant === "danger") {
    return { backgroundColor: "red", color: "white" };
  } else if (variant === "success") {
    return { backgroundColor: "green", color: "white" };
  } else if (variant === "warning") {
    return { backgroundColor: "yellow", color: "black" };
  }
}
