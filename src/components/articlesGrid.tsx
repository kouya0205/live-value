import { Heart, MessageCircle, RefreshCw } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// const articles = [
//   {
//     id: 1,
//     title: "noteの記事にBlueskyとThreadsが埋め込めるようになりました",
//     thumbnail: "/placeholder.svg?height=200&width=400",
//     author: "note公式",
//     timeAgo: "5日前",
//     likes: "1,011",
//     official: true,
//   },
//   {
//     id: 2,
//     title: "Amazon Payで記事・マガジン購入が可能に！Amazonギフトカードがご利用可能です",
//     thumbnail: "/placeholder.svg?height=200&width=400",
//     author: "note公式",
//     timeAgo: "8日前",
//     likes: "696",
//     official: true,
//   },
// Add more articles as needed
// ]

export default function ArticleGrid({ articles }: { articles: any[] }) {
  console.log('articles', articles);
  return (
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
      {articles.data.contents.map((article) => (
        <Link href={`${article.noteUrl}`} key={article.id}>
          <article
            key={article.id}
            className="group relative rounded-lg border p-4 hover:bg-gray-50">
            <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
              <Image
                src={article.eyecatch || '/placeholder.svg'}
                alt={article.name}
                className="object-cover transition-transform group-hover:scale-105"
                fill
              />
            </div>
            <h3 className="line-clamp-2 text-lg font-semibold leading-tight mb-2">
              {article.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{article.user.name}</span>
              {article.official && (
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-600">
                  公式
                </span>
              )}
              <span>・</span>
              <span>{article.timeAgo}</span>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
              <button className="flex items-center gap-1 hover:text-gray-900">
                <Heart className="h-4 w-4" />
                <span>{article.likes}</span>
              </button>
              <button className="flex items-center gap-1 hover:text-gray-900">
                <MessageCircle className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-1 hover:text-gray-900">
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
