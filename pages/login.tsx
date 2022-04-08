import { NextPage } from "next";
import Image from "next/image";
import { FormEvent, useState } from "react";

import InputField from "../components/utilities/InputField";

const Login: NextPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log(`Form Submitted: ${email} ${password}`);
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
