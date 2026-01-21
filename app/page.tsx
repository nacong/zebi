import StoresClient from './ui/page-client';
import { Suspense } from 'react';

export default function StoresPage() {
  
  return (
    <Suspense>
      <StoresClient />
    </Suspense>
  );
}