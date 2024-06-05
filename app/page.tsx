import SectionDivider from "@/components/section-divider";
import Intro from "@/components/intro";
import About from "@/components/about";
import Skills from "@/components/skills";

export default function Home() {
	return (
		<main className="flex flex-col items-center px-4">
			<Intro />
			<SectionDivider />
			<About />
			<Skills />
		</main>
	);
}
