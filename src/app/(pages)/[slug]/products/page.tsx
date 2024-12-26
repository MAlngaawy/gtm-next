import { Button } from '@mantine/core';
import Link from 'next/link';

const Products = () => {
  return (
    <div className="items-center text-center my-10 mx-auto">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl">Products</h1>
        <Button component={Link} href={'/en'}>
          Home
        </Button>
      </div>
      <div className="flex items-center justify-center gap-10 my-10 flex-wrap">
        <div className="p-5 border rounded-lg flex flex-col items-center justify-center gap-5">
          <span>product one</span>
          <Button component={Link} href={'products/1'}>
            Goooo{' '}
          </Button>
        </div>
        <div className="p-5 border rounded-lg flex flex-col items-center justify-center gap-5">
          <span>product two</span>
          <Button component={Link} href={'products/2'}>
            Goooo{' '}
          </Button>
        </div>
        <div className="p-5 border rounded-lg flex flex-col items-center justify-center gap-5">
          <span>product three</span>
          <Button component={Link} href={'products/3'}>
            Goooo{' '}
          </Button>
        </div>
        <div className="p-5 border rounded-lg flex flex-col items-center justify-center gap-5">
          <span>product four</span>
          <Button component={Link} href={'products/4'}>
            Goooo{' '}
          </Button>
        </div>
        <div className="p-5 border rounded-lg flex flex-col items-center justify-center gap-5">
          <span>product five</span>
          <Button component={Link} href={'products/5'}>
            Goooo{' '}
          </Button>
        </div>
        <div className="p-5 border rounded-lg flex flex-col items-center justify-center gap-5">
          <span>product six</span>
          <Button component={Link} href={'products/6'}>
            Goooo{' '}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
