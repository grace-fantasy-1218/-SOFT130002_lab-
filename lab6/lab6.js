/*

1.

背景：

    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；

    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。

注意：

    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。

要求：

    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。

    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。

*/

function testTime(){
    function Counter(){
        let count = 0;
        this.getCount = function() {
            return count;
        };
        this.addCount = function() {
            return count ++;
        }
    }
    (function(){
        let i = 1;
        let count = new Counter();
        let double = function(){
            i *= 2;
            count.addCount();
            console.log("Now it is " + i);
        };
        let t1 = setInterval( double, 5000);
        setInterval(function(){
            let timeOut = new Date().getSeconds() % 60 === 0;
            let countOut = count.getCount === 10;
            if(timeOut || countOut){
                clearInterval(t1);
                let result = "Now it is " + i +" , 计数为 " + count.getCount() + " 次，" + (timeOut ? "整点停止" : "整次停止");
                console.log(result);
                clearInterval(this)
            }
        },1000);
    })();
}





/*

2.

要求：

    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。

    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。

    ③邮箱字符串的正则匹配的理解需写入lab文档。

    ④telephone与mail均是字符串。

*/

function testMail(telephone,mail) {
    let teleResult, mailResult;
    let teleTest = /^1\d{10}$/;
    let mailTest = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    if(teleTest.test(telephone)){
        teleResult = "right";
    }
    else teleResult = "wrong";
    if(mailTest.test(mail)){
        mailResult = "right";
    }
    else mailResult = "wrong";
    teleMail = "The telephone is " + teleResult + " and the mail is " + mailResult + "!";
    console.log(teleMail);
}
/*

3.

要求：

    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。

    ②使用console.log打印即可，将该集合打印出来。

    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。

    ④对该函数中用的正则匹配的理解需写入lab文档。

    ⑤str为字符串。

*/

function testRedundancy(str) {
    let rWords = new Set();
    let rPattern = /\b(\w+)\b\s\1\b/gi;
    let rArray = [];
    let result = rPattern.exec(str);
    while(result !== null){
        rArray[rArray.length] = result[0];
        rPattern.lastIndex = result.index + (result[0].length + 1)/2;
        result = rPattern.exec(str);
    }
    rArray.sort(function(value1, value2){
        value1 = value1.toLowerCase();
        value2 = value2.toLowerCase();
        if(value2 > value1)
            return -1;
        else if(value1 > value2)
            return 1;
        else return 0;
    });
    for (let i = 0; i < Math.min(rArray.length, 10); i ++){
        rWords.add(rArray[i]);
    }
    console.log(rWords);
}

/*

4.

背景：

    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。

    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。

    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }

要求：

    ①需要使用Set。

    ②只能使用一次循环。

    ③使用console.log打印即可，将该集合打印出来。

    ④wantInput和actualInput为字符串。

注意：

    ①注意联系生活，并注意观察我给的上述例子。

*/

function testKeyBoard(wantInput, actualInput) {
    let bad = "";
    let wantInput1 = wantInput.toUpperCase();
    let actualInput1 = actualInput.toUpperCase();
    for (let i = 0; i < wantInput.length; i++) {
        let c = wantInput1.charAt(i);
        if (actualInput1.indexOf(c) < 0) {
            bad += c;
        }
    }
    let badKeys = [...new Set(bad)];                                  //去重
    console.log(badKeys);
}

/*

5.

背景：

    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。

要求：

    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。

    比如输入是“  hello  world!  ”，输出应该是“world! hello”。

    ②请使用Array。

    ③使用console.log打印即可，将该字符串打印出来。

    ④只能显式使用一次循环。

    ⑤str为字符串。

*/

function testSpecialReverse(str) {
    let strs = str.split(" ");
    let strs1 = strs.reverse();
    let result = "";
    for(let i = 0; i < strs.length; i++){
        strs1[i].trim();
        if(strs1[i] === ""){}
        else {
        if(i === strs.length - 1){
        result = result +strs1[i];}
        else result = result + strs[i] + " ";
    }}
    console.log(result);
}



/*

6.

背景：

    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。

    例如给定 [2, 7, 11, 15]和9,

    打印结果为[0,1]

要求：

    ①使用Map。

    ②只能显式使用一次循环。

    ③使用console.log打印即可，将满足条件的数组打印出来。

    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为

    [ 0, 3 ]

    [ 1, 2 ]

*/



function twoSum(nums, target) {
    let numSet = new Set(nums);
    let numSet1 = new Set();
    let indexMap = new Map();
   for(let i = 0; i < (nums.length / 2 +1); i ++){
       if(numSet.has(target - nums[i]) && !numSet1.has(i)){
           indexMap.set(i,nums.indexOf(target - nums[i]));
           numSet1.add(nums.indexOf(target - nums[i]));
       }
   }
    for(let [key,value] of indexMap){
        console.log("[" + key + "," + value + "]");
    }
}
/*

7.

背景：

    打印最长的包含不同字符串的子字符串长度。

要求：

    ①使用Map。

    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；

    ③只能显式使用一次循环。

    ④使用console.log打印即可。

    ⑤str为字符串。

*/

function lengthOfLongestSubstring(str) {
    if(str === ""){
        console.log(0);
    }
    let result = "";
    let tempResult = "";
    let stringIndex = new Map();
    for(let i=0; i < str.length; i++){
        if(stringIndex.has(str.charAt(i))) {
            tempResult += str[i];
            if(tempResult.length > result.length) {
                result = tempResult;             }
        } else {
            if(tempResult.length > result.length) {
                result = tempResult;
            }
            let index = tempResult.indexOf(str[i]);
            tempResult = tempResult.slice(index+1) + str[i];
        }
    }
    console.log(result.length);
}

/*

8.

背景：

    该部分只是为了让你们自己动动手更好地感受不同继承方式。

要求：

    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，

    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."

    ②请调用他们并打印相关语句即可。

*/

function Country() {
    this.name = "国家";
}
function DevelopingCountry() {
    Country.call(this);
    this.name = "DevelopingCountry";
    this.sayHi = function(){
        console.log("Hi,i am a developing country.");
    };
}

function PoorCountry() {
    this.name = "PoorCountry";
}
PoorCountry.prototype = new Country();
PoorCountry.prototype.saySad = function(){
    console.log("I am a sad poor country.");};

let DevelopedCountry = Object.create(Country,{
    name : {value: "DevelopedCountry"}
});
DevelopedCountry.sayHappy = function () {
    console.log("I am a Happy developed country.");
}


function test(){
    testTime();
    testMail("19121169135", "2513929489@qq.com");
    testRedundancy("is is hom hom");
    testKeyBoard("7_This_is_a_test", "_hs_s_a_es");
    testSpecialReverse("  hello  world!  ");
    twoSum([1,2,3,4,5],5);
    lengthOfLongestSubstring("abcabcbbb");
    var a = new DevelopingCountry();
    console.log(a.name);a.sayHi();
    var b = new PoorCountry();
    console.log(b.name);b.saySad();
    var c = DevelopedCountry;
    console.log(c.name);c.sayHappy();
}
test();