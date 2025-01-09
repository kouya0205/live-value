import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NewRegister() {
  return (
    <>
      <Link href="/company/projects/newRegister">
        <Button>案件の新規追加</Button>
      </Link>
    </>
  );
}
