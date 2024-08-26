import { Component } from 'react'

import DomainService from '../services/domain'

import DomainRecords from '../components/DomainRecords'


export default class MainPage extends Component {
	state = {
		domain: '',
		records: undefined
	}
	
	updateRecords(domain: string) {
		DomainService.getDomainDnsRecords(domain).then((records) => {
			this.setState({records})
		})
	}

	render() {
		return (
			<>
				<h1>Analyze your domain security</h1>
				<div>
					<input
					placeholder = 'www.example.com'
					value       = {this.state.domain}
					onChange    = {(e) => (this.setState({domain: e.target.value}))}
				/>
				<button
					type      = 'button'
					className = 'btn btn-outline-primary'
					onClick   = {() => this.state.domain && this.updateRecords(this.state.domain)}
				>Analyze</button>
				<DomainRecords records={this.state.records}/>
			</div>
			</>
		)
	}
}
