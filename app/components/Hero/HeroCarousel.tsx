import Carousel from "@/app/components/Carousel";
import HeroCard, { HeroCardProps } from "@/app/components/Hero/HeroCard";
import VotePromoCard from "@/app/components/Hero/VotePromoCard";

type Props = {
  items: HeroCardProps[];
};

const HeroCarousel: React.FC<Props> = ({ items }) => {
  return (
    <Carousel>
      {items.length > 0 && (
        <HeroCard key={`hero-${items[0].title}`} {...items[0]} />
      )}
      <VotePromoCard />
      {items.slice(1).map((item) => (
        <HeroCard key={`hero-${item.title}`} {...item} />
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
