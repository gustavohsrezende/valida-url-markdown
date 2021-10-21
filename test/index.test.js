const pegaArquivo = require('../index');

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    });
    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('/home/gustavo/javascript/projeto-02/test/src/text-example.md')
        expect(resultado)
            .toEqual(arrayResult);
    });
    it('deve retornar mensagem "não há links" ', async () => {
        const resultado = await pegaArquivo('/home/gustavo/javascript/projeto-02/test/src/text-example-2.md')
        expect(resultado)
            .toBe('não há links');
    });
    it('deve lançar um erro na falta de arquivo', () => {
        async function capturaErro() {
            await pegaArquivo('/home/gustavo/javascript/projeto-02/test/src/');
            expect(capturaErro)
                .toThrowError(/não há arquivo no caminho/);
        }
    });
});
