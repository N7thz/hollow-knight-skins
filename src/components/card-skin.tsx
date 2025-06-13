import { Skin } from "@/actions/get-skins"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { Link2 } from "lucide-react"

export const CardSkin = ({
    skin: {
        metadata: {
            author, name, source
        },
        imagePath
    }
}: { skin: Skin }) => {
    return (
        <Card
            className="justify-between cursor-pointer duration-200 drop-shadow-xl border-secondary max-w-xs"
        >
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
            <CardFooter >
                <Link
                    href={source}
                    target="_blank"
                    className="w-full"
                >
                    <Button
                        className="w-full cursor-pointer hover:scale-95"
                        variant="default"
                    >
                        <Link2 />
                        View Source
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
