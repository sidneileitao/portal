$(document).ready(function(){
    $('.sidenav').sidenav();
});

//--------------------------
function retornaCategorias()
{
  var aCategorias = [];

  aCategorias.push(["artesanato",["artesanato","./imagens/artesanato.jpg",]]) ;
  aCategorias.push(["hortifruti",["hortifruti","./imagens/hortifruti.jpg",]]) ;
  aCategorias.push(["padaria",["padaria","./imagens/padaria.jpg",]]) ;
  aCategorias.push(["queijos",["queijos","./imagens/queijos.jpg",]]) ;
  aCategorias.push(["vestuário",["vestuário","./imagens/vestuario.jpg",]]) ;
  aCategorias.push(["reparos domésticos",["reparos domésticos","./imagens/reparos_domésticos.jpg",]]) ;
  aCategorias.push(["serviços automotivos",["serviços automotivos","./imagens/automotivos.jpg",]]) ;

  return aCategorias;

}

//------------------------------------
function retornaFornecedores(categoria)
{
  var aFornecedores = [];
  
  aFornecedores.push(["Padaria Santa Maria",["descrição","+5511999473653","+5511999473653","1136217788","dsdasa@gmail.com","www.google.com.br","/imagens/padaria.jpg",]]) ;
  aFornecedores.push(["Pães & Doces Da Villa",["descrição","+5511999473653","+5511999473653","1136217788","dsdasa@gmail.com","www.google.com.br","/imagens/padaria.jpg",]]) ;
  aFornecedores.push(["Remédios Pães Artesanais",["descrição","+5511999473653","+5511999473653","1136217788","dsdasa@gmail.com","www.google.com.br","/imagens/padaria.jpg",]]) ;
  
  return aFornecedores;

}

//------------------------------------------------
function getPosicaoElemento( aMatriz , xElemento )
{

  var retorno = null ;

  for( var i = 0 ; i < aMatriz.length ; i++ )
  {
    if( aMatriz[i][0] == xElemento )
    {
      retorno = i ;
    }

  }

  return retorno ;

} 
