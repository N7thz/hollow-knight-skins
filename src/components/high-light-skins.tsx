import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"

export const HighLightSkins = () => {
    return (
        <Card className="bg-transparent border-none">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                    High Light Skins
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6 grid grid-cols-5 gap-4">

            </CardContent>
        </Card>
    )
}
