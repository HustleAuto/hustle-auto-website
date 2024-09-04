import { useContext } from 'react';

import ContentfulContext, {
  EMPTY_CONTEXT,
} from '@/contexts/contentful-context';

export function useContentfulContext() {
  const value = useContext(ContentfulContext);
  if (value !== EMPTY_CONTEXT) return value;
  throw new Error('Missing contentful context provider');
}
