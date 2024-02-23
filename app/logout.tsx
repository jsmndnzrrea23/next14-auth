'use client'

import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Logout() {
  const router = useRouter()

  return (
    <span
      onClick={() =>
        signOut({ redirect: false }).then(() => router.push('/login'))
      }
    >
      Logout
    </span>
  )
}
