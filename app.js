// console.log(linguagens); // Imprime o array de linguagens no console para depuração

function pesquisar() {
    // Seleciona o elemento HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se a pesquisa for igual a "nada" // o return finaliza o resto do programa (nao passa para a proxima funcao)
    if(campoPesquisa == "")
    {
        section.innerHTML = "Nenhum resultado foi encontrado."
        return;


    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar o HTML gerado
    let somadasstrings = "";
    let nome="";
    let descricao = "";
    let tags = "";

    // Itera sobre cada linguagem no array 'linguagens'
    for (let dado of linguagens) 
        {
            nome = dado.nome.toLowerCase()
            descricao = dado.descricao.toLowerCase()
            tags = dado.tags.toLowerCase()
        //se nome includes campoPesquisa, entao faça x
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
        {

            // Cria o HTML para cada linguagem e adiciona à string
            somadasstrings += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.download}" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informação</a> 
            </div>
            `;


        }

      if (!somadasstrings) 
        {
            somadasstrings="Nenhum resultado foi encontrado.";
        }
     
    }

    // Atribui o HTML gerado ao elemento 'section'
    section.innerHTML = somadasstrings;
}