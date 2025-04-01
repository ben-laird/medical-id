import type {
	Condition,
	MedicalCondition,
	Medication,
	Allergy,
	MedicalEvent,
	MedicalProvider,
} from "./types.ts";

export async function defineConfig(
	config: (env: ConfigEnv) => Potential<ConfigDefinition>,
): Promise<MedicalConfig> {
	const {
		name = "John Doe",
		pronouns = "None specified",
		birthday = new Date(),
		instructions = "None specified",

		conditions = [],
		meds = [],
		allergies = [],
		surgeries = [],
		vaccinations = [],
		providers = [],
	} = await config({ mode: "standard" });

	const allConditions = [
		conditions,
		meds,
		allergies,
		surgeries,
		vaccinations,
	].flatMap((el) => {
		return el.map(({ name, highPriority }): Condition => {
			return { name, highPriority };
		});
	});

	return {
		name,
		pronouns,
		birthday,
		instructions,
		notableConditions: allConditions.filter((de) => de.highPriority),
		conditions,
		meds,
		allergies,
		surgeries,
		vaccinations,
		providers,
	};
}

export interface ConfigDefinition {
	name?: string;
	birthday?: Date;
	pronouns?: string;

	instructions?: string;
	conditions?: MedicalCondition[];
	meds?: Medication[];
	allergies?: Allergy[];
	surgeries?: MedicalEvent[];
	vaccinations?: MedicalEvent[];
	providers?: MedicalProvider[];
}

export interface ConfigEnv {
	mode: string;
}

export interface MedicalConfig {
	name: string;
	birthday: Date;
	pronouns: string;

	instructions: string;
	notableConditions: Condition[];
	conditions: MedicalCondition[];
	meds: Medication[];
	allergies: Allergy[];
	surgeries: MedicalEvent[];
	vaccinations: MedicalEvent[];
	providers: MedicalProvider[];
}

type Potential<T> = T | Promise<T>;
