export interface MxRecord {
	priority: number;
	exchange: string;
}

export interface DnsRecords {
	a?     : string[],
	aaaa?  : string[],
	mx?    : MxRecord[]
	txt?   : string[][]
	cname? : string[]
	ns?    : string[]
}
