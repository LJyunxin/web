var loginButton = document.getElementById("loginButton");
var email = document.getElementById("email");
var userPassword = document.getElementById("userPassword");
var emailReminder = document.getElementById("emailReminder");
var userPasswordReminder = document.getElementById("userPasswordReminder");
loginButton.onclick = function () {
  if (email.value == "" || userPassword.value == "") {
    //判断是否填写邮箱
    if (email.value == "") {
      setStyleWarning(email);
      emailReminder.innerHTML = "请填写邮箱";
    } else {
      setStyleDefault(email);
      emailReminder.innerHTML = "";
    }
    //判断是否填写密码
    if (userPassword.value == "") {
      setStyleWarning(userPassword);
      userPasswordReminder.innerHTML = "请填写密码";
    } else {
      setStyleDefault(userPassword);
      userPasswordReminder.innerHTML = "";
    }
  } else {
    alert('登录成功');
    //清空表单
    setStyleDefault(email);
    setStyleDefault(userPassword);
    reset(email, emailReminder)
    reset(userPassword, userPasswordReminder)
  }
}

/*------更改/重置 input-box，reminder 属性--------*/
function setStyleWarning(className) {
  className.classList.remove("input-box-default");
  className.classList.add("input-box-warning");
  //为了演示，此处分别使用remove和add,用replace会更简洁
}

function setStyleDefault(className) {
  className.classList.replace("input-box-warning", "input-box-default");
}

function reset(className, reminderClassName) {
  className.value = "";
  reminderClassName.innerHTML = "";
}