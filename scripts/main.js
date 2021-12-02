let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎来到 hungry-always.github.io，' + storedName;
}
myButton.onclick = function () {
    setUserName();
};
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = "欢迎来到 hungry-always.github.io，" + myName;
}
