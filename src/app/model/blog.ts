import { Autor } from './autor';
export class Blog {
    id: number;
    nome: String;
    resumo: String;
    url: String;
    autor: Autor;
    ativo: boolean;
    rss: any;

}
