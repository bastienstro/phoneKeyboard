export const getSuggestions = async (query) => {
	
	let response = await fetch(`/api/t9/${query}`)
	let suggestions = await response.json()
	
	return suggestions
}