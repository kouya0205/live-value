import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Link from "next/link"

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

    const skills:ListItem[] = [
        {content: '実践を通した顧客とのコミュニケーション力や課題解決能力', condition:'★★★★★'},
        {content: 'あらゆる経営課題に対応できる業界知識', condition:'★★★★★'},
        {content: '企業経営者やキーマンとの直接交渉・対話の機会を得られる', condition:'★★★★★'},
        {content: '起業経験のある先輩社員や有名起業出身社員と出会える・一緒に働ける', condition:'★★★★★'}
    ]

    return(
    <>
        <div className="bg-gray-300 pt-32">
            <div className="bg-white ml-32 mr-[720] py-5">
                <div className="text-xl ml-5 mr-32 font-bold">
                【圧倒的成長をしたい学生求む！】起業家多数輩出急成長ベンチャーで、経営者層を相手に熱い仲間と企業課題を解決しよう！最強のガクチカをつくれる！
                </div>
                <div className="m-5 flex flex-row">
                    <Image src="/images/internships/circu.png" alt="circu"width={100} height={100} className="border"/>
                    <div className="flex flex-col">
                        <div className="mx-5 text-[#009688] font-bold text-lg">
                            株式会社サーキュレーション
                        </div>
                        <Link href="https://circu.co.jp/" className="text-gray-500 mx-5 text-xs">https://circu.co.jp/</Link>
                    </div>
                </div>
                <div className="flex flex-col mx-5 gap-1">
                    <div className="text-xs">東京都東京都渋谷区神宮前</div>
                    <div className="text-xs">応募対応時間</div>
                    <div className="text-xs">応募対応率</div>
                    <div className="text-xs">評価実施率</div>
                </div>
                <div className="flex justify-center pt-5">
                    <Image src="/images/internships/main.jpg" alt="main" height={1000} width={1000}/>
                </div>
            </div>

            <div className="bg-white ml-32 mr-[720] mb-20">
                <div className="p-5 flex flex-col gap-2">
                    <h2 className="font-bold">インターン勤務条件</h2>
                    {conditions.map((cond, index) => {
                        return(
                        <li className="list-none border-b border-gray-400 w-[720] flex flex-row justify-between" key={index}>
                            <div>{cond.content}</div>
                            <div>{cond.condition}</div>
                        </li>
                    )
                    })}
                </div>
                <div className="m-5 flex flex-col gap-2">
                    <h2 className="font-bold">必須経験と歓迎経験</h2>
                    {experiments.map((cond, index) => {
                        return(
                        <li className="list-none border-b border-gray-400 w-[720] flex flex-row justify-between" key={index}>
                            <div>{cond.content}</div>
                            <div>{cond.condition}</div>
                        </li>
                    )
                    })}
                </div>
                    <div className="mt-10 flex flex-col gap-2 items-center">
                        <div className="flex flex-row text-sm">
                            <div className="font-bold">プロフィール</div>
                            <div>だけで</div>
                            <div className="font-bold text-[#009688]">カンタン応募</div>
                        </div>
                        <div>
                            <Button className="rounded-l-full bg-[#00695c] h-[48] w-[62] text-white font-bold">無料</Button>
                            <Button className="rounded-r-full bg-[#009688] h-[48] w-[236] text-white font-bold">応募画面へ</Button>
                        </div>
                        <div>
                            <Button className="rounded-full border-2 h-[48] w-[298]">お気に入り追加</Button>
                        </div>
                    </div>
                <div className="m-5">
                    <h2 className="font-semibold">株式会社サーキュレーションってどんな会社？</h2>
                    <h4 className="font-semibold">目指していること</h4>
                    <p>
                        ■ビジョン：「世界中の経験・知見が循環する社会の創造」
                        <br />
                        ■社名の由来：CIRCULATION（サーキュレーション） ＝ 循環
                        <br />
                        企業や組織の成り立ちは様々ですが、私たちにはまず初めに、実現したい未来がありました。少子高齢化による労働力の減少に始まり、シニア世代の働き方、産後女性の復職、中小企業の事業承継問題など、日本は国の経済発展において多くの課題を抱えています。従来の企業と個人が「雇用」という形で繋がるというあり方では、これらの課題に対応することが困難な状況になってきています。また、世界に目を向けると、貧困や紛争など課題はより深刻です。生まれた国や環境によって教育や機会の格差が生まれてしまう。そんな不平等・不条理も解決していきたいと考えました。
                    </p>
                    <h4 className="font-semibold">事業内容</h4>
                    <p>
                        当社は「世界中の経験・知見が循環する社会の創造」をビジョンに掲げ、「知のめぐりをよくする。」をコンセプトに、プロシェアリング事業を提供しています。
                        <br />
                        「プロシェアリング」とは、経験・知見をベースに複数企業で同時に活躍する外部のプロ人材の支援を受け、企業を成長させていく新しい成長戦略です。
                    </p>
                    <h2 className="font-semibold">このインターンですること</h2>
                </div>
                <div className="m-5 flex flex-col gap-2">
                    <h2 className="font-semibold">このインターンで身につくスキル</h2>
                    {skills.map((cond, index) => {
                        return(
                        <li className="list-none border-b border-gray-400 w-[720] flex flex-row justify-between" key={index}>
                            <div>{cond.content}</div>
                            <div className="text-yellow-400">{cond.condition}</div>
                        </li>
                    )
                    })}
                </div>
                <div className="m-5 flex flex-col gap-2">
                    <h2 className="font-semibold">インターン選考で重視すること</h2>
                    {skills.map((cond, index) => {
                        return(
                        <li className="list-none border-b border-gray-400 w-[720] flex flex-row" key={index}>
                            <div>{cond.content}</div>
                        </li>
                    )
                    })}
                </div>
                <div className="mx-5">
                    <h2 className="font-semibold">社員からのメッセージ</h2>
                    <div className="flex flex-row">
                        <div>
                            <img src="/images/internships/worker.jpg" alt="worker" width={70} height={70} className="rounded-full"/>
                        </div>
                        <div className="flex flex-col ml-5">
                            <div>
                                <span className="font-bold">山田　太郎</span>
                                <span>／チームマネージャー</span>
                            </div>
                            <div className="w-[900] bg-gray-200 p-3 text-sm">
                                『社会で通用するスキルを、同世代と差をつけ、最速で身につけたい』あなたへ。 サーキュレーションのサービスである「プロシェアリング」は企業の経営課題の本質的な部分を解決するサービスです。 故に、経営者や取締役といったキーマンと直接関わる機会が多く、ビジネスの現場感を肌で感じることができるので、20代で圧倒的な成長がしたい！将来は起業したい！と思っている皆様には良い学び・経験ができると思います。
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-5 pb-5">
                    <div>
                        <h2 className="font-semibold">その他のインターン条件</h2>
                        {conditions.map((cond, index) => {
                            return(
                            <li key={index}>{cond.content} {cond.condition}</li>
                        )
                        })}
                    </div>
                    <div className="mt-10 flex flex-col gap-2 items-center">
                        <div className="flex flex-row text-sm">
                            <div className="font-bold">プロフィール</div>
                            <div>だけで</div>
                            <div className="font-bold text-[#009688]">カンタン応募</div>
                        </div>
                        <div>
                            <Button className="rounded-l-full bg-[#00695c] h-[48] w-[62] text-white font-bold">無料</Button>
                            <Button className="rounded-r-full bg-[#009688] h-[48] w-[236] text-white font-bold">応募画面へ</Button>
                        </div>
                        <div>
                            <Button className="rounded-full border-2 h-[48] w-[298]">お気に入り追加</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-32 mr-[720] bg-white">
                <div className="mx-5">
                    <h2 className="font-bold">株式会社サーキュレーションへの質問</h2>
                    <div className="flex justify-center text-[#009688] text-sm">
                        質問を受け付けています！
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Button className="rounded-full border-2 border-[#009688] h-[48] w-[298] text-[#009688]">質問を投稿する</Button>
                        <div className="text-xs">質問を投稿するにはログインが必要です</div>
                    </div>
                </div>
            </div>

            <div className="ml-32 mr-[720]">
                <div className="flex flex-row items-center justify-center bg-[#009688] rounded-t-2xl h-14">
                    <div className="rounded-full bg-[#00695c] text-white w-12 h-12 place-content-center font-semibold flex items-center justify-center">
                        <p>無料</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-xs text-white">カンタン！フォームに入力するだけ</div>
                        <div className="text-white">このインターンに応募する</div>
                    </div>
                </div>
                <div className="bg-white rounded-b-2xl">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-row items-center">
                            <div className="flex justify-start">
                                <div className="bg-[#FF0000] h-4 w-10 text-xs text-white flex items-center justify-center">
                                    <p>必須</p>
                                </div>
                            </div>
                            <div>名前</div>
                        </div>
                        <Textarea placeholder="山田　太郎" className="w-96"></Textarea>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex flex-row items-center">
                            <div className="bg-[#FF0000] h-4 w-10 text-xs text-white flex items-center justify-center">
                                <p>必須</p>
                            </div>
                            <div>性別</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
