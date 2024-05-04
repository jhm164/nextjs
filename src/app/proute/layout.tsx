
import { Metadata } from "next"
import { usePathname } from "next/dist/client/components/navigation"

export const metadata: Metadata = {
  title: 'layouttsx',
}
 

export default function Layout({
    children,
    team,
    analytics,
  }: {
    children: React.ReactNode
    analytics: React.ReactNode
    team: React.ReactNode
  }) {

  
    return (
      <>

        {children}
        {team}
        {analytics}
      </>
    )
  }