import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { setCookie } from "nookies";

import InputField from "../components/utilities/InputField";
import { users } from "../database/Data";

const Login: NextPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const currentUser = users.find((user) => user.email === email);

		if (currentUser) {
			if (password === currentUser.password) {
				setCookie(null, "token", JSON.stringify(currentUser), {
					maxAge: 30 * 24 * 60 * 60,
					path: "/",
				});

				router.push("/");
			}
		}
	};

	return (
		<div className="flex h-[100vh] justify-center p-4 items-center">
			<form
				onSubmit={handleSubmit}
				className="border-black h-[fit-content] rounded-lg border-2 p-4 w-[350px] text-center"
			>
				<Image src="/icon.svg" alt="logo" height={75} width={75} />
				<p className="text-2xl font-bold pb-3">Sign in to continue</p>
				<InputField
					type="email"
					placeholder="Email"
					value={email}
					setValue={setEmail}
				/>
				<InputField
					type="password"
					placeholder="Password"
					value={password}
					setValue={setPassword}
				/>

				<button type="submit" className="bg-blue-500 py-2 px-4 rounded-lg">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
