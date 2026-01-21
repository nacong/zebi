'use client'
 
import { useParams, useSearchParams } from 'next/navigation'
import StoresClient from './ui/page-client';

export default function StoresPage() {
  const params = useSearchParams()
  const collegeId = params.get("collegeId");

  if (!collegeId) {
    return <></>
  }
  
  return <StoresClient collegeId={collegeId} />;
}