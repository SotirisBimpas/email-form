import { PropsWithChildren } from "react";

export default function Card({
  children,
  styles,
}: { styles?: string } & PropsWithChildren) {
  let cardStyles = "p-3 rounded-3xl bg-white border text-center";
  if (styles) cardStyles = cardStyles.concat(" ", styles);
  return <div className={cardStyles}>{children}</div>;
}
