import { ComponentProps } from "react"
import { CardTitle } from "./ui/card"

export const Title = (props: ComponentProps<typeof CardTitle>) => {
    return (
        <div className="flex items-center">
            <div className="w-full h-px bg-border" />
            <CardTitle
                className="mx-4 whitespace-nowrap text-3xl font-bold text-center"
                {...props}
            />
            <div className="w-full h-px bg-border" />
        </div>
    )
}
