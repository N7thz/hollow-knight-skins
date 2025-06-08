"use server"

import { SearchParamsProps } from "@/app/page"
import { data as old_data } from "@/skins.json"
import { randomUUID } from "node:crypto"

export type Skin = typeof old_data[0]

export async function getSkins({ itens, page = 1, type }: SearchParamsProps) {

    const data = old_data.map((skin) => ({
        id: randomUUID(),
        ...skin,
    }))

    const skinsWithType = type === "all_skins"
        ? data
        : data.filter(skin => skin.metadata.type === "character")

    const skip = (page - 1) * itens
    const skins = skinsWithType.slice(skip, skip + itens)
    const total_pages = Math.ceil(skinsWithType.length / itens)
    const total_itens = skinsWithType.length

    return {
        data: skins,
        itens,
        total_itens,
        page: page <= total_pages ? page : 1,
        total_pages,
    }
}