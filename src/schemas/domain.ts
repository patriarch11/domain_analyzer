import { MxRecord } from 'dns'


export interface DomainDnsRecords {
	a?     : string[],
	aaaa?  : string[],
	mx?    : MxRecord[]
	txt?   : string[][]
	cname? : string[]
	ns?    : string[]
}