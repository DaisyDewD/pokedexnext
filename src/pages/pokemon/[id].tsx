import { Card } from "@/components/Card";
import { Layout } from "@/components/Layout";
import { Character } from "@/interface";
import { NextPage } from "next";

interface Props {
results: Character;

}

const Pokemon: NextPage<Props> = ({results}) => {
	return (
		<Layout title={results.name}>
			<div>
				<h1>{results.name}</h1>
				<div>
					<Card
						key={results.name}
						sprites={undefined}
						name={""}
						alt={""}
						results={{
							national_number: "",
							evolution: {
								name: ""
							},
							sprites: {
								normal: "",
								large: "",
								animated: ""
							},
							name: "",
							type: []
						}}
					/>
				</div>
			</div>
		</Layout>
	);
};
		


export const getStaticPaths = async () => {
	const characters = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
	const resp = await characters.json();
	const paths = resp.results.map((character: Character) => ({
		params: { id: character.name }
	}));
	return { paths, fallback: false };
};


export default Pokemon;
