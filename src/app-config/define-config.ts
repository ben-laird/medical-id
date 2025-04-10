import type {
	Allergy,
	Condition,
	InsuranceProvider,
	MedicalCondition,
	MedicalEvent,
	MedicalProvider,
	Medication,
} from "./types.ts";

export function defineConfig(
	config: (env: ConfigEnv) => Potential<ConfigDefinition>,
): () => Promise<MedicalConfig> {
	return async () => {
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
			insurance = [],
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
			insurance,
		};
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
	insurance?: InsuranceProvider[];
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
	insurance?: InsuranceProvider[];
}

type Potential<T> = T | Promise<T>;
