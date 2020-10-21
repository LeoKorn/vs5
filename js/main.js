
var flexItem = document.querySelectorAll('.flex-item');
// console.log(flexItem); 
// for (var i=0; i<13;i++) {
//   console.log(flexItem[i]);
// }

var count = 0;
var count2 = 6;

function add1() {
  count++;
  count2++;
  if ( count>=12 ) {
    count = 0;
  }
  if ( count2>=12 ) {
    count2 = 0;
  }
  // console.log ( 'add  ' + count + ' ' + count2);
}

function inc1() {
  count--;
  count2--;
 
  if ( count<0 ) {
    count = 11;
  }
  if ( count2<0 ) {
    count2 = 11;
  }
  // console.log ( 'inc  ' + count + ' ' + count2);
  
}


$('.arrowLeft').click( function() {
  console.log ( count );
  console.log ( count + 1 );
  // $(flexItem[ count ]).addClass('hide');
  // $(flexItem[ count2 ]).removeClass('hide');
  // $(flexItem[ count + 1 ]).removeClass('hide');
  $(flexItem [count]).toggleClass('hide');
  $(flexItem [count+1]).toggleClass('hide');

  add1();
 
  
});
$('.arrowRight').click( function() {
  // console.log ( count );
  inc1();

  // $(flexItem[ count2 ]).addClass('hide');
  // $(flexItem[ count ]).addClass('hide');
  // $(flexItem[ count - 1 ]).removeClass('hide');
  $(flexItem [count]).toggleClass('hide');
  $(flexItem [count-1]).toggleClass('hide');


  console.log ( count );
  console.log ( count -1 );



});