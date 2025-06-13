"use client"

import {
    Calendar,
} from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { useState, useEffect } from "react"
import { SkinWithId } from "./all-skins"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"

export const SearchSkin = ({ data }: { data: SkinWithId[] }) => {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <>
            <p className="text-muted-foreground text-sm">
                Press{" "}
                <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
                    <span className="text-xs">⌘</span>J
                </kbd>
            </p>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Skins">
                        {
                            data.map(({ id, imagePath, metadata: { name } }) => (
                                <CommandItem key={id}>
                                    <Card className="bg-transparent border-none">
                                        <CardContent>
                                            <Image
                                                width={36}
                                                height={36}
                                                src={`https://hkskins.art/${imagePath}`}
                                                alt="image-icon"
                                            />
                                        </CardContent>
                                    </Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl whitespace-nowrap">
                                            {name}
                                        </CardTitle>
                                    </CardHeader>
                                </CommandItem>
                            ))
                        }
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
