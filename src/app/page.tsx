import { Button } from '@mantine/core';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-auto my-20 text-center">
      <Button component={Link} href={'products'}>
        Products Page
      </Button>
    </div>
  );
}
