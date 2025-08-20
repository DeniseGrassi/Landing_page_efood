class Restaurante {
    id: number;
    imagem: string;
    titulo: string;
    nota: string;
    imageEstrela: string;
    infos: string[];
    descricao: string;
    
    constructor(
        id: number,
        imagem: string,
        titulo: string,
        nota: string,
        imageEstrela: string,
        infos: string[],
        descricao: string,
    ) {
        this.id = id;
        this.imagem = imagem;
        this.titulo = titulo;
        this.nota = nota;
        this.imageEstrela = imageEstrela;
        this.infos = infos;
        this.descricao = descricao;
    }
}
export default Restaurante;
