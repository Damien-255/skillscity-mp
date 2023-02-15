import BookGrid from "@/components/books/books-grid";
import Header from "@/components/shared/header";
import Link from "next/link";
import Footer from "@/components/shared/footer";
import Content from "@/components/shared/content";

export default function BOOKsPage() {
    return (
        <div className="w-full">
            <Header name="Books"/>

            <Content>
                <div className="w-full max-w-6xl mx-auto mt-8">
                     <BookGrid />
                </div>
            </Content>

            

            <Footer title="Home page" href="/"/>
        </div>
    );
}