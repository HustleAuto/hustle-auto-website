'use client';

import { createContext } from 'react';

import { fetchPrices } from '@/contentful/fetchPrices';

interface ContentfulContextValue {
  prices: Awaited<ReturnType<typeof fetchPrices>>;
}

const EMPTY_CONTEXT = Symbol();

const ContentfulContext = createContext<
  ContentfulContextValue | typeof EMPTY_CONTEXT
>(EMPTY_CONTEXT);

interface ContentfulProviderProps {
  children: React.ReactNode;
  prices: Awaited<ReturnType<typeof fetchPrices>>;
}

function ContentfulContextProvider({
  children,
  prices,
}: ContentfulProviderProps) {
  return (
    <ContentfulContext.Provider value={{ prices }}>
      {children}
    </ContentfulContext.Provider>
  );
}

export default ContentfulContext;
export { ContentfulContextProvider, EMPTY_CONTEXT };
