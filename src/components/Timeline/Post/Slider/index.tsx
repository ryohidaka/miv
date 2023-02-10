import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import { CommonImage } from "@/components/Common/Image";

import { Image } from "@/types/image";

type Props = {
  images: Image[];
};

/**
 * スライダー
 * @param images
 * @returns
 */
export const ImageSlider = ({ images }: Props) => {
  const options: Options = { gap: ".1rem", lazyLoad: "sequential" };
  const filteredImages = images.filter((image) => typeof image !== "undefined");

  return (
    <Splide options={options}>
      {filteredImages.map((image) => (
        <SplideSlide key={image.id}>
          <CommonImage image={image} />
        </SplideSlide>
      ))}
    </Splide>
  );
};
