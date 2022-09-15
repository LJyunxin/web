/*
有待改进的一些问题:
	.用户交互部分比较简陋
	.输入字符串中带多个空格时会出错
	.没有限制密码强度
	.没有输出token
	.密码没有加密
*/

package main

import (
	"fmt"
)

var (
	mod                                        int
	userName, userPassword, storedUserPassword string
	userData                                   = make(map[string]string)
	isPresent                                  bool //用于判断用户数据是否存在
)

func main() {
outer:
	fmt.Print("请输入数字进行对应操作\n1:登录 2:注册 3:修改密码 4:注销 5:退出\n")
	fmt.Scan(&mod)
	switch {
	case mod == 1:
		login()
	case mod == 2:
		register()
	case mod == 3:
		changPassword()
	case mod == 4:
		removeUserData()
	case mod == 5:
		return

	default:
		fmt.Println("操作不存在,请重新选择")
	}
	goto outer
}

// 用户登录
func login() {
	storedUserPassword, isPresent = userDataIsPresent()
	if isPresent {
		fmt.Println("请输入密码")
		fmt.Scan(&userPassword)
		if userPassword == storedUserPassword {
			fmt.Println("登录成功")
		} else {
			fmt.Println("密码错误")
		}
	} else {
		fmt.Println("该用户不存在")
	}
}

// 注册新用户
func register() {
	_, isPresent = userDataIsPresent()
	if isPresent {
		fmt.Println("该用户名已被占用")
	} else {
		fmt.Println("请输入8-24位密码")
		fmt.Scan(&userPassword)
		//验证密码长度
		if len(userPassword) >= 8 && len(userPassword) <= 24 {
			userData[userName] = userPassword
			fmt.Println("注册成功")
		} else {
			fmt.Println("密码格式不符")
		}
	}
}

// 修改用户密码
func changPassword() {
	_, isPresent = userDataIsPresent()
	if isPresent {
		fmt.Println("请输入8-24位新密码")
		fmt.Scan(&userPassword)
		//验证密码长度
		if len(userPassword) >= 8 && len(userPassword) <= 24 {
			userData[userName] = userPassword
			fmt.Println("修改密码成功")
		} else {
			fmt.Println("密码格式不符")
		}
	} else {
		println("该用户不存在")
	}
}

// 注销用户
func removeUserData() {
	_, isPresent = userDataIsPresent()
	if isPresent {
		fmt.Println("请输入密码进行确认")
		fmt.Scan(&userPassword)
		if userPassword == userData[userName] {
			delete(userData, userName)
			println("注销成功")
		} else {
			fmt.Println("密码错误")
		}
	} else {
		println("该用户不存在")
	}
}

// 验证用户数据是否存在
func userDataIsPresent() (string, bool) {
	fmt.Println("请输入用户名")
	fmt.Scan(&userName)
	//通过 comma ok idiom（',ok:='）判断用户数据是否存在，并将对应的用户密码（如果存在）赋值给 storedUserPassword
	storedUserPassword, isPresent := userData[userName]
	return storedUserPassword, isPresent
}
