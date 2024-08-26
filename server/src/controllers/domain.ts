import {
	Controller,
	Get,
	Route,
	Query
} from 'tsoa'


import { DomainDnsRecords } from '../schemas/domain'
import DomainService        from '../services/domain'


@Route('domain')
export class DomainController extends Controller {
	@Get('/dns/records')
	public async getDomainDnsRecords(
		@Query() domain: string
	): Promise<DomainDnsRecords> {
		return DomainService.getDomainDnsRecords(domain)
	}
}
