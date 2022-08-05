export interface Usage {
	type: string;
	used: number;
	limit: number;
}

export interface Subscribtion {
	id: number;
	name: string;
	type: string;
	usage: Usage[];
}

export interface Subscribtions {
	subscriptions: Subscribtion[];
}