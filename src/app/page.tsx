import { getSkins } from "@/actions/get-skins"
import { z } from "zod"
import { Header } from "@/components/header"
import { CardSkin } from "@/components/card-skin"
import { ScrollArea } from "@/components/ui/scroll-area"

const SearchParamsSchema = z.object({
  itens: z.string().default("10").transform(Number),
  page: z.string().default("1").transform(Number),
})

export default async function Home({ searchParams, }: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

  const {
    itens, page
  } = await searchParams.then(params => SearchParamsSchema.parse(params))

  const skins = await getSkins({ itens, page })

  return (
    <div className="h-dvh">
      <Header />
      <ScrollArea
        type="hover"
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto"
      >
        <main className="p-6 grid grid-cols-5 gap-4">
          {
            skins.data.map(skin => <CardSkin key={skin.id} skin={skin} />)
          }
        </main>
      </ScrollArea>
    </div>
  )
}