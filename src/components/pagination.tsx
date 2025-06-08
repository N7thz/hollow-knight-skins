import {
    Pagination as PaginationRoot,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

type PaginationProps = {
    page: number,
    total_pages: number,
    type: "all_skins" | "only_knight"
}

export const Pagination = ({ page, type, total_pages }: PaginationProps) => {
    return (
        <PaginationRoot>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href={
                            page > 1
                                ? `/?type=${type}&page=${page - 1}`
                                : `/?type=${type}&page=${page}`
                        } />
                </PaginationItem>
                <PaginationItem>
                    {
                        page > 1 && (
                            <PaginationLink
                                href={`/?type=${type}&page=${page - 1}`}
                            >
                                {page - 1}
                            </PaginationLink>
                        )
                    }
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href={""} isActive>
                        {page}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    {
                        page < total_pages && (
                            <PaginationLink
                                href={`/?type=${type}&page=${page + 1}`}
                            >
                                {page + 1}
                            </PaginationLink>
                        )
                    }
                </PaginationItem>
                {
                    page != total_pages && (
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    )
                }
                <PaginationItem>
                    <PaginationNext href={
                        page === total_pages
                            ? `/?type=${type}&page=${page}`
                            : `/?type=${type}&page=${page + 1}`
                    } />
                </PaginationItem>
            </PaginationContent>
        </PaginationRoot>
    )
}