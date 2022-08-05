export interface Offer{
	contractEndDate: Date;
	contractStartDate: Date;
	id: number;
	name: string;
}

export interface Offers{
	offers: Offer[];
}