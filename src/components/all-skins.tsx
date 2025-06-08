import { Skin } from "@/actions/get-skins"
import { CardSkin } from "./card-skin"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"

type SkinWithId = Skin & {
    id: string
}

export const AllSkins = ({ data, type }: {
    data: SkinWithId[],
    type: "all_skins" | "only_knight"
}) => {
    return (
        <Card className="bg-transparent border-none">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                    {type === "all_skins" ? "All Skins" : "Knight Skins"}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6 grid grid-cols-5 gap-4">
                {
                    data.map(skin => <CardSkin key={skin.id} skin={skin} />)
                }
            </CardContent>
        </Card>
    )
}
