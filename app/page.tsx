import Page from './ui/page-client';
import { Suspense } from 'react';

export default function StoresPage() {
  
  return (
    <Suspense>
      <Page />
    </Suspense>
  );
}