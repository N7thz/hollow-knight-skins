import { data as old_data } from "@/most_popular_skins.json"
import { randomUUID } from "node:crypto"

export function getMostPopularSkins() {

    const data = old_data.map(skin => ({
        id: randomUUID(),
        ...skin,
    }))

    return { data }
}