import { Text, ITextProps } from "native-base";

type Props = ITextProps & {
  label: string;
};

export function TextComponent({ label, ...props }: Props) {
  return (
    <Text
      color={props.color ?? "whiter"}
      fontSize={props.fontSize ?? "xl"}
      textAlign={props.textAlign ?? "center"}
    >
      {label}
    </Text>
  );
}
