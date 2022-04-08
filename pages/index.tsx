import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>To-Do</title>
				<meta
					name="description"
					content="To-Do application created using Next.JS with user authentication.	"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1 className="text-3xl text-red-500 text-center">Hello World</h1>
			</main>
		</>
	);
};

export default Home;
