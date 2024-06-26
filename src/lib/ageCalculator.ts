import { differenceInYears } from 'date-fns';

export function ageCalculator(): number {
	return differenceInYears(new Date(), new Date(2008, 7, 24));
}
