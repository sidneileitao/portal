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
  
  aFornecedores.push(["Padaria Santa Maria",["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus faucibus nisl, tincidunt cursus massa gravida vel. Aenean feugiat tortor vitae nibh facilisis, a lobortis lacus tincidunt.","+5511999473653","+5511999473653","1136217788","dsdasa@gmail.com","www.google.com.br","/imagens/padaria.jpg",]]) ;
  aFornecedores.push(["Pães & Doces Da Villa",["Cras at tellus enim. Sed a leo eget nulla hendrerit molestie sit amet eget elit. Integer at dictum tortor. Cras aliquet posuere augue, lacinia commodo urna varius vitae.","+5511999473653","+5511999473653","1136217788","dsdasa@gmail.com","www.google.com.br","/imagens/padaria.jpg",]]) ;
  aFornecedores.push(["Remédios Pães Artesanais",["Integer eu diam in diam gravida dictum. Praesent nec magna facilisis, interdum ipsum eu, mattis diam. Nam sed metus tortor. Vivamus commodo urna nec consequat commodo.","+5511999473653","+5511999473653","1136217788","dsdasa@gmail.com","www.google.com.br","/imagens/padaria.jpg",]]) ;
  
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
