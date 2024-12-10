import { EventButton } from '@/components/EventButton';
import { Button } from '@mantine/core';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-auto my-20 text-center flex flex-col items-center justify-center gap-5">
      <Button component={Link} href={'products'}>
        Products Page
      </Button>
      <EventButton />
    </div>
  );
}
