import Carousel from "@/app/components/Carousel";
import FlavourCard from "@/app/components/Flavours/FlavourCard";
import { Flavour } from "@/app/types";

type Props = {
  title: string;
  flavours: Flavour[];
};

const FlavoursCarousel: React.FC<Props> = ({ title, flavours }) => {
  return (
    <Carousel title={title}>
      {flavours.map((flavour) => (
        <FlavourCard key={`flavour-${flavour.id}`} {...flavour} />
      ))}
    </Carousel>
  );
};

export default FlavoursCarousel;
