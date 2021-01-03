function clearAll(){
    $('#customer,#item,#order').css('display','none')
}
clearAll();
$('#btncustomer').click(function () {
    clearAll();
    $('#customer').css('display','block');
});

$('#btnitem').click(function () {
    clearAll();
    $('#item').css('display','block');
});

$('#btnorder').click(function () {
    clearAll();
    $('#order').css('display','block');
});