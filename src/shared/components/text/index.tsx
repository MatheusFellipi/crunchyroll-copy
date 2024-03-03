import { Text, ITextProps } from "native-base";

type Props = ITextProps & {
  label: string;
  fontFamily?: "Inter" | "InterBold";
};

export function TextComponent({ label, ...props }: Props) {
  return (
    <Text
      fontFamily={"Inter"}
      color={props.color ?? "white"}
      fontSize={props.fontSize ?? "xl"}
      textAlign={props.textAlign ?? "center"}
    >
      {label}
    </Text>
  );
}
