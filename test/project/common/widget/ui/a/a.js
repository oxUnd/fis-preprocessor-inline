console.log('common:a');
require.async('../b/b.js', function(b) {
    alert('aaaa');
});
