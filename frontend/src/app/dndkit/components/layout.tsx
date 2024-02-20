export default function dndkitLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): any {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
