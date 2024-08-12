import {Input} from "@/components/ui/input.tsx";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import {useEffect, useState} from "react";
import {TOA_Team} from "@/types.ts";
import {useDebounce} from "@uidotdev/usehooks";
import Spinner from "@/components/spinner.tsx";
import FTCTeamCard from "@/components/FTCTeamCard";

const Search = () => {
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [competition, setCompetition] = useState<string>("");
	const debouncedQuery = useDebounce(searchQuery, 240);
	const [teamDetails, setTeamDetails] = useState<TOA_Team | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	
	const GetFTCTeamDetails = async () => {
		setLoading(true);
		// Base URL: https://theorangealliance.org/api/team/
		
		const res = await fetch("https://theorangealliance.org/api/team/" + searchQuery, {
			method: "GET",
			headers: {
				"X-TOA-Key": "idVSDdk1mdAwiaEMvfTBbuJk4byLqIT+8SJqBtPMd94=",
				"X-Application-Origin": "Scoutster"
			}
		});
		
		const result = await res.json();
		// set team details to first team in the array
		setTeamDetails(result[0] as TOA_Team);
		console.log(teamDetails);
		setLoading(false);
	}
	
	useEffect(() => {
		switch (competition) {
			case "ftc":
				GetFTCTeamDetails();
				break;
			case "frc":
		// 		TODO: I, the author of this code, am too lazy to implement this right now.
		}
	}, [debouncedQuery]);
	
	useEffect(() => {
		console.log(competition);
	}, [competition]);
	
	const SearchSelect = () => {
		return (
			<>
				<Select onValueChange={setCompetition} value={competition}>
					<SelectTrigger className={"w-[180px]"} defaultValue={"FTC"}>
						<SelectValue placeholder="Select a competition" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Competitions</SelectLabel>
							<SelectItem value="ftc">FTC</SelectItem>
							<SelectItem value="frc">FRC</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</>
		)
	}
	
	
	
	return (
		<div className={"flex flex-col justify-center items-center"}>
			<div className={"flex flex-row justify-center space-x-3 items-center text-4xl "}>
				<h1 className={"font-bold"}>I'm searching for an </h1>
				<SearchSelect />
				<h1 className={"font-bold"}> team.</h1>
			</div>
			
			<Input placeholder={"Search by team number"} onChange={e => {setSearchQuery(e.target.value)}} className={"w-80 mt-5 text-center"}/>
			
		{/*	if competition isnt selected and debounced value isnt null, prompt selecting a competition*/}
			{competition === "" && searchQuery !== "" ? <h1 className={"text-red-500"}>Please select a competition</h1> : null}
			
			{loading ? <Spinner className={"mt-10"}/> : null}
			
			{teamDetails ? <FTCTeamCard {...teamDetails} /> : null}
		</div>
	);
};

export default Search;