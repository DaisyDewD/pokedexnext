import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";
import styles from "@/styles/Home.module.css";

interface Props {
	sprites: any;
	name: string;
	alt: string;
	results: {
	  national_number: string;
	  evolution: {
		name: string;
	  };
	  sprites: {
		normal: string;
		large: string;
		animated: string;
	  };
	  name: string;
	  type: string[];
	};
  }

export const Card: FC<Props> = ({ results }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${results.name}`);
  };

  return (
    <div key={results.name} ref={`/pokemon/${results.name}`}>
              <div className={styles.card}>
                <h3>{results.name}</h3>
              <Image
			  src={results.sprites.large}
			  alt={results.name}
			  width={200}
			  height={200}
			  />
              </div>
            </div>
  );
};
