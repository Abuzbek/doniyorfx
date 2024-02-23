import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={classNames(montserrat.className)}
      >
        <Script strategy="afterInteractive" id="facebook-pixel">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '7652181054801143');
            fbq('track', 'PageView');
              `}
        </Script>
        <noscript><img height="1" width="1" style={{display:'none'}}
        src="https://www.facebook.com/tr?id=7652181054801143&ev=PageView&noscript=1"
        /></noscript>
        {children}
      </body>
    </html>
  );
}
