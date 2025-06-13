"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRouter } from "next/navigation"
import { SearchSkin } from "./search-skin"
import { SkinWithId } from "./all-skins"

export const Radio = ({ defaultValue, page, data }: {
    defaultValue: "all_skins" | "only_knight"
    page: number
    data: SkinWithId[]
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
            <SearchSkin data={data} />
        </div>
    )
}
