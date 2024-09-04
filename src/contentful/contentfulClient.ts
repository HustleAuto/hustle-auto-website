import { createClient } from 'contentful';

import { getHustleServerSettings } from '@/hustleServerSettings';

const hustleServerSettings = getHustleServerSettings();

const client = createClient({
  space: hustleServerSettings.CONTENTFUL.SPACE_ID,
  accessToken: hustleServerSettings.CONTENTFUL.ACCESS_TOKEN,
});

const previewClient = createClient({
  space: hustleServerSettings.CONTENTFUL.SPACE_ID,
  accessToken: hustleServerSettings.CONTENTFUL.PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
});

function contentfulClient({ preview = false }) {
  if (preview) {
    return previewClient;
  }

  return client;
}

export { contentfulClient };
