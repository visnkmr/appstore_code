export const metadata = {
  title: 'Vishnu N K',
  description: 'Platform agnostic Dekstop, TV, Mobile, Web app developer. Experience with Rust, Typescript, Kotlin, Java. Apps available on Google Play, Amazon Appstore, Microsoft App Store. On github, codeberg, gitea. Website build using NextJS SSG, Tailwind, React.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
