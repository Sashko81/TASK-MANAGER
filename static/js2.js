
var form = document.forms['myform2'];
var el = form.elements.st[0];
alert( el.checked );

var el = document.getElementById('man');
alert( el.checked );

var form = document.forms['myform3'];
var el=form.elements.pravula;

alert( el.checked );
var el = document.getElementById('pravula');
alert( el.checked );

var form = document.forms['myform4'];
var el = form.elements.pr;
alert( el.value );

var el = document.getElementById('el_pr');
alert( el.value );

var el = document.getElementById('el_pr');
alert( el.selectedIndex );

var el = document.getElementById('sl_st');
var s='';
for(i=0;i<el.options.length;i++){
    if(el.options[i].selected==true) s+=' '+el.options[i].value;
}

alert('selected: '+s);
