// 定义getForm函数
function getForm(){
    // 获取myform中number1和number2的值
    var number1 = myform.number1.value;
    var number2 = myform.number2.value;
    var number0 = 360/number1;
    // 计算
    var answer = Math.sin(number0 * Math.PI / 360) * number2;
    // 弹窗输出结果
    alert(" 弦长应为： " + answer);
}
