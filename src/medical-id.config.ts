import { defineConfig } from "./app-config/mod.ts";

export default defineConfig(() => ({
	name: "Allistar Grace Barrett",
	pronouns: "they/them/theirs",
	birthday: new Date(2003, 6, 29),
	instructions: "bah",
	meds: [
		{
			name: "fluoxetine",
			dose: "40mg",
			frequency: "1/day",
			highPriority: true,
		},
	],
	conditions: [
		{ name: "cataplexy", highPriority: true },
		{ name: "anxiety", highPriority: true },
		{ name: "depression", highPriority: false },
		{ name: "Attention Deficit Disorder", highPriority: false },
	],
	allergies: [
		{
			kind: "food",
			name: "peaches",
			effects: "mouth irritation, sore throat, runny nose",
		},
		{
			kind: "food",
			name: "pomegranates",
			effects: "anaphylaxis",
		},
		{
			kind: "material",
			name: "liquid latex",
			effects: "skin irritation, rash",
		},
		{
			kind: "material",
			name: "pollen",
			effects: "runny nose, skin irritation, rash",
		},
	],
	surgeries: [],
	vaccinations: [],
	providers: [],
	insurance: [],
}));
