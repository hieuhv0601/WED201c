//không thông qua html, thêm event = thẻ id.
var input1 = document.getElementById('input_1');
var input3 = document.getElementById('input_3');
var input2 = document.getElementById('input_2');

input1.addEventListener('click', function () {
    input1.style.backgroundColor = 'yellow';
})
function Yellow_Background(num) {
    // if (num == '1') {
    //     // document.getElementById('input_1').style.backgroundColor = 'YELLOW';
    // } 
    if (num == '2') {
        input2.style.backgroundColor = 'YELLOW';
    } else if (num == '3') {
        input3.style.backgroundColor = 'YELLOW';
    }
}
function White_Background(){
    input1.style.backgroundColor = 'WHITE';
    input2.style.backgroundColor = 'WHITE';
    input3.style.backgroundColor = 'WHITE';
}

//nut buttun reload lai mau white
function white_back() {
    input1.style.backgroundColor = 'WHITE';
    input2.style.backgroundColor = 'WHITE';
    input3.style.backgroundColor = 'WHITE';
    
    // location.reload();
}
