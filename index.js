let html = `
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estatística dos Estudantes</title>
    <style>
        .first_card_container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .container_da_tabela {
          border: 1px solid rgba(0, 0, 0, 0.12);
          font-size: .8em;
          text-align: center;
          justify-content: center;
          border-collapse: collapse;
          margin: 0 0 10px 0;
          padding: 0;
          table-layout: fixed;
          width: 100%;
          height: auto;
        }
        .tr_da_tabela {
          background-color: #f8f8f8;
          border: 1px solid #ddd;
          padding: .35em;
        }
        .tr_da_tabela_sem_dados {
          height: 100px; 
          font-size: 1.1em;
        }
        .th_da_tabela {
          border: 1px solid rgba(0, 0, 0, 0.12);
          text-align: center;
          justify-content: center;
          background-color: #f4f4f4;
          padding: .652em;
          text-align: center;
          font-size: 1em;
          letter-spacing: .1em;
          text-transform: uppercase;
        }
        .th_da_tabela_index {
          width: 30px;
        }
        .td_da_tabela {
          padding: .652em;
          text-align: center;
          border: 1px solid rgba(0, 0, 0, 0.12);
          text-align: center;
          justify-content: center;
        }
        .alinhar_a_esquerda {
          text-align: left;
          font-weight: bold;
        }
        .filtrarDados {
          margin-left: 5px;
        }
    </style>
</head>
<body>
    <table class="container_da_tabela table-bordered testando">
        <thead>
          <tr class="tr_da_tabela">
            <th scope="col" class="th_da_tabela">Curso</th>
            <th scope="col" class="th_da_tabela">Periódo</th>
            <th scope="col" class="th_da_tabela">Masculino</th>
            <th scope="col" class="th_da_tabela">Femenino</th>
            <th scope="col" class="th_da_tabela">Total</th>
          </tr>
        </thead>
        <tbody semDados style="display: none">
          <tr>
            <td style="height: 100px; font-size: 1.1em;" colspan="5"> Dados não encontrado!</td>
          </tr>
        </tbody>

        
        <tbody 2014-2-1 style="display:none">
        <tr class="tr_da_tabela">
          <td rowspan="3" data-label="Curso" class="td_da_tabela"> Licenciatura em Gestão de Recursos Humanos </td>
          <td data-label="Manhã" class="td_da_tabela">Manhã</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Manhã)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Tarde" class="td_da_tabela">Tarde</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Tarde)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Noite" class="td_da_tabela">Noite</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Noite)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td colspan="2" data-label="Total Geral" class="td_da_tabela alinhar_a_esquerda">Total Geral: </td>
          <td data-label="Total (Masculino)" class="td_da_tabela">0</td>
          <td data-label="Total (Feminino)" class="td_da_tabela">0</td>
          <td data-label="Total de estudante" class="td_da_tabela">18</td>
        </tr>
      </tbody>
        <tbody 2014-2-1 style="display:none">
        <tr class="tr_da_tabela">
          <td rowspan="3" data-label="Curso" class="td_da_tabela"> Licenciatura em Gestão e Contabilidade </td>
          <td data-label="Manhã" class="td_da_tabela">Manhã</td>
          <td data-label="Masculino" class="td_da_tabela"> 1</td>
          <td data-label="Femenino" class="td_da_tabela"> 1</td>
          <td data-label="Total (Manhã)" class="td_da_tabela"> 2 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Tarde" class="td_da_tabela">Tarde</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Tarde)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Noite" class="td_da_tabela">Noite</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Noite)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td colspan="2" data-label="Total Geral" class="td_da_tabela alinhar_a_esquerda">Total Geral: </td>
          <td data-label="Total (Masculino)" class="td_da_tabela">1</td>
          <td data-label="Total (Feminino)" class="td_da_tabela">1</td>
          <td data-label="Total de estudante" class="td_da_tabela">28</td>
        </tr>
      </tbody>
        <tbody 2014-2-1 style="display:none">
        <tr class="tr_da_tabela">
          <td rowspan="3" data-label="Curso" class="td_da_tabela"> Licenciatura em Gestão de Empresas </td>
          <td data-label="Manhã" class="td_da_tabela">Manhã</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Manhã)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Tarde" class="td_da_tabela">Tarde</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Tarde)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Noite" class="td_da_tabela">Noite</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Noite)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td colspan="2" data-label="Total Geral" class="td_da_tabela alinhar_a_esquerda">Total Geral: </td>
          <td data-label="Total (Masculino)" class="td_da_tabela">0</td>
          <td data-label="Total (Feminino)" class="td_da_tabela">0</td>
          <td data-label="Total de estudante" class="td_da_tabela">41</td>
        </tr>
      </tbody>
        <tbody 2014-1-1 style="display:none">
        <tr class="tr_da_tabela">
          <td rowspan="3" data-label="Curso" class="td_da_tabela"> Licenciatura em Direito </td>
          <td data-label="Manhã" class="td_da_tabela">Manhã</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 1</td>
          <td data-label="Total (Manhã)" class="td_da_tabela"> 1 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Tarde" class="td_da_tabela">Tarde</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Tarde)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Noite" class="td_da_tabela">Noite</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Noite)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td colspan="2" data-label="Total Geral" class="td_da_tabela alinhar_a_esquerda">Total Geral: </td>
          <td data-label="Total (Masculino)" class="td_da_tabela">0</td>
          <td data-label="Total (Feminino)" class="td_da_tabela">1</td>
          <td data-label="Total de estudante" class="td_da_tabela">24</td>
        </tr>
      </tbody>
        <tbody 2014-2-1 style="display:none">
        <tr class="tr_da_tabela">
          <td rowspan="3" data-label="Curso" class="td_da_tabela"> Licenciatura em Direito </td>
          <td data-label="Manhã" class="td_da_tabela">Manhã</td>
          <td data-label="Masculino" class="td_da_tabela"> 1</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Manhã)" class="td_da_tabela"> 1 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Tarde" class="td_da_tabela">Tarde</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Tarde)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Noite" class="td_da_tabela">Noite</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Noite)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td colspan="2" data-label="Total Geral" class="td_da_tabela alinhar_a_esquerda">Total Geral: </td>
          <td data-label="Total (Masculino)" class="td_da_tabela">1</td>
          <td data-label="Total (Feminino)" class="td_da_tabela">0</td>
          <td data-label="Total de estudante" class="td_da_tabela">70</td>
        </tr>
      </tbody>
        <tbody 2014-2-1 style="display:none">
        <tr class="tr_da_tabela">
          <td rowspan="3" data-label="Curso" class="td_da_tabela"> Licenciatura em Economia </td>
          <td data-label="Manhã" class="td_da_tabela">Manhã</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Manhã)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Tarde" class="td_da_tabela">Tarde</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Tarde)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Noite" class="td_da_tabela">Noite</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Noite)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td colspan="2" data-label="Total Geral" class="td_da_tabela alinhar_a_esquerda">Total Geral: </td>
          <td data-label="Total (Masculino)" class="td_da_tabela">0</td>
          <td data-label="Total (Feminino)" class="td_da_tabela">0</td>
          <td data-label="Total de estudante" class="td_da_tabela">26</td>
        </tr>
      </tbody>
        <tbody 2014-2-1 style="display:none">
        <tr class="tr_da_tabela">
          <td rowspan="3" data-label="Curso" class="td_da_tabela"> Licenciatura em Psicologia </td>
          <td data-label="Manhã" class="td_da_tabela">Manhã</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Manhã)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Tarde" class="td_da_tabela">Tarde</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Tarde)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Noite" class="td_da_tabela">Noite</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Noite)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td colspan="2" data-label="Total Geral" class="td_da_tabela alinhar_a_esquerda">Total Geral: </td>
          <td data-label="Total (Masculino)" class="td_da_tabela">0</td>
          <td data-label="Total (Feminino)" class="td_da_tabela">0</td>
          <td data-label="Total de estudante" class="td_da_tabela">19</td>
        </tr>
      </tbody>
        <tbody 2014-2-1 style="display:none">
        <tr class="tr_da_tabela">
          <td rowspan="3" data-label="Curso" class="td_da_tabela"> Licenciatura em Enfermagem </td>
          <td data-label="Manhã" class="td_da_tabela">Manhã</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Manhã)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Tarde" class="td_da_tabela">Tarde</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Tarde)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Noite" class="td_da_tabela">Noite</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Noite)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td colspan="2" data-label="Total Geral" class="td_da_tabela alinhar_a_esquerda">Total Geral: </td>
          <td data-label="Total (Masculino)" class="td_da_tabela">0</td>
          <td data-label="Total (Feminino)" class="td_da_tabela">0</td>
          <td data-label="Total de estudante" class="td_da_tabela">3</td>
        </tr>
      </tbody>
        <tbody 2014-2-1 style="display:none">
        <tr class="tr_da_tabela">
          <td rowspan="3" data-label="Curso" class="td_da_tabela"> Licenciatura em Análises Clínicas </td>
          <td data-label="Manhã" class="td_da_tabela">Manhã</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Manhã)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Tarde" class="td_da_tabela">Tarde</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Tarde)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Noite" class="td_da_tabela">Noite</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Noite)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td colspan="2" data-label="Total Geral" class="td_da_tabela alinhar_a_esquerda">Total Geral: </td>
          <td data-label="Total (Masculino)" class="td_da_tabela">0</td>
          <td data-label="Total (Feminino)" class="td_da_tabela">0</td>
          <td data-label="Total de estudante" class="td_da_tabela">15</td>
        </tr>
      </tbody>
        <tbody 2014-2-1 style="display:none">
        <tr class="tr_da_tabela">
          <td rowspan="3" data-label="Curso" class="td_da_tabela"> Licenciatura em Relações Internacionais </td>
          <td data-label="Manhã" class="td_da_tabela">Manhã</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Manhã)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Tarde" class="td_da_tabela">Tarde</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Tarde)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Noite" class="td_da_tabela">Noite</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Noite)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td colspan="2" data-label="Total Geral" class="td_da_tabela alinhar_a_esquerda">Total Geral: </td>
          <td data-label="Total (Masculino)" class="td_da_tabela">0</td>
          <td data-label="Total (Feminino)" class="td_da_tabela">0</td>
          <td data-label="Total de estudante" class="td_da_tabela">20</td>
        </tr>
      </tbody>
        <tbody 2014-2-1 style="display:none">
        <tr class="tr_da_tabela">
          <td rowspan="3" data-label="Curso" class="td_da_tabela"> Licenciatura em Ciências Farmacêuticas  </td>
          <td data-label="Manhã" class="td_da_tabela">Manhã</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Manhã)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Tarde" class="td_da_tabela">Tarde</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Tarde)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Noite" class="td_da_tabela">Noite</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Noite)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td colspan="2" data-label="Total Geral" class="td_da_tabela alinhar_a_esquerda">Total Geral: </td>
          <td data-label="Total (Masculino)" class="td_da_tabela">0</td>
          <td data-label="Total (Feminino)" class="td_da_tabela">0</td>
          <td data-label="Total de estudante" class="td_da_tabela">14</td>
        </tr>
        <span style="display:none" #Mostrar >Carro 12 vezes</span>
      </tbody>
        <tbody 2014-2-1 style="display:none">
        <tr class="tr_da_tabela">
          <td rowspan="3" data-label="Curso" class="td_da_tabela"> Licenciatura de Engenharia Informática </td>
          <td data-label="Manhã" class="td_da_tabela">Manhã</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Manhã)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Tarde" class="td_da_tabela">Tarde</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Tarde)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td data-label="Noite" class="td_da_tabela">Noite</td>
          <td data-label="Masculino" class="td_da_tabela"> 0</td>
          <td data-label="Femenino" class="td_da_tabela"> 0</td>
          <td data-label="Total (Noite)" class="td_da_tabela"> 0 </td>
        </tr>
        <tr class="tr_da_tabela">
          <td colspan="2" data-label="Total Geral" class="td_da_tabela alinhar_a_esquerda">Total Geral: </td>
          <td data-label="Total (Masculino)" class="td_da_tabela">0</td>
          <td data-label="Total (Feminino)" class="td_da_tabela">0</td>
          <td data-label="Total de estudante" class="td_da_tabela">16</td>
        </tr>
        <span style="display:none" #Mostrar >Carro 12 vezes</span>
      </tbody>

      </table>
</body>
</html>`

function findSpansWithMostra(html) {
  const regex = /<span[^>]*#Mostrar[^>]*>(.*?)<\/span>/gs;
  const matches = [];
  let match;

  while ((match = regex.exec(html)) !== null) {
    matches.push(match[0]);
  }

  return matches;
}

let a = findSpansWithMostra(html);


function extrairNumero(str) {
  const match = str.match(/\d+/);  // Procura por um ou mais dígitos na string
  if (match) {
    return parseInt(match[0]);  // Converte a string correspondente ao número em um inteiro
  } else {
    return null;  // Retorna null se nenhum número for encontrado na string
  }
}

let b = [];

for(let i = 0; i < a.length; i++) {
  let c = extrairNumero(a[i])
  if (c) {
    b.push(c)
  }
}

// Inicie uma variável de soma com valor zero
let soma = 0;

// Percorra cada elemento do array e some à variável de soma
for(let i = 0; i < b.length; i++){
  soma += b[i];
}

console.log(soma, ' SOMA');