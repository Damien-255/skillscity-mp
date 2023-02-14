import BookGrid from "@/components/books/books-grid";
import Link from "next/Link";

export default function BOOKsPage() {
    return (
        <div className="bg-green-100">
            Books page

            <BookGrid />

            <div>
                <Link href="/">
                    Go to home page 
                </Link>
            </div>
        </div>

    )

}