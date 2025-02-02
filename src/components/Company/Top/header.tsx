import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function Header() {
    return (
        <header className="border-b">
            <div className="container mx-auto px-4 pt-4 h-16 flex items-center justify-between">
                <Image
                    src="/images/top/6.webp"
                    alt="Next.js 15 Banner"
                    width={150}
                    height={75}
                    className="rounded-lg"
                />

                <div className="flex-1 max-w-xl px-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input className="w-full pl-10" placeholder="キーワードで検索" type="search" />
                    </div>
                </div>

            <div className="flex items-center gap-4">
                <Button>プロフィールの詳細を見る</Button>
                <Button>選考オファーを出す</Button>
            </div>
        </div>
    </header>
    )
}

