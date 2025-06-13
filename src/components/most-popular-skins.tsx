import { Card, CardContent, CardHeader } from "./ui/card"
import { Title } from "./title"
import { Carousel } from "./carrosel"

export const MostPopular = async () => {
    return (
        <Card className="bg-transparent border-none">
            <CardHeader >
                <Title>
                    Most Popular Skins
                </Title>
            </CardHeader>
            <CardContent className="flex justify-center">
                <Carousel />
            </CardContent>
        </Card>
    )
}
