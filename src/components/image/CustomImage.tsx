import { Image, Skeleton } from "@arco-design/web-react";
import React from "react";

interface Props {
  img: string;
  width: number;
}
export const CustomImage = ({ img, width }: Props) => {
  return (
    <Image
      width={width}
      src={img}
      alt="lamp"
      lazyload={{ threshold: 0.5 }}
      loader={
        <Skeleton
          image={{ style: { width: width, height: width } }}
          text={false}
          animation
        />
      }
    />
  );
};
