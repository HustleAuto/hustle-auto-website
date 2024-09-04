import Script from 'next/script';

interface ElfsightWidgetProps {
  widgetId: string;
}

export default function ElfsightWidget({ widgetId }: ElfsightWidgetProps) {
  return (
    <>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        strategy="lazyOnload"
      />

      <div className={`elfsight-app-${widgetId}`} data-elfsight-app-lazy></div>
    </>
  );
}
