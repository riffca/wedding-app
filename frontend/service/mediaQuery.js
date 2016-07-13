export default class {

	constructor(query,{matched,unMatched}){
		query.addListener(this.matches);
		this.MQ = query;
		this.matches(matched,unMatched);
	}
	matches(matched, unMatched){
		if(this.MQ.matches){
			matched();
			console.log(this.MQ.matches);
		} else {
			unMatched();
		}
	}
}