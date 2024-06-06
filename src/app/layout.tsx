import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'MyContacts',
  description: 'MyContacts com Next.js e shadcn/ui',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-4">
        <div className="flex justify-center mt-40 mb-10">
          <div className="space-y-10 w-full max-w-xl">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
