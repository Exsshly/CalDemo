// 定义getForm函数
function getForm(){
    // 获取myform中number1和number2的值
    var number1 = myform.number1.value;
    var number2 = myform.number2.value;
    var list = ["0.00000", "0.00000", "1.00000", "0.86603", "0.70711", "0.58779", "0.50000", "0.43388", "0.38268", "0.34202", "0.30902", "0.28173", "0.25882", "0.23932", "0.22252", "0.20791", "0.19509", "0.18375", "0.17365", "0.16459", "0.15643"];
    var number0 = list[number1];
    // 计算
    var answer = number0 * number2;
    // 弹窗输出结果
    alert(" 弦长应为： " + answer);
}
