import { Skin } from "@/actions/get-skins"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

export const CardSkin = ({
    skin: {
        metadata: {
            author, name
        },
        imagePath
    }
}: { skin: Skin }) => {
    return (
        <Card className="justify-between cursor-pointer hover:scale-95 duration-200">
            <CardHeader>
                <CardTitle>
                    {name}
                </CardTitle>
                <CardDescription>
                    by {author}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image
                    src={`https://hkskins.art/${imagePath}`}
                    width={50}
                    height={50}
                    alt={name}
                    className="mx-auto"
                />
            </CardContent>
            <CardFooter>
                <CardAction className="w-full">
                    <Button className="w-full">
                        See more
                    </Button>
                </CardAction>
            </CardFooter>
        </Card>
    )
}
