import { Inter } from "next/font/google";
const inter = Inter({ subsets: ['latin'] })

export default function PostPage() {
    return (

        <main
            className={`max-w-5xl m-auto px-3 ${inter.className}`}
        >
            <div>
                Post page
            </div>
        </main>
    );
}