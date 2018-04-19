/*$( "#sortable" ).sortable({ 
  axis: "x",
  opacity: 0.5,
  start: function(e, ui){
  $(ui.placeholder).hide(300);
  },
  change: function (e,ui){
  $(ui.placeholder).hide().show(300);
  }
});
$( "#sortable" ).disableSelection();
*/
$(function() {
	$("#sortable").sortable();
	$("#sortable").disableSelection();
});