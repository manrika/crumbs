import Carousel from "@/app/components/Carousel";
import HeroCard, { HeroCardProps } from "@/app/components/Hero/HeroCard";

type Props = {
  items: HeroCardProps[];
};

const HeroCarousel: React.FC<Props> = ({ items }) => {
  return (
    <Carousel>
      {items.map((item) => (
        <HeroCard key={`hero-${item.title}`} {...item} />
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
