import type { Session } from "next-auth"
import { auth, signIn, signOut } from '@/services/auth'

export function SignIn() {
	async function action(formData: FormData) {
		'use server';

		await signIn("github")
	}

	return (
		<form action={action}>
			<button>Sign In</button>
		</form>
	)
}

export function SignOut() {
	async function action(formData: FormData) {
		'use server';

		await signOut()
	}

	return (
		<form action={action} className="w-full">
			<button className="w-full p-0">
				Sign Out
			</button>
		</form>
	)
}
export default async function UserButton() {
	const session = await auth()
	if (session && session.user) {
		return (<h1>Hello {session.user.name} - <SignOut /></h1>)
	} else {
		return (<SignIn />)
	}
}
