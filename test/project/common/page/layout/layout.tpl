<!DOCTYPE html>
{%html framework="common:static/lib/mod.js"%}
    {%head%}
        <meta charset="utf-8" />
        <title>{%block name="title"%}{%$title%}{%/block%}</title>
        {%block name="meta"%}
        {%/block%}
        {%require name="common:widget/ui/960/960.css"%}
    {%/head%}
    {%body%}
        <style type="text/css">
            .header {
                color: #FFFFFF;
                background: rgb(10, 76, 129);
            }
            .main {
                background: #FFFFFF;
                padding: 10px;
            }

            .footer {
                color: #FFFFFF;
                padding-top: 10px;
                padding-bottom: 10px;
                text-align: center;
                background: rgb(10, 76, 129);
            }
        </style>
        <div class="container_24">
            <div class="header grid_24">
                {%widget name="common:widget/menu/menu.tpl" list=$menu.list test=$menu.test%}
            </div>
            <div class="clear"></div>
            <div class="main grid_24">
                {%block name="main"%}{%/block%}
            </div>
            <div class="clear"></div>
            <div class="footer grid_24">
                {%block name="footer"%}
                &copy; 2013 fis
                {%/block%}
            </div>
        </div>
        <!-- end .container_24 -->
    {%/body%}
{%/html%}
