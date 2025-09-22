
function calcularTinta(){
	let altura = parseFloat(document.getElementById("altura").value);
	let largura = parseFloat(document.getElementById("largura").value);
	let paredes = parseInt(document.getElementById("paredes").value);
	let saida = document.getElementById("resultado");
	
	let areaTotal = altura * largura * paredes;

	let demaos = 2;
	let rendimento = 10;

	let litros = areaTotal * demaos / rendimento;


	let GaloesP = Math.ceil(litros/3.6);
	let GaloesG = Math.ceil(litros/18); 


	saida.innerHTML = 
	`Área Total a Ser Pintada: ${areaTotal.toFixed(1)} m² <br>
	 Sugestão de Galões:
	 Galões de 3,6l: ${GaloesP}<br>
	 Galões de 18l : ${GaloesG}<br>
	
	`


	/* Tamanho Galão: 3.6*/
	/* Tamanho Galão: 18*/

}





























function calcularMedia(){
	let n1 = parseFloat((document.getElementById('n1')).value);
	let n2 = parseFloat((document.getElementById('n2')).value);
	let n3 = parseFloat((document.getElementById('n3')).value);
	let n4 = parseFloat((document.getElementById('n4')).value);
	let aluno = document.getElementById("aluno").value;
	let resultado = document.getElementById("resultado");
	
	let media = (n1+n2+n3+n4)/4
	let situacao = media > 6 ? 'Aprovado' : 'Reprovado';
	console.log(aluno);
	console.log(media);
	console.log(situacao);

	resultado.innerHTML = `<p> Aluno: ${aluno}:</p> <p>Média: ${media.toFixed(1)}</p><p>${situacao}</p>`;
};



function exercicios(){
// (DECLARAÇÃO) (NOME VARIAVEL) = (DE ONDE VEM ESSE VALOR).VALUE
// parseInt(document.getElementById("").value -> variaveis inteiras
// parseFloat(document.getElementById("").value -> variaveis decimal
// na variavel numerica.tofixed(1)

	let nome = document.getElementById("nome").value;
	
	let sobrenome = document.getElementById("sobrenome").value;
	
	let anoNasc = parseInt(document.getElementById("anoNasc").value);
			
	let peso = parseFloat(document.getElementById("peso").value);
	
	let anoAtual = new Date().getFullYear();

	let idade = anoAtual - anoNasc;
	
	
	document.getElementById("resultado").innerText = 
	`Olá, ${nome} ${sobrenome}, você tem ${idade} anos e ${peso.toFixed(1)} Kg`;


}

function soma(){
	let valor1 = parseFloat(document.getElementById("valor1").value);
	let valor2 = parseFloat(document.getElementById("valor2").value);

	let soma = valor1 + valor2;

	document.getElementById("resultado").innerText = 
	`A soma de ${valor1} e ${valor2} é ${soma.toFixed(1)}`;

}



