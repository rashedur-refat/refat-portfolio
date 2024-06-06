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

export const projectsData = [
	{
		title: "Sovereign Apex",
		description:
			"A company portfolio project built with Next.js, Sanity Headless CMS and Tailwind CSS.",
		tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
		imageUrl: "/apex.png",
	},
	{
		title: "Remote Monitoring System",
		description:
			"I worked as a full-stack developer on this project for 1.5 years. It's a remote monitoring as well as access control system management software.",
		tags: ["Vue", "Nuxt.js", "PostgreSQL", "Tailwind", "Node.js"],
		imageUrl: "/rms-site.png",
	},
	{
		title: "Offline Meter Portal",
		description:
			"A web portal for monitoring Offline Meter Transaction data. It has features like filtering, sorting and pagination",
		tags: ["React", "TypeScript", "Next.js", "Tailwind"],
		imageUrl: "/offline-meter.png",
	},
	{
		title: "Vessel Management System",
		description:
			"A web application for monitoring vessels location. It has a map view for the vessels.",
		tags: ["Vue", "Nuxt.js", "Tailwind", "Node.js", "MongoDB"],
		imageUrl: "/biwta-tracking.png",
	},
] as const;
