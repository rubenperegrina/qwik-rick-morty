export const apiService = async (id?: string) => {
    const api_url = 'https://rickandmortyapi.com/api/character';
    const endPoint = id ? `${api_url}/${id}` : api_url;

    try {
        const data = await fetch(endPoint,{
            method: 'GET',
        })
        return data.json();
    } catch (error) {
        console.log(error);
    }
};