// 定义getForm函数
function getForm(){
    // 获取myform中number1和number2的值
    var number1 = myform.number1.value;
    var number2 = myform.number2.value;
    // 计算
    var answer = number1 * number2;
    // 弹窗输出结果
    alert(number1 + " * " + number2 + " = " + answer);
}
