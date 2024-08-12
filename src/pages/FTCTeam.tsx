import {useParams} from "react-router-dom";
import {TOA_Team} from "@/types.ts";
import {useEffect, useState} from "react";
import Spinner from "@/components/spinner.tsx";

const FtcTeam = () => {
	const params = useParams();
	const [loading, setLoading] = useState<boolean>(false);
	const [teamDetails, setTeamDetails] = useState<TOA_Team | null>(null);
	
	const GetFTCTeamDetails = async () => {
		setLoading(true);
		// Base URL: https://theorangealliance.org/api/team/
		
		const res = await fetch("https://theorangealliance.org/api/team/" + params.teamNumber, {
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
		GetFTCTeamDetails();
	}, []);
	
	if (loading) {
		return (
			<div className={"flex justify-center items-center w-screen h-screen"}>
				<Spinner />
			</div>
		);
	}
	
	return (
		<div>
			<h1>FTC Team #{params.teamNumber}</h1>
		</div>
	);
};

export default FtcTeam;