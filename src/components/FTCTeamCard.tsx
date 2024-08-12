import {TOA_Team} from "@/types.ts";
import {Card} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Plus, Search} from "lucide-react";
import {useNavigate} from "react-router-dom";

const FtcTeamCard = (props :TOA_Team) => {
	const navigate = useNavigate();
	
	return (
		<Card className={"flex flex-row justify-between items-center p-4 w-72 h-20 mt-5"}>
			<div className={"flex flex-col"}>
				<h1 className={"text-2xl font-bold"}>{props.team_name_short}</h1>
				<p className={"text-lg font-mono"}>#{props.team_number}</p>
			</div>
			
			<div className={"flex flex-row"}>
				<Button variant="outline" size="icon" onClick={() => {
					navigate(`/teams/ftc/${props.team_number}`);
				}}>
					<Search />
				</Button>
				
				<Button variant="outline" size="icon">
					<Plus />
				</Button>
			</div>
		</Card>
	)
};

export default FtcTeamCard;