import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { mdiPlusCircle } from "@mdi/js"
import Icon from "@mdi/react"

export function SearchFilters() {
  return (
    <Card className="w-100">
      <CardContent className="p-4 space-y-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">フリーワード検索</h3>
          <Input placeholder="業種・職種・スキル" />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">RespectCareer No.</h3>
          <Input placeholder="RC 12345678" />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">希望職種
          </h3>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="選択してください" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tokyo">東京都23区外</SelectItem>
              <SelectItem value="remote">フルリモート</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">希望年収</h3>
          <div className="flex items-center gap-2">
            <Input type="number" placeholder="0" />
            <span>〜</span>
            <Input type="number" placeholder="0" />
            <span>万円</span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">希望勤務年数</h3>
          <div className="flex items-center gap-2">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="選択してください" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="25">25%</SelectItem>
                <SelectItem value="50">50%</SelectItem>
                <SelectItem value="75">75%</SelectItem>
                <SelectItem value="100">100%</SelectItem>
              </SelectContent>
            </Select>
            <span>〜</span>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="選択してください" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="25">25%</SelectItem>
                <SelectItem value="50">50%</SelectItem>
                <SelectItem value="75">75%</SelectItem>
                <SelectItem value="100">100%</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">希望勤務地</h3>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="選択してください" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tokyo">東京都23区外</SelectItem>
              <SelectItem value="remote">フルリモート</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">経験スキル</h3>
          <div className="flex items-center">
            <div className="w-full">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tokyo">東京都23区外</SelectItem>
                  <SelectItem value="remote">フルリモート</SelectItem>
                </SelectContent>
              </Select>
            </div>
          <Input type="number" placeholder="0" className="w-12" />
          <span>年</span>
          </div>
          <div className="flex justify-center">
            <Icon path={mdiPlusCircle} size={1}/>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">経験職種</h3>
          <div className="flex items-center">
            <div className="w-full">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tokyo">東京都23区外</SelectItem>
                  <SelectItem value="remote">フルリモート</SelectItem>
                </SelectContent>
              </Select>
            </div>
          <Input type="number" placeholder="0" className="w-12" />
          <span>年</span>
          </div>
          <div className="flex justify-center">
            <Icon path={mdiPlusCircle} size={1}/>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline">リセット</Button>
          <Button>この内容で検索する</Button>
        </div>
      </CardContent>
    </Card>
  )
}

