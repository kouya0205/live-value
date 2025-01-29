import Link from 'next/link';
import { Card } from '@/components/ui/card';

export function NewMessages({ messages }) {
  return (
    <Card className="mt-8 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">新着メッセージ</h2>
        <Link href="/messages" className="text-blue-500 hover:underline">
          すべてを見る
        </Link>
      </div>
      <div className="mt-4">
        {messages.length === 0 ? (
          <p className="text-gray-500">新着メッセージはありません</p>
        ) : (
          <ul className="space-y-4">
            {messages.map((message) => (
              <li key={message.id} className="border-b pb-4 last:border-0">
                {message.content}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
}
