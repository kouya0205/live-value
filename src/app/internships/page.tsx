import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Page() {

    type ListItem = {
        content:string
        condition:string
    }
    type ReviewList = {
        title:string
        student:string
        satisfaction:string
        review:string
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

    const placeContents:ListItem[] = [
        {content:'東京都', condition:'485'},
        {content:'渋谷', condition:'201'},
        {content:'新宿', condition:'94'},
        {content:'六本木・港区', condition:'66'},
        {content:'東京・丸の内', condition:'88'},
        {content:'品川', condition:'36'},
        {content:'神奈川県', condition:'37'},
        {content:'関西', condition:'58'},
        {content:'大阪府', condition:'52'},
        {content:'京都府', condition:'6'},
        {content:'その他（国内）', condition:'80'},
        {content:'海外', condition:'3'}
    ]

    const jobContents:ListItem[] = [
        {content:'エンジニア', condition:'59'},
        {content:'デザイナー', condition:'10'},
        {content:'営業', condition:'280'},
        {content:'企画', condition:'105'},
        {content:'マーケティング', condition:'220'},
        {content:'編集/ライター', condition:'37'},
        {content:'コーポレートスタッフ', condition:'17'},
        {content:'その他', condition:'55'}
    ]

    const workContents:ListItem[] = [
        {content:'週3日以下でもOK', condition:'383'},
        {content:'週4日以上歓迎', condition:'76'},
        {content:'1ヶ月からOK', condition:'122'},
        {content:'フルリモート可', condition:'110'},
        {content:'一部リモート可', condition:'282'},
        {content:'未経験歓迎', condition:'650'},
        {content:'1・2年生歓迎', condition:'687'},
        {content:'3年生歓迎', condition:'610'},
        {content:'4年生歓迎', condition:'305'},
        {content:'志望動機不要', condition:'480'},
        {content:'新規事業立ち上げ', condition:'397'},
        {content:'理系学生にオススメ', condition:'188'},
        {content:'外資系', condition:'60'},
        {content:'ベンチャー', condition:'634'},
        {content:'内定実績多数', condition:'372'},
        {content:'エリート社員', condition:'214'},
        {content:'社長直下', condition:'395'},
        {content:'起業ノウハウが身に付く', condition:'359'},
        {content:'インセンティブ/成果報酬あり', condition:'316'},
        {content:'英語力が身に付く', condition:'45'},
        {content:'留学生歓迎', condition:'66'},
        {content:'土日だけでもOK', condition:'155'},
        {content:'高時給/高収入', condition:'140'},
        {content:'女性にオススメ', condition:'256'},
        {content:'積極採用中', condition:'189'},
        {content:'SGDsに貢献', condition:'94'}
    ]

    const careerContents:ListItem[] = [
        {content:'IT', condition:'543'},
        {content:'VC/起業支援', condition:'112'},
        {content:'ゲーム', condition:'43'},
        {content:'コンサルティング', condition:'431'},
        {content:'スポーツ', condition:'23'},
        {content:'ファッション/アパレル', condition:'52'},
        {content:'ブライダル', condition:'17'},
        {content:'メーカー', condition:'70'},
        {content:'メディア', condition:'300'},
        {content:'教育', condition:'141'},
        {content:'金融', condition:'73'},
        {content:'広告', condition:'353'},
        {content:'商社', condition:'117'},
        {content:'人材', condition:'272'},
        {content:'医療', condition:'46'},
        {content:'農業', condition:'19'},
        {content:'不動産', condition:'108'},
        {content:'士業', condition:'25'},
        {content:'旅行/レジャー/エンタメ', condition:'70'},
        {content:'食', condition:'42'},
        {content:'官公庁', condition:'9'},
        {content:'その他', condition:'105'}
    ]

    const reviewList:ReviewList[] = [
        {title:'株式会社サーキュレーションに内定', student:'XX大学 経済学部 4年生 Aさん', satisfaction:'★★★★★',review:'検索機能の使いやすさが良かったです'},
        {title:'株式会社サーキュレーションに内定', student:'XX大学 教育学部 4年生 Bさん', satisfaction:'★★★★★',review:'企業側と連絡が取りやすかった'},
        {title:'株式会社サーキュレーションに内定', student:'XX大学 工学部 4年生 Cさん', satisfaction:'★★★★★',review:'求人が多かった'},
        {title:'株式会社サーキュレーションに内定', student:'XX大学 医学部 4年生 Dさん', satisfaction:'★★★★★',review:'自己紹介機能が便利だった'},
        {title:'株式会社サーキュレーションに内定', student:'XX大学 理学部 4年生 Eさん', satisfaction:'★★★★★',review:'サイトが見やすかった'},
    ]

    return (
    <div className="bg-gray-200 p-5 flex flex-col items-center">
        <div className="flex">
            <div className="w-[800]">
                <div className="font-semibold text-xl">長期インターンシップを探す</div>
                <div>
                    <div className="flex justify-between w-[720]">
                        <div className="font-semibold">職種からインターンを探す</div>
                        <div>一覧で見る</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 justify-items-start w-[720]">
                        <Button className="bg-white text-black rounded-full w-[240]">エンジニア</Button>
                        <Button className="bg-white text-black rounded-full w-[240]">デザイナー</Button>
                        <Button className="bg-white text-black rounded-full w-[240]">営業</Button>
                        <Button className="bg-white text-black rounded-full w-[240]">企画</Button>
                        <Button className="bg-white text-black rounded-full w-[240]">マーケティング</Button>
                        <Button className="bg-white text-black rounded-full w-[240]">編集/ライター</Button>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between w-[720]">
                        <div className="font-semibold">特徴からインターンを探す</div>
                        <div>一覧で見る</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 justify-items-start w-[720]">
                        <Button className="bg-white text-black rounded-full w-[240]">週3日以下でもOK</Button>
                        <Button className="bg-white text-black rounded-full w-[240]">週4日以上歓迎</Button>
                        <Button className="bg-white text-black rounded-full w-[240]">1ヶ月からOK</Button>
                        <Button className="bg-white text-black rounded-full w-[240]">フルリモート可</Button>
                        <Button className="bg-white text-black rounded-full w-[240]">1・2年生歓迎</Button>
                        <Button className="bg-white text-black rounded-full w-[240]">英語力が身に付く</Button>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between w-[720]">
                        <div className="font-semibold">エリアからインターンを探す</div>
                        <div>一覧で見る</div>
                    </div>
                    <div className="grid grid-cols-6 gap-2 justify-items-start w-[720]">
                        <Button className="bg-white text-black rounded-full w-[360] col-start-1 col-sapan-3">東京都全域</Button>
                        <Button className="bg-white text-black rounded-full w-[360] col-start-4 col-sapan-3">関西</Button>
                        <Button className="bg-white text-black rounded-full w-[240] col-start-1 col-sapan-2">渋谷</Button>
                        <Button className="bg-white text-black rounded-full w-[240] col-start-3 col-sapan-2">新宿</Button>
                        <Button className="bg-white text-black rounded-full w-[240] col-start-5 col-sapan-2">六本木・港区</Button>
                        <Button className="bg-white text-black rounded-full w-[240] col-start-1 col-sapan-2">東京・丸の内</Button>
                        <Button className="bg-white text-black rounded-full w-[240] col-start-3 col-sapan-2">品川</Button>
                        <Button className="bg-white text-black rounded-full w-[240] col-start-5 col-sapan-2">神奈川県</Button>
                        <Button className="bg-white text-black rounded-full w-[720] col-start-1 col-sapan-6">東京と関西以外の地方</Button>
                    </div>
                </div>

                <div>
                    <div className="font-semibold">長期インターン探し成功の声</div>
                    <Carousel className="w-[720]">
                        <CarouselContent className="-ml-1">
                            {reviewList.map((review, index) => (
                            <CarouselItem key={index} className="pl-1 basis-1/3">
                                <div className="p-1">
                                <Card>
                                    <CardTitle className="p-1">
                                        <div className="text-xs">{review.title}</div>
                                        <div className="text-xs">{review.student}</div>
                                    </CardTitle>
                                    <CardContent className="flex justify-start p-1 bg-[#75d3ca] m-2 h-36">
                                        <div className="flex flex-col text-xs">
                                            <div className="flex">
                                                <div>満足度</div>
                                                <div className="text-[#009688]">{review.satisfaction}</div>
                                            </div>
                                            <div>{review.review}</div>
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
                        <Card className="w-[720]">
                            <CardHeader>
                                <CardTitle>
                                    <div className="flex flex-row items-center">
                                        <span className="bg-[#FF0000] p-1 text-white">Pickup</span>
                                        <div className="text-[#009688]">株式会社サーキュレーション</div>
                                    </div>
                                    <div className="text-gray-400">1ヶ月前</div>
                                    <Link href="/internships/detail">
                                        【圧倒的成長をしたい学生求む！】起業家多数輩出急成長ベンチャーで、経営者層を相手に熱い仲間と企業課題を解決しよう！最強のガクチカをつくれる！
                                    </Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <table>
                                    <tbody className="text-xs">
                                        {contents.map((content,index) => {
                                            return (
                                                <tr key={index}>
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

            <div className="p-5">
                <div>
                    <div>エリアから探す</div>
                    <Card>
                        <CardContent>
                            <ul>
                            {placeContents.map((place, index) => {
                                return (
                                    <li key={index}>
                                        <div className="flex justify-between text-sm">
                                            <div>{place.content}</div>
                                            <div>{place.condition}</div>
                                        </div>
                                    </li>
                                )
                            })}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <div>職種から探す</div>
                    <Card>
                        <CardContent>
                            <ul>
                            {jobContents.map((job, index) => {
                                return (
                                    <li key={index}>
                                        <div className="flex justify-between text-sm">
                                            <div>{job.content}</div>
                                            <div>{job.condition}</div>
                                        </div>
                                    </li>
                                )
                            })}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <div>特徴から探す</div>
                    <Card>
                        <CardContent>
                            <ul>
                            {workContents.map((work, index) => {
                                return (
                                    <li key={index}>
                                        <div className="flex justify-between text-sm">
                                            <div>{work.content}</div>
                                            <div>{work.condition}</div>
                                        </div>
                                    </li>
                                )
                            })}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <div>業界から探す</div>
                    <Card>
                        <CardContent>
                            <ul>
                            {careerContents.map((career, index) => {
                                return (
                                    <li key={index}>
                                        <div className="flex justify-between text-sm">
                                            <div>{career.content}</div>
                                            <div>{career.condition}</div>
                                        </div>
                                    </li>
                                )
                            })}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <div>人気のキーワードで探す</div>
                    <Card>
                        <CardContent>
                            <ul className="text-sm">
                                <li>EC</li>
                                <li>アート</li>
                                <li>経理</li>
                                <li>人事</li>
                                <li>データ分析</li>
                                <li>機械学習</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </div>
    )

}
