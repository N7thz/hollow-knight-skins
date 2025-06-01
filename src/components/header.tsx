import { ModeToggle } from "@/components/mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Ellipsis } from "lucide-react"
import Link from "next/link"

export const Header = () => {
    return (
        <header className="h-18 p-4 flex justify-between items-center border-b border-border z-10">
            <Link href={"/"} className="flex items-center gap-2">
                <Avatar>
                    <AvatarImage src="/knight-icon.png" alt="knight-icon.png" />
                    <AvatarFallback>
                        <Ellipsis />
                    </AvatarFallback>
                </Avatar>
                <h1>
                    Hollow Skins
                </h1>
            </Link>
            <ModeToggle />
        </header>
    )
}
