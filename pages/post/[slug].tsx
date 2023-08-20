import { Inter } from "next/font/google";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ['latin'] })


export default function PostPage() {
    const router = useRouter();

    return (
        <main
            className={`max-w-5xl m-auto px-3 ${inter.className}`}
        >
            <h1>
                {router.query.slug}
            </h1>
            <div>
                Post page
            </div>
        </main>
    );
}