import {Button} from "@/components/ui/button.tsx";
import {Menu} from "lucide-react";
import {ModeToggle} from "@/components/themetoggle.tsx";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from "@/components/ui/sheet.tsx";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

const Navbar = () => {
	const { login, user } = useKindeAuth();
	
	return (
		<div className={"flex flex-row justify-between items-center p-2 border-b rounded-b-md mb-2"}>
			<h1 className={"text-2xl font-bold"}>ScoutLabs</h1>
			
			<div className={"flex flex-row justify-center items-center space-x-2"}>
				<ModeToggle />
				
				<Sheet>
					<SheetTrigger asChild>
						<Button variant={"outline"}>
							<Menu />
						</Button>
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>Welcome to ScoutLabs</SheetTitle>
						</SheetHeader>
						
						<div className={"flex flex-col"}>
							<a href={"/search"}>
								<h1>Search</h1>
							</a>
							
							<a href={"/settings"}>
								<h1>Settings</h1>
							</a>
							
							{user ? (
								<a href={"/account"}>
									<h1>Account</h1>
								</a>
							) : (
								<Button onClick={login}>
									<h1>Login</h1>
								</Button>
							)}
							
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
};

export default Navbar;