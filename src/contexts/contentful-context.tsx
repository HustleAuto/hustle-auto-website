'use client';

import { createContext } from 'react';

import { fetchPrices } from '@/contentful/fetchPrices';

interface ContentfulContextValue {
  prices: Awaited<ReturnType<typeof fetchPrices>>;
}

const ContentfulContext = createContext<ContentfulContextValue | null>(null);

interface ContentfulProviderProps {
  children: React.ReactNode;
  prices: Awaited<ReturnType<typeof fetchPrices>>;
}

async function ContentfulContextProvider({
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
export { ContentfulContextProvider };
