"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export const Radio = ({ defaultValue, page }: {
    defaultValue: "all_skins" | "only_knight"
    page: number
}) => {

    const { push } = useRouter()

    return (
        <div className="flex items-center justify-between p-6">
            <RadioGroup
                defaultValue={defaultValue}
                className="flex items-center gap-4"
                onValueChange={(value) => push(`/?type=${value}&page=${page}`)}
            >
                <div className="flex items-center gap-3">
                    <RadioGroupItem
                        id="only_knight"
                        value="only_knight"
                    />
                    <Label htmlFor="only_knight">Only Knight</Label>
                </div>
                <div className="flex items-center gap-3">
                    <RadioGroupItem
                        id="all_skins"
                        value="all_skins"
                    />
                    <Label htmlFor="all_skins">All Skins</Label>
                </div>
            </RadioGroup>
            <form className={cn(
                "group w-1/3 flex items-center gap-2 border border-border rounded-lg p-2",
                "focus-within:ring-2 transition-colors"
            )}>
                <Button type="submit" variant="ghost">
                    <Search />
                </Button>
                <input
                    type="search"
                    placeholder="Search skins..."
                    className="w-full outline-none"
                />
            </form>
        </div>
    )
}
