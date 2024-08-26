import { DnsRecords } from '../types'

const api  = 'http://127.0.0.1:8000/domain/dns/records'


export default class DomainService {
	public static async getDomainDnsRecords(
		domain: string
	): Promise<DnsRecords> {
		const response = await fetch(`${api}?domain=${domain}`)
		return await response.json()
	}
}
