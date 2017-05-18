$(function() {

$('.load-stuff').on('click', function(event) {


	$.ajax({
		url: 'https://api.chucknorris.io/jokes/random',
		method: 'GET',
	}).then(function(data){
		console.log(data);
		var newHtml = $('<div>').addClass('my-new-content').html(data.value);
	$('.target').html(newHtml);
}).catch(function(err) {

	console.log('we got an error!');
	console.log(err);

});

});
});

