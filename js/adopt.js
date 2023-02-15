const navbar = document.querySelectorAll('.pawMenuBlock')

for (var i = 0; i < navbar.length; i++) {
    navbar[i].addEventListener("mouseover", function(e) {
    // console.log(e.currentTarget.children[1]);
    const ac = document.querySelector('.pawMenu.active');
    // console.log(ac);
    ac.classList.replace('active','hidden');
    e.currentTarget.children[1].classList.replace('hidden','active'); 
        });
    
    if(navbar[i]!=document.querySelector('.pawMenuBlock.active')){
    navbar[i].addEventListener("mouseout", function(e) {
        const block = document.querySelector('.pawMenuBlock.active');
        block.children[1].classList.replace('hidden','active');
        e.currentTarget.children[1].classList.replace('active','hidden'); 

        });
    }

// for (var i = 0; i < navbar.length; i++) {
//     navbar[i].addEventListener("mouseout", function(e) {
//     // console.log(e.currentTarget.children[1]);
//     const ac = document.querySelector('.pawMenuBlock.active');
//     // console.log(ac);
//     ac.children[1].classList.replace('hidden','active');
//     // e.currentTarget.children[1].classList.replace('hidden','active'); 
// });

// const lsBookMark = document.querySelectorAll('.markicon')

// for(var i = 0; i < lsBookMark.length ; i++){
//     console.log('ok');
// //     lsBookMark[i].addEventListener("click", fucntion(e) {
// // //         // if(lsBookMark[i].classList.value == 'markicon') {
// // //         // lsBookMark[i].classList.('')
// // //     // }
        
// // //     // lsBookMark[i].classList.add('not');
// //     });
// }
}

