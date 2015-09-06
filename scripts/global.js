function EnviaFormulario(){
	var a=$("#nome").val(),b=$("#email").val(),c=$("#gotcha").val(),d=$("#conteudo").val();  
	
	if(!a||!b||!d)
		return alert("Todos os campos s\xe3o obrigat\xf3rios!"); 
	
	if(!IsEmail(b)) 
		return alert("Email Inválido"); 

	var b={nome:a,email:b,_gotcha:c,conteudo:d};

	$.ajax({
		url:"http://formspree.io/edno.moraes+website@gmail.com"
		,method:"POST"
		,data:b
		,dataType:"json"
		,complete:function(){
			alert("E-mail enviado!");
			$("#contactform").foundation("reveal","close");
		}
	})
}

$(document).foundation();

$("#btnEnviarForm").click(function(){
	EnviaFormulario();
});

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}