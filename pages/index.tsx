import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import { tasks as Tasks } from "@database/Data";
import { taskType } from "@database/DataTypes";
import NavBar from "@components/layout/NavBar";
import TaskComponent from "@components/utilities/TaskComponent";

const Home: NextPage = () => {
	const [tasks, setTasks] = useState<taskType[]>(Tasks);

	return (
		<>
			<Head>
				<title>To-Do</title>
				<meta
					name="description"
					content="To-Do application created using Next.JS with user authentication."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex h-[calc(100vh-50px)] mt-[50px] justify-center p-4 items-start">
				<NavBar />

				<div className="border-2 p-4 rounded-lg max-h-[calc(100vh-100px)] overflow-y-auto border-black shadow-black shadow-lg w-96 lg:w-1/3">
					<p className="text-center text-2xl font-bold mb-4">Tasks</p>
					{tasks.map((task) => (
						<div key={task.id}>
							<TaskComponent task={task} tasks={tasks} setTasks={setTasks} />
						</div>
					))}
				</div>
			</main>
		</>
	);
};

export default Home;
