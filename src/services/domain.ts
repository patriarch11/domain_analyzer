import {promises as dns} from 'dns'

import { DomainDnsRecords } from '../schemas/domain'


const recordTypes: { [key: string]: (domain: string) => Promise<any> } = {
	a     : dns.resolve4,
	aaaa  : dns.resolve6,  
	mx    : dns.resolveMx,    
	txt   : dns.resolveTxt,   
	cname : dns.resolveCname, 
	ns    : dns.resolveNs,    
}


export default class DomainService {
	public static async getDomainDnsRecords(
		domain: string,
	): Promise<DomainDnsRecords> {
		const records: DomainDnsRecords = {}

		for (const [recordType, resolver] of Object.entries(recordTypes)) {
			try {
				records[recordType as keyof DomainDnsRecords] = await resolver(domain)
			} catch(e) {
				console.log(
					`Error getting "${recordType}" record for "${domain}: ${e}`
				)
			}
		}
		return records
	}
}