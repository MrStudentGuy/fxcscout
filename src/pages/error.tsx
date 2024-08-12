import {useEffect, useState} from "react";

const Error = () => {
	const [ip, setIp] = useState<string | null>(null);
	
	const GetIPAddress = () => {
		fetch("https://api.ipify.org?format=json")
			.then((response) => response.json())
			.then((data) => setIp(data.ip))
			.catch((error) => console.error(error));
	}
	
	useEffect(() => {
		GetIPAddress();
	}, []);
	
	return (
		<div className={"flex flex-col justify-center items-center mt-10"}>
			<img className={"rounded-full w-48 h-48"} src={`https://robohash.org/${ip}?set=set1&bgset=bg1`} alt={"404"}/>
			
			<h1 className={"font-bold text-8xl mt-10"}>404</h1>
			<h2 className={"font-medium text-4xl mt-2"}>Page Not Found</h2>
		</div>
	);
};

export default Error;