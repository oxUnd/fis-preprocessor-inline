<div class="menu-ui">
    <ul>
        <li><a class="active" href="/photo/index">HOME</a></li>
        <li><a href="/photo/show">SHOW</a></li>
        {%foreach $list as $l%} 
            <li><a href="{%$l.href%}">{%$l.a%}</a></li>
        {%/foreach%}
    </ul>
</div>
{%script %}
    var menu = require('./menu.js');
    menu.init();
{%/script%}
