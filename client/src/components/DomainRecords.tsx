import { Component } from 'react'

import { DnsRecords, MxRecord } from '../types'


function DomainRecord(
	{type, record}: {type: string, record: string[] | string[][] | MxRecord[] | undefined}
) {
	if (!record) {
			return <div>{type}</div>
	}

	if (Array.isArray(record)) {
			return (
					<>
							<div>{type}:</div>
							{record.map((value, index) => {
									if (typeof value === 'string') {
											return <div key={index}>{value}</div>
									} else if (Array.isArray(value)) {
											return (
													<div key={index}>
															{value.map((innerValue, innerIndex) => (
																	<div key={innerIndex}>{innerValue}</div>
															))}
													</div>
											)
									} else {
											return <div key={index}>{value.priority}: {value.exchange}</div>
									}
							})}
					</>
			)
	}

	return null
}


export default class DomainRecords extends Component<{records: DnsRecords|undefined}> {
	render() {
		if (this.props.records) {
			return (
				<>
					<DomainRecord type='A'     record={this.props.records.a}/>
					<DomainRecord type='AAAA'  record={this.props.records.aaaa}/>
					<DomainRecord type='MX'    record={this.props.records.mx}/>
					<DomainRecord type='TXT'   record={this.props.records.txt}/>
					<DomainRecord type='CNAME' record={this.props.records.cname}/>
					<DomainRecord type='NS'    record={this.props.records.ns}/>
				</>
			)
		}
		return null
	}
}
