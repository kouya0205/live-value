import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// This would typically come from an API or database
const previousTests = [
  {
    company: 'Respect Carrier',
    submissionDate: '2021/10/10',
    result: '合格',
  },
  {
    company: 'Respect Carrier',
    submissionDate: '2021/10/10',
    result: '合格',
  },
  {
    company: 'Respect Carrier',
    submissionDate: '2021/10/10',
    result: '合格',
  },
];

export default function SkillPreviousData() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center">以前のテスト結果</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%]">企業名</TableHead>
              <TableHead className="w-[30%]">提出日</TableHead>
              <TableHead className="w-[30%]">結果</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {previousTests.map((test, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{test.company}</TableCell>
                <TableCell>{test.submissionDate}</TableCell>
                <TableCell>
                  <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:text-green-500">
                    {test.result}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
