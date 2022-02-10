const states = [
	{
		name: 'SP',
		valor: 67.83643
	},
	{
		name: 'RJ',
		valor: 36.67866
	},
	{
		name: 'MG',
		valor: 29.22988
	},
	{
		name: 'ES',
		valor: 27.16548
	},
	{
		name: 'Outros',
		valor: 19.84953
	}
]
const sumValues = states.reduce((acc, state) => {
	return acc + state.valor
}, 0)
const percentage = states.map(state => {
	return {
		name: state.name,
		percentage: (state.valor / sumValues * 100).toFixed(2 ) + '%'
	}
})
console.log(percentage)