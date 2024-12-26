'use client';
import { Button } from '@mantine/core';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

const OneProduct = () => {
  const params = useParams();

  console.log('sacvds', params);

  return (
    <div>
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl">Products</h1>
        <Button component={Link} href={'/products'}>
          procucts
        </Button>
      </div>
      <h1>OneProduct {params.productId}</h1>
    </div>
  );
};

export default OneProduct;
