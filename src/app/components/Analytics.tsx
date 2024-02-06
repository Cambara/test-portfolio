"use client";

import ReactGA from 'react-ga4';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const TRACKING_ID = 'G-HPL0ZLB7S2';
ReactGA.initialize(TRACKING_ID);

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log(`The page is now: ${pathname}?${searchParams}`);
    ReactGA.send(window.location.pathname + window.location.search);
  }, [pathname, searchParams]);
  return (<></>);
}