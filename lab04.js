var color = prompt('What color do you prefer black or red');
while (!(color== 'black' || color=='red')){
color=prompt('please choose only black or red')
}
var username = prompt('What is your name');
alert ('Welcome' + ' ' + username);
document.write(color + ' is nice')
var Image;
var evaluate = prompt('evaluate your name from 10')
for(var i = 0; i < evaluate; i++){
if (evaluate > 0 && evaluate < 5){
    Image = '<img src="https://bloximages.chicago2.vip.townnews.com/kansan.com/content/tncms/assets/v3/editorial/a/3d/a3d0639c-cf0a-11e7-97b2-8f885ea57fdb/5a14a79421af5.image.jpg?resize=1127%2C630">'
    document.write(Image)

} else if(evaluate >=5 && evaluate <= 10){
Image= '<img src="https://images-na.ssl-images-amazon.com/images/I/61ZX+HEvp8L.jpg">'
document.write(Image)
}

}
var age = prompt('what your age') 

if (age >= 40 ) {
document.write( '<h2>' + 'you are oldest' + '</h2>' ) }
else if (20 < age < 40) {
    document.write( '<h2>' + 'you are yonger' + '</h2>' )
}
     else {alert( 'you are baby' )}

var X = 10;
var B = 11;
console.log(X + B);

var t;
var r = confirm("Press a button!");

