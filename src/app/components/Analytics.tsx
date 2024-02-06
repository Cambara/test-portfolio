"use client";

import ReactGA from 'react-ga4';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const TRACKING_ID = 'G-HPL0ZLB7S2';
const testMode = process.env.NODE_ENV === 'production';
ReactGA.initialize(TRACKING_ID, { testMode });

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = searchParams.size ? `${pathname}?${searchParams}` : pathname;
    ReactGA.send(url);
  }, [pathname, searchParams]);
  return (<></>);
}