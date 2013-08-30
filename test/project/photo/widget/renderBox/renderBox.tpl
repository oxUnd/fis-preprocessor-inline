<div id="renderBox">
    <div class="facebook"></div>
    <div class="chrome"></div>
    <div class="firefox"></div>
    <div class="repeat-x"></div>
    
    <button id="render-btn">Click ME!</button>
    {%script id="test" type="text/javascript"%}
        document.getElementById('render-btn').onclick = function() {
            require.async('./renderBox.js', function(render) {
                render.hello();
            });
        };
    {%/script%}
</div>