var registerButton = document.getElementById("registerButton");
var email = document.getElementById("email");
var userPassword1 = document.getElementById("userPassword1");
var userPassword2 = document.getElementById("userPassword2");
var checkbox = document.getElementById("checkbox");
var emailReminder = document.getElementById("emailReminder");
var userPasswordReminder1 = document.getElementById("userPasswordReminder1");
var userPasswordReminder2 = document.getElementById("userPasswordReminder2");
var checkboxReminder = document.getElementById("checkboxReminder");
registerButton.onclick = function () {
  if (email.value == "" || userPassword1.value == "" || userPassword2.value == "" || userPassword1.value != userPassword2.value || checkbox.checked == false) {
    //判断邮箱是否为空
    if (email.value == "") {
      setStyleWarning(email);
      emailReminder.innerHTML = "请填写邮箱";
    } else {
      setStyleDefault(email);
      emailReminder.innerHTML = "";
    }
    //判断密码是否为空
    if (userPassword1.value == "") {
      setStyleWarning(userPassword1);
      userPasswordReminder1.innerHTML = "请填写密码";
    } else {
      setStyleDefault(userPassword1);
      userPasswordReminder1.innerHTML = "";
    }
    //判断确认密码是否为空
    if (userPassword2.value == "") {
      setStyleWarning(userPassword2);
      userPasswordReminder2.innerHTML = "请填写确认密码";
    } else if (userPassword2.value != userPassword1.value) {
      setStyleWarning(userPassword2);
      userPasswordReminder2.innerHTML = "两次填写密码不一致";
      //判断两次输入密码是否一致
    } else {
      setStyleDefault(userPassword2)
      userPasswordReminder2.innerHTML = "";
    }
    //判断是否勾选隐私协议
    if (checkbox.checked == false) {
      checkboxReminder.innerHTML = "请勾选同意隐私协议";
    } else {
      checkboxReminder.innerHTML = "";
    }
  } else {
    alert('注册成功！');
    //清空表单
    setStyleDefault(email)
    setStyleDefault(userPassword1)
    setStyleDefault(userPassword2)
    reset(email, emailReminder)
    reset(userPassword1, userPasswordReminder1)
    reset(userPassword2, userPasswordReminder2)
    checkbox.checked = false;
    checkboxReminder.innerHTML = ""
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