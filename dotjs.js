$.ajax({
  url: 'https://localhost:3131/' + window.location.host.replace('www.', '') + '.js',
  dataType: 'text',
  success: function(d) {
    $(function() { eval(d) });
  },
  error: function(){
    console.log('no dotjs server found at localhost:3131');
  }
})
