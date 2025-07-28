'use client';

import type React from 'react';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';

export default function Store({ children }: { children: React.ReactNode }) {
  const storeRef = useRef(store);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
