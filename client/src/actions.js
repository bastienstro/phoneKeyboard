export const getSuggestions = async (query) => {
	
	let suggestions = await fetch(`/api/t9/${query}`)
	
	return suggestions.json()
}