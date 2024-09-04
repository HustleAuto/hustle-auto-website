import Script from 'next/script';

import { getHustleClientSettings } from '@/hustleClientSettings';

export default function TidioWidget() {
  const hustleSettings = getHustleClientSettings();

  return (
    <Script
      id="tidio-script"
      strategy="lazyOnload"
      src={`//code.tidio.co/${hustleSettings.TIDIO.SCRIPT_ID}.js`}
    />
  );
}
