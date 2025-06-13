import {
    Carousel as CaroselRoot,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { getMostPopularSkins } from "@/actions/get-most-popular-skins"
import { CardSkin } from "./card-skin"

export const Carousel = () => {

    const { data } = getMostPopularSkins()

    return (
        <CaroselRoot className="w-full max-w-6xl">
            <CarouselContent>
                {
                    data.map(skin => (
                        <CarouselItem
                            key={skin.id}
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <CardSkin skin={skin} />
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </CaroselRoot>
    )
}