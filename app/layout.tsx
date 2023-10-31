import '@/app/ui/global.css'
import { orbitron } from './ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${orbitron.className} antialiased`}>{children}</body>
    </html>
  )
}
