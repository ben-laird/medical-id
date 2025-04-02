import { defineConfig } from "./app-config/mod.ts";

export default defineConfig(() => ({
	name: "Allistar Grace Barrett",
	pronouns: "they/them/theirs",
	birthday: new Date(2003, 6, 29),
	meds: [{ name: "fluoxetine", dose: "40mg", frequency: "1/day" }],
}));
