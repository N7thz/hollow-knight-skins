import { getSkins } from "@/actions/get-skins"
import { z } from "zod"
import { Header } from "@/components/header"
import { CardSkin } from "@/components/card-skin"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Radio } from "@/components/radio"
import { Pagination } from "@/components/pagination"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { redirect } from "next/navigation"
import { AllSkins } from "@/components/all-skins"
import { HighLightSkins } from "@/components/high-light-skins"
import { Separator } from "@/components/ui/separator"

const SearchParamsSchema = z.object({
  itens: z.string().default("20").transform(Number),
  page: z.string().default("1").transform(Number),
  type: z.enum(["all_skins", "only_knight"]).default("all_skins"),
})

export type SearchParamsProps = z.infer<typeof SearchParamsSchema>

export default async function Home({ searchParams, }: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

  const {
    itens, page, type
  } = await searchParams.then(params => SearchParamsSchema.parse(params))

  console.log(page)

  const { data, total_pages } = await getSkins({ itens, page, type })

  if (page > total_pages) {
    redirect(`/?type=${type}&page=${total_pages}`)
  }

  return (
    <main className="flex-1">
      <Header />
      <ScrollArea
        type="hover"
        className="h-[calc(100dvh-4.5rem)]"
      >
        <Radio
          page={page}
          defaultValue={type}
        />
        <HighLightSkins />
        <div className="w-14/15 bg-border h-px mx-auto" />
        <AllSkins
          data={data}
          type={type}
        />
        <footer>
          <div className="flex justify-center items-center p-4">
            <span className="text-sm text-muted-foreground">
              Page {page} of {total_pages}
            </span>
          </div>
        </footer>
        <Pagination
          type={type}
          page={page}
          total_pages={total_pages}
        />
      </ScrollArea>
    </main>
  )
}