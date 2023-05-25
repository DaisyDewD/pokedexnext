import Image from "next/image";
import Link from "next/link";
import React from "react";
import menuContentEn from "@/lang/en/navbar";
import menuContentES from "@/lang/es/navbar";
import {useRouter} from "next/router";

export const Navbar = () => {
	// Traducciones
	const router = useRouter();
	const {locale} = router;
	const content =
		locale === "en"
			? menuContentEn
			: locale === "es"
			? menuContentES
			: menuContentEn;

	const chacgeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const locale = e.target.value;
		router.push(router.pathname, router.asPath, {locale});
	};

	return (
		<nav>
			<div>
				<Link href="/">
					<Image
						src="/logo-mario.png"
						alt="logo"
						width={100}
						height={100}
						priority={true}
					/>
				</Link>
			</div>
			<ul>
				<li>
					<Link href="/">{content.pokemon}</Link>
				</li>
				<li>
					<Link href="/items">{content.items}</Link>
				</li>
				<li>
					<Link href="/location">{content.Location}</Link>
				</li>

				<li>
					<select onChange={chacgeLanguage} name="idioma" id="idioma">
						<option value="es">Español</option>
						<option value="en">English</option>
						<option value="pt">Português</option>
					</select>
				</li>
			</ul>
		</nav>
	);
};
