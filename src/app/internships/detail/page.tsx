import { Card, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {

    type ListItem = {
        content:string
        condition:string
    }
    const conditions:ListItem[] = [
        {content: '最低1ヶ月から', condition:'応相談'},
        {content: '週1日から', condition:'応相談'},
        {content: '土日の出勤', condition:'不可'},
        {content: 'リモート勤務', condition:'不可'},
        {content: '海外からの勤務', condition:'不可'}
    ]

    const experiments:ListItem[] = [
        {content: '大学1年生～大学4年生、大学院生も歓迎', condition:'必須'},
        {content: 'チームで協力し積極的に学べる方', condition:'必須'},
        {content: 'チャレンジ意欲の高い方', condition:'必須'},
        {content: '営業・ビジネスに興味がある方', condition:'歓迎'},
        {content: '企業でのインターンシップ未経験も歓迎', condition:'歓迎'}
    ]

    const renderList = (items: ListItem[]) => {
        <ul>
        {items.map((item, index) => {
            return (
                <li key={index} className="border-b-red-500">
                    <span>{item.content}</span>
                    <span>{item.condition}</span>
                </li>
            )
        })}
        </ul>
    }

    return(
    <>
        <div className="bg-gray-300 pt-32">
            <div className="bg-white mx-32">
                <div className="text-xl m-5 font-bold">
                【圧倒的成長をしたい学生求む！】起業家多数輩出急成長ベンチャーで、経営者層を相手に熱い仲間と企業課題を解決しよう！最強のガクチカをつくれる！ - 株式会社サーキュレーションの長期・有給インターンシップ
                </div>
                <div className="mx-5">
                    株式会社サーキュレーション
                </div>
                <a href="https://circu.co.jp/" className="text-gray-500 mx-5">https://circu.co.jp/</a>
                <div className="flex-col mx-5">
                    <div>東京都東京都渋谷区神宮前</div>
                    <div>応募対応時間</div>
                    <div>応募対応率</div>
                    <div>評価実施率</div>
                </div>
            </div>

            <div className="bg-white mx-32 mb-20">
                <div>
                    <h2 className="font-bold">インターン勤務条件</h2>
                    {conditions.map((cond, index) => {
                        return(
                        <li className="border-b border-gray-400 w-60" key={index}>{cond.content} {cond.condition}</li>
                    )
                    })}
                </div>
                <div>
                    <h2 className="font-bold">必須経験と歓迎経験</h2>
                    {conditions.map((cond, index) => {
                        return(
                        <li className="border-b border-gray-400 w-60" key={index}>{cond.content} {cond.condition}</li>
                    )
                    })}
                </div>
                <div className="mt-10 flex flex-col gap-4 items-center">
                    <div>
                        <button className="rounded-l-full bg-[#00695c] h-[48] w-[62] text-white font-bold">無料</button>
                        <button className="rounded-r-full bg-[#009688] h-[48] w-[236] text-white font-bold">応募画面へ</button>
                    </div>
                    <div>
                        <button className="rounded-full border-2 h-[48] w-[298]">お気に入り追加</button>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold">株式会社サーキュレーションってどんな会社？</h2>
                    <h4>目指していること</h4>
                    <p>
                        ■ビジョン：「世界中の経験・知見が循環する社会の創造」
                        <br />
                        ■社名の由来：CIRCULATION（サーキュレーション） ＝ 循環
                        <br />
                        企業や組織の成り立ちは様々ですが、私たちにはまず初めに、実現したい未来がありました。少子高齢化による労働力の減少に始まり、シニア世代の働き方、産後女性の復職、中小企業の事業承継問題など、日本は国の経済発展において多くの課題を抱えています。従来の企業と個人が「雇用」という形で繋がるというあり方では、これらの課題に対応することが困難な状況になってきています。また、世界に目を向けると、貧困や紛争など課題はより深刻です。生まれた国や環境によって教育や機会の格差が生まれてしまう。そんな不平等・不条理も解決していきたいと考えました。
                    </p>
                    <h4>事業内容</h4>
                    <p>
                        当社は「世界中の経験・知見が循環する社会の創造」をビジョンに掲げ、「知のめぐりをよくする。」をコンセプトに、プロシェアリング事業を提供しています。
                        <br />
                        「プロシェアリング」とは、経験・知見をベースに複数企業で同時に活躍する外部のプロ人材の支援を受け、企業を成長させていく新しい成長戦略です。
                    </p>
                    <h2 className="font-semibold">このインターンですること</h2>
                </div>
                <div>
                    <h2 className="font-semibold">このインターンで身につくスキル</h2>
                    {conditions.map((cond, index) => {
                        return(
                        <li key={index}>{cond.content} {cond.condition}</li>
                    )
                    })}
                </div>
                <div>
                    <h2 className="font-semibold">インターン選考で重視すること</h2>
                    {conditions.map((cond, index) => {
                        return(
                        <li key={index}>{cond.content} {cond.condition}</li>
                    )
                    })}
                </div>
                <div>
                    <h2 className="font-semibold">社員からのメッセージ</h2>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <div>
                            <span>山田　太郎</span>
                            <span>チームマネージャー</span>
                        </div>
                        <div>
                            『社会で通用するスキルを、同世代と差をつけ、最速で身につけたい』あなたへ。 サーキュレーションのサービスである「プロシェアリング」は企業の経営課題の本質的な部分を解決するサービスです。 故に、経営者や取締役といったキーマンと直接関わる機会が多く、ビジネスの現場感を肌で感じることができるので、20代で圧倒的な成長がしたい！将来は起業したい！と思っている皆様には良い学び・経験ができると思います。
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold">その他のインターン条件</h2>
                        {conditions.map((cond, index) => {
                            return(
                            <li key={index}>{cond.content} {cond.condition}</li>
                        )
                        })}
                    </div>
                    <div>
                        <div>
                            <button className="rounded-l-lg bg-green-900 w-32 text-white font-bold">無料</button>
                            <button className="rounded-r-lg bg-green-500 w-32 text-white font-bold">応募画面へ</button>
                        </div>
                        <button>お気に入り追加</button>
                    </div>
                </div>
            </div>
            <div className="ml-32 mr-32">
                <div>
                    <h2>質問</h2>
                    <div>
                        質問を受け付けています
                    </div>
                    <button>質問を投稿する</button>
                    <div className="text-xs">質問を投稿するにはログインが必要です</div>
                </div>
            </div>

            <div className="ml-32 mr-32">
                <div>無料</div>
                <div className="text-xs">カンタン！フォームに入力するだけ</div>
                <div>このインターンに応募する</div>
                <div>アカウントをお持ちの方はここからログイン</div>
                <div>残り4ステップで完了</div>
            </div>
        </div>
    </>
    )
}
