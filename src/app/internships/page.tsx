import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "lucide-react";
import { type } from "os";

export default function Page() {

    type ListItem = {
        content:string
        condition:string
    }

const contents:ListItem[] = [
    {content:'職種', condition:'SNS運用/webライティング/分析/企画/セールス/コンサルティング'},
    {content:'特徴', condition:'週3日以下でもOK'},
    {content:'アクセス', condition:'渋谷駅　徒歩2分　梅田駅　徒歩5分'},
    {content:'業界', condition:'IT／コンサルティング／メディア／教育／広告／人材'},
    {content:'アクセス', condition:'【応相談】最低限3ヶ月から／1日3時間から／週2日から　【OK】土日出勤'},
    {content:'勤務条件', condition:'渋谷駅　徒歩2分　梅田駅　徒歩5分'},
    {content:'給料', condition:'部署より異なる（交通費：支給なし）'},
    {content:'必須・歓迎', condition:'【必須】自分なりの精一杯を出し切れる方／チームや顧客のために努力を楽しめる方'},
    {content:'身につくスキル', condition:'キャリア支援を行うお仕事のため、就活におけるリテラシーがかなり身に付きます／事業の0→1に携われるため、学べることは自分次第で無限にあります／毎月業務の振り返りを行い、アップデートしていく風土ですので、スキルと自信が身に付きます'}
]

    return (
    <div className="bg-gray-200 p-5 flex flex-col items-center">
        <div>
            <div className="font-semibold text-xl">長期インターンシップを探す</div>
            <div>
                <div className="font-semibold">職種からインターンシップを探す</div>
                <div className="grid grid-cols-3 gap-2 justify-items-start w-[480]">
                    <Button className="bg-white text-black rounded-full w-36">エンジニア</Button>
                    <Button className="bg-white text-black rounded-full w-36">デザイナー</Button>
                    <Button className="bg-white text-black rounded-full w-36">営業</Button>
                    <Button className="bg-white text-black rounded-full w-36">企画</Button>
                    <Button className="bg-white text-black rounded-full w-36">マーケティング</Button>
                    <Button className="bg-white text-black rounded-full w-36">編集/ライター</Button>
                </div>
            </div>
        </div>

        <div>
            <div>
                <div className="font-semibold">職種からインターンを探す</div>
                <div className="grid grid-cols-3 gap-2 justify-items-start w-[480]">
                    <Button className="bg-white text-black rounded-full w-36">週3日以下でもOK</Button>
                    <Button className="bg-white text-black rounded-full w-36">週4日以上歓迎</Button>
                    <Button className="bg-white text-black rounded-full w-36">1ヶ月からOK</Button>
                    <Button className="bg-white text-black rounded-full w-36">フルリモート可</Button>
                    <Button className="bg-white text-black rounded-full w-36">1・2年生歓迎</Button>
                    <Button className="bg-white text-black rounded-full w-36">英語力が身に付く</Button>
                </div>
            </div>
        </div>

        <div>
            <div className="font-semibold">エリアからインターンを探す</div>
            <div className="grid grid-cols-6 gap-2 justify-items-start w-[480]">
                <Button className="bg-white text-black rounded-full w-[224] col-start-1 col-sapan-3">東京都全域</Button>
                <Button className="bg-white text-black rounded-full w-[224] col-start-4 col-sapan-3">関西</Button>
                <Button className="bg-white text-black rounded-full w-36 col-start-1 col-sapan-2">渋谷</Button>
                <Button className="bg-white text-black rounded-full w-36 col-start-3 col-sapan-2">新宿</Button>
                <Button className="bg-white text-black rounded-full w-36 col-start-5 col-sapan-2">六本木・港区</Button>
                <Button className="bg-white text-black rounded-full w-36 col-start-1 col-sapan-2">東京・丸の内</Button>
                <Button className="bg-white text-black rounded-full w-36 col-start-3 col-sapan-2">品川</Button>
                <Button className="bg-white text-black rounded-full w-36 col-start-5 col-sapan-2">神奈川県</Button>
                <Button className="bg-white text-black rounded-full w-[472] col-start-1 col-sapan-6">東京と関西以外の地方</Button>
            </div>
        </div>

        <div>
            <div className="font-semibold">長期インターン探し成功の声</div>
            <Carousel className="w-full max-w-sm">
                <CarouselContent className="-ml-1">
                    {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                        <Card>
                            <CardTitle>
                                <div>株式会社サーキュレーションに内定</div>
                                <div>XX大学 経済学部 4年生 Aさん</div>
                            </CardTitle>
                            <CardContent className="flex aspect-square items-center justify-center p-1">
                                <div className="flex flex-col bg-[#75d3ca] text-xs">
                                    <div className="flex">
                                        <div>満足度</div>
                                        <div className="text-[#009688]">★★★★★</div>
                                    </div>
                                    <div>検索機能の使いやすさがよかったです</div>
                                </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

        <div>
            <div className="text-xl font-semibold">長期インターンシップ一覧</div>
            <div>
                <div className="font-semibold">全てのインターン</div>
                <Card className="w-[472]">
                    <CardHeader>
                        <CardTitle>
                            <div className="flex flex-row items-center">
                                <span className="bg-[#FF0000] p-1 text-white">Pickup</span>
                                <div className="text-[#009688]">株式会社サーキュレーション</div>
                            </div>
                            <div className="text-gray-400">1ヶ月前</div>
                            <a href="http://localhost:3000/internships/detail">【圧倒的成長をしたい学生求む！】起業家多数輩出急成長ベンチャーで、経営者層を相手に熱い仲間と企業課題を解決しよう！最強のガクチカをつくれる！</a>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <table>
                            <tbody className="text-xs">
                                {contents.map((content,index) => {
                                    return (
                                        <tr>
                                            <td className="w-24">{content.content}</td>
                                            <td>{content.condition}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </CardContent>
                    <CardFooter>
                        <div>
                            <Button className="rounded-full bg-white text-gray-400 border-2 h-[48] w-[298]">お気に入り追加</Button>
                        </div>
                        <div>
                            <Button className="rounded-full bg-[#009688] h-[48] w-[298]">このインターンシップを詳しく見る</Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </div>
    )

}
