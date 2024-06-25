export function ageCalculator(): number {
	const birthDate = new Date('2008-07-24');
	const today = new Date();
	const yearInMs = 1000 * 60 * 60 * 24 * 365.25;

	const diff = today.getTime() - birthDate.getTime();
	return Math.floor(diff / yearInMs);
}
