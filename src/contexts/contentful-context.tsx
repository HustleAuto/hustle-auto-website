'use client';

import { fetchPrices } from '@/contentful/fetchPrices';
import { createRequiredContext } from '@/lib/createRequiredContext';

interface ContentfulContextValue {
  prices: Awaited<ReturnType<typeof fetchPrices>>;
}

const [Provider, useContentfulContext] =
  createRequiredContext<ContentfulContextValue>();

interface ContentfulProviderProps {
  children: React.ReactNode;
  prices: Awaited<ReturnType<typeof fetchPrices>>;
}

async function ContentfulContextProvider({
  children,
  prices,
}: ContentfulProviderProps) {
  return <Provider value={{ prices }}>{children}</Provider>;
}

export default useContentfulContext;
export { ContentfulContextProvider };
