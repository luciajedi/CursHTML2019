$(function(){
	$("#swpeople").text("hola");
	$.get("http://51.144.236.83:8080/pokemons/1",function(data){
		$("#swpeople").text(data.name);
	},"json");
});