import { MeiliSearch } from 'meilisearch'
import { readFileSync } from 'fs';
const movies = JSON.parse(readFileSync('./movies.json', 'utf8'));

const client = new MeiliSearch({
    host: 'http://localhost:7700',
    //apiKey: 'masterKey', only if your using cloud
})