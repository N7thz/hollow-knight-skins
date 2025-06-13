import { data as old_data } from "@/skins.json"
import { randomUUID } from "node:crypto"

export async function getAllSkins() {

    const data = old_data.map(skin => ({
        id: randomUUID(),
        ...skin,
    }))

    return { data }
}