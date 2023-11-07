import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { LibSQLDrizzleAdapter } from '@/db/adapter';
import { db } from '@/services/db'

export const { handlers, auth, signIn, signOut } = NextAuth({
	adapter: LibSQLDrizzleAdapter(db),
	providers: [GitHub]
})
