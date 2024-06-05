import React from "react";
import { CgWorkAlt } from "react-icons/cg";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Vue",
	"Nuxt.js",
	"Node.js",
	"Git",
	"Tailwind",
	"PostgreSQL",
	"MongoDB",
	"Express",
	"Framer Motion",
] as const;

export const experiencesData = [
	{
		title: "Software Developer",
		location: "Hyper Systems Ltd.",
		description:
			"I started as a front-end developer here and later involved into full stack development. I stack included React, Next.js, Vue, Nuxt.js, Node.js, TypeScript, PostgreSQL, MongoDB, Redis and more in this company.",
		icon: React.createElement(CgWorkAlt),
		date: "2022 - Present",
	},
] as const;
