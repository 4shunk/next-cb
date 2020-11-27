import React from "react";
import { GA_TRACKING_ID } from "../gtag";

export default function GtagComponent() {
  return (
    <React.Fragment>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GA_TRACKING_ID}');
      `
        }}
      />
    </React.Fragment>
  );
}
