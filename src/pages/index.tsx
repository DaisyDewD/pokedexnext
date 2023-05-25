import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { NextPage } from "next";
import { Inter } from "next/font/google";
import { Key, use, useEffect, useState } from "react";
import homeContentEN from "@/lang/en/home";
import homeContentES from "@/lang/es/home";

import { useRouter } from "next/router";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Character } from "@/interface";
import { Layout } from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  data: Character[];
}

const Home: NextPage<Props> = ({ data }) => {
  // Traducciones
  const router = useRouter();
  const { locale } = router;
  const content =
    locale === "en"
      ? homeContentEN
      : locale === "es"
      ? homeContentES
      : homeContentEN;

  return (
    <Layout title={content.title}>
      <div>
        <h1>{content.title}</h1>
        <div className={styles.grid}>
          {data.map((results: Character) => (
            <Card key={results.name} sprites={undefined} name={""} alt={""} results={{
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
		  ))}
		  console.log(results)
		  	<div className={styles.card}>
				<h3>{content.title}</h3>
				<Image
				src="/images/pokemon.png"
				alt="Pokemon"
				width={200}
				height={200}
				/>
			</div>
			</div>
	</div>
	</Layout>
	  );
	};

export default Home;
