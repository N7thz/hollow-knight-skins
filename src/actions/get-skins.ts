"use server"

import { data as old_data } from "@/skins.json"
import { randomUUID } from "node:crypto"

export type Skin = typeof old_data[0]

type GetSkinsProps = {
    itens: number
    page?: number
}

export async function getSkins({ itens = 10, page = 1 }: GetSkinsProps) {

    const data = old_data.map((skin) => ({
        id: randomUUID(),
        ...skin,
    }))

    const skip = (page - 1) * itens
    const skins = data.slice(skip, skip + itens)
    const total_pages = Math.ceil(data.length / itens)
    const total_itens = data.length

    return {
        data: skins,
        itens,
        total_itens,
        page: page <= total_pages ? page : 1,
        total_pages,
    }
}