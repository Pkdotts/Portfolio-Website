import NextImage from "next/image";
import { Image } from "@mantine/core";
import pkCall from "../../../../public/PkCall.gif";

export function PkSpriteCall() {
  return (
    <Image
      component={NextImage}
      className="pixel-img"
      src={pkCall}
      alt="A two frame gif of two anthropomorphic silhouettes of coyotes talking on the phone while looking away from each other."
      fit="contain"
    />
  );
}
