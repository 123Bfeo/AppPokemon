import {API_HOST} from '../util/variables';

export async function getPokemonsApi(nextUrlApi){
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        //Recibe el nextUrl que inicialmente está en el Null por lo cual se realizara la primera llamada normal
        //para el resto de llamadas nextUrl traera la url para los demás elementos
        if(nextUrlApi === null){
            const response = await fetch(url);
            const result = await response.json()
            return result;
        }else{
            const response = await fetch(nextUrlApi);
            const result = await response.json()
            return result;
        }

    } catch (error) {
        throw error;
    }
}

export async function getPokemonDetailApi (url){
    try {
        const response = await fetch(url);
        const result = await response.json()
        return result;

    } catch (error) {
        throw error;
    }
}


export async function pokemonDetail(id){
    try {
        const url = `${API_HOST}/pokemon/${id}`;
        const response = await fetch(url);
        const result = await response.json()
        return result;

    } catch (error) {
        throw error;
    }
}
