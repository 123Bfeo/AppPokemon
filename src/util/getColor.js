import {POKEMON_TYPE_COLORS} from '../util/variables';

const getColor = (type)=> POKEMON_TYPE_COLORS[type.toLowerCase()]

export default getColor;