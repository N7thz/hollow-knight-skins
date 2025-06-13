import { getSkins } from "@/actions/get-skins"
import { z } from "zod"
import { Header } from "@/components/header"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Radio } from "@/components/radio"
import { Pagination } from "@/components/pagination"
import { redirect } from "next/navigation"
import { AllSkins } from "@/components/all-skins"
import { MostPopular } from "@/components/most-popular-skins"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getAllSkins } from "@/actions/get-all-skins"

const SearchParamsSchema = z.object({
  itens: z
    .string()
    .default("20")
    .transform(Number),
  page: z
    .string()
    .default("1")
    .transform(Number),
  type: z
    .enum(["all_skins", "only_knight"])
    .default("all_skins"),
})

export type SearchParamsProps = z.infer<typeof SearchParamsSchema>

export default async function Home({ searchParams, }: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

  const {
    itens, page, type
  } = await searchParams.then(params => SearchParamsSchema.parse(params))


  const { data, total_pages } = await getSkins({ itens, page, type })
  const { data: allSkins } = await getAllSkins()

  if (page > total_pages) redirect(`/?type=${type}&page=${total_pages}`)

  return (
    <main className="flex-1">
      <Header />
      <ScrollArea
        type="hover"
        className="h-[calc(100dvh-4.5rem)]"
      >
        <Radio
          data={allSkins}
          page={page}
          defaultValue={type}
        />
        <MostPopular />
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
        <Separator className="mt-8" />
        <Card className="bg-transparent border-none mt-4">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-center">
              Also watch the video if you want a preview of the skins
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <iframe
              src="https://www.youtube.com/embed/dLeIhrpQ1Lg?si=S56BnKN4kQZ1NkoI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full h-64 rounded-xl"
            />
          </CardFooter>
        </Card>
      </ScrollArea>
    </main>
  )
}