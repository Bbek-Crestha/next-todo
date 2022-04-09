import Image from "next/image";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";

const NavBar = () => {
	const router = useRouter();

	const handleLogout = () => {
		if (confirm("Are you sure to logout?")) {
			destroyCookie(null, "token");
			router.push("/login");
		}
	};

	return (
		<div className="bg-black w-[100%] absolute top-0 h-[50px] flex items-center px-6 py-4 justify-between">
			<div className="flex items-center gap-2">
				<Image src="/icon.svg" alt="logo" height={40} width={40} />
				<span className="font-bold text-xl text-white">TO-DO</span>
			</div>

			<button onClick={handleLogout} className="text-xl text-white">
				Logout
			</button>
		</div>
	);
};

export default NavBar;
