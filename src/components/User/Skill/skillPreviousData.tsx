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
    submissionDate: '2025/1/4',
    result: '1',
  },
  {
    company: 'Respect Carrier',
    submissionDate: '2024/12/23',
    result: '0',
  },
  {
    company: 'Respect Carrier',
    submissionDate: '2024/10/10',
    result: '0',
  },
];

export default function SkillPreviousData() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center">過去のテスト結果</CardTitle>
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
                  <Badge
                    className={
                      test.result === '1'
                        ? 'bg-green-500 text-green-100 hover:bg-green-600'
                        : 'bg-red-500 text-red-100 hover:bg-red-600'
                    }>
                    {test.result === '1' ? '合格' : '不合格'}
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
