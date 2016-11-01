import { Schema } from normalizr;
import songSchema from './song';

const gameSchema = new Schema('games');

gameSchema.define({
	songs: arrayOf(songSchema),
	winner: songSchema
});

export default gameSchema;

