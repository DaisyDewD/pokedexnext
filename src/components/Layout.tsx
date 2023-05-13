import { Inter } from "next/font/google";
import React, { FC } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import en from "./lang/en/en";
import es from "./lang/es/es";
import { useRouter } from "next/router";
import Link from "next/link";

const inter = Inter ({subsets: ['latin']})

interface LayoutProps {
    children: React.ReactNode;
  }

  export const Layout: FC<LayoutProps> = ({ children }) => {
    //traslate
    const router = useRouter();
  const { locale } = router;
  const traslate = locale === "en" ? en : es;
  return (
    <>
          <nav>
              <div>
                  <Image
                      src="/pokeball.png"
                      alt="Pokeball"
                      width={100}
                      height={100}
                      priority={true} />
                  <h1>My Pokedex</h1>
              </div>
              <ul>
                  <li>
                      <Link href="/">{traslate.pokemon}</Link>
                  </li>
                  <li>
                      <Link href="/items">{traslate.item}</Link>
                  </li>
                  <li>
                      <Link href="/pokemons/:name">{traslate.pokemon}</Link>
                  </li>
              </ul>

          </nav>
          <main className={`${styles.main} ${inter.className}`}>{children}</main>
    
          <footer>
        <p></p>
      </footer>
    </>
  );
};

// npm install react-router-dom