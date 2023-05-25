<template>
    <div class="box">
        <h1>회원가입</h1>
        <div class="in">
            <label for="loginId">아이디</label>
            <div>
                <input type="text" v-model="newUser.loginId" placeholder="아이디 입력" /><img
                    v-if="newUser.loginId"
                    src="../assets/signup/ok.svg"
                    alt=""
            />
            </div>
            <label for="name">이름</label>
            <div>
                <input type="text" v-model="newUser.name" placeholder="사용할 이름을 입력" /><img
                    v-if="newUser.name"
                    src="../assets/signup/ok.svg"
                    alt=""
            />
            </div>
            <label for="email">이메일</label>
            <div>
                <input type="text" v-model="newUser.email" placeholder="이메일주소 입력" /><img
                    v-if="newUser.email.length >= 6"
                    src="../assets/signup/ok.svg"
                    alt=""
            />
            </div>

            <div class="button_action">
                <button v-on:click="newUser.email = newUser.email + '@gemail.com'">@gemail.com</button>
                <button v-on:click="newUser.email = newUser.email + '@naver.com'">@naver.com</button>
                <button v-on:click="newUser.email = newUser.email + '@kakao.com'">@kakao.com</button>
                <button v-on:click="newUser.email = newUser.email + '@daum.net'">@daum.net</button>
            </div>
        </div>

        <div class="in">
            <label for="pw">비밀번호</label>
            <div>
                <input
                        v-model="newUser.pw"
                        type="password"
                        placeholder="6글자 이상으로 만들어주세요"
                        required
                /><img v-if="newUser.pw.length >= 6" src="../assets/signup/ok.svg" alt="" />
            </div>
            <div class="password_bar">
                <div :class="{ bar: true, green: newUser.pw.length >= 1 }"></div>
                <div :class="{ bar: true, green: newUser.pw.length >= 3 }"></div>
                <div :class="{ bar: true, green: newUser.pw.length > 5 }"></div>
            </div>
            <label for="password_confimation">비밀번호 확인</label>
            <div>
                <input
                        v-model="newUser.password_confirmation"
                        type="password"
                        placeholder="비밀번호 입력..."
                        required
                />
                <img v-if="newUser.pw === newUser.password_confirmation" src="../assets/signup/ok.svg" alt="" /><img
                    v-else
                    src="../assets/signup/not_ok.svg"
                    alt=""
            />
            </div>
        </div>
        <button v-if="isActive" class="o signup" @click="register">가입하기</button>
        <button v-if="!isActive" class="x signup">유효하지 않은 입력</button>
    </div>
</template>

<script>

import { mapActions } from "vuex";
const userStore = "userStore";

export default {

    data() {
        return {
            newUser:{
                pw: "",
                loginId: "",
                name: "",
                email: "",
                password_confirmation: "",
            },

            isActive: false,
        };
    },
    methods: {
        ...mapActions(userStore,["registerNewUser"]),
        setActive() {
            if (
                this.newUser.pw.length >= 6 &&
                this.newUser.loginId != "" &&
                this.newUser.name != "" &&
                this.newUser.email != "" &&
                this.newUser.pw === this.newUser.password_confirmation
            ) {
                console.log("되나?");
                const validateEemail = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+/;
                if (validateEemail.test(this.newUser.email)) {
                    console.log("된다!");
                    this.isActive = true;
                } else {
                    this.isActive = false;
                }
            } else {
                this.isActive = false;
            }
        },
        register(){
            console.log(this.newUser);
            this.registerNewUser(this.newUser);
            alert("로그인 페이지로 이동합니다");
            this.$router.push({ name: "login" });
        }
    },
    watch: {
        newUser: {
            deep: true,
            handler() {
                this.setActive();
            }
        },
    },
};
</script>

<style>
.box {
    margin: 2em auto;
    background-color: #fff;
    display: flex;
    border-radius: 1em;
    width: 30vw;
    flex-direction: column;
    padding: 2em;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    position: relative;
}

.box .message {
    background-color: #ebecf0;
    border-radius: 0.5em;
    padding: 1em;
}

.box .red {
    background-color: #e45656a4;
    color: #fff;
    visibility: visible;
}

.box .green {
    background-color: rgba(109, 209, 109, 0.664);
    color: #fff;
    visibility: visible;
}

.box .visibility {
    visibility: hidden;
}

.box .banner_high {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1em 0;
}

.box .banner_high img {
    width: 3em;
}

.box .banner_high h1 {
    margin: 0.6em;
    font-weight: 600;
}

.box .banner_high .language {
    display: flex;
    border-radius: 0.5em;
    background-color: #f9fafc;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 0px 3px 0px;
}

.box .banner_high .language .flag {
    cursor: pointer;
    margin: 0.3em;
    border-radius: 0.3em;
    padding: 0.3em 0.6em;
    display: flex;
}

.box .banner_high .language .flag img {
    width: 2em;
}

.box .signup {
    padding: 1.4em;
    color: #fff;
    border-radius: 0.7em;
    transition: 250ms;
}

.x {
    background-color: #eabb4d;
    border: 1px solid #eabb4d;
}


.o {
    content: "가입하기";
    background-color: #4b548b;
    border: 1px solid #4b548b;
}
.o:hover {
    border: 1px solid #4b548b;
    background-color: transparent;
    color: #4b548b;
}

.box .in {
    display: flex;
    flex-direction: column;
    margin: 0.8em 0;
}

.box .in div {
    display: flex;
    align-items: center;
    width: 100%;
}

.box .in label {
    margin: 0.2em;
}

.box .in img {
    width: 2em;
    margin: 0 0.5em;
}

.box .in v-text-field {
    display: flex;
    width: 100%;
}

.box .in input {
    width: 100%;
    padding: 1em;
    display: flex;
    border: 1px solid #ebecf0;
    border-radius: 0.7em;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 0px 3px 0px;
    background-size: 50px;
}

.box .in .button_action {
    display: flex;
    flex-direction: row;
    margin: 0.5em 0;
}

.box .in .button_action button {
    border: 0;
    padding: 0.4em 0.8em;
    margin: 0.2em;
    background-color: #fff;
    border: 1px solid #ebecf0;
    cursor: pointer;
    transition: 250ms;
    border-radius: 5em;
}

.box .in .button_action button:hover {
    background-color: #e8e8e8;
}

.box .check_bar {
    margin: 1em 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.box .check_bar a {
    color: #000;
}

.box .check_bar div input[type="checkbox"] {
    margin: 0 1em;
}

.box span {
    text-align: center;
    margin: 1em 0;
    color: #677083;
}

.box span a {
    color: #000;
}

.box .password_bar {
    display: flex;
    width: 100%;
}

.box .password_bar .bar {
    width: 25%;
    height: 6px;
    background-color: #ebecf0;
    border-radius: 1em;
    margin: 6px;
}

.box .password_bar .green {
    background-color: #6dd16d;
}

.gold-mid {
    background-color: #666;
}

.gray-lighter {
    background-color: #c2c2c2;
}

.toggle-wrapper {
    display: inline-block;
    position: relative;
    cursor: pointer;
    width: 32px;
    height: 18px;
    border-radius: 9999px;
}

.toggle-wrapper:focus {
    outline: 0;
}

.toggle-background {
    display: inline-block;
    border-radius: 9999px;
    height: 100%;
    width: 100%;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.4s ease;
}

.toggle-indicator {
    position: absolute;
    height: 14px;
    width: 14px;
    left: 2px;
    bottom: 2px;
    background-color: #fff;
    border-radius: 9999px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s ease;
}

.active {
    background-color: #fff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 0px 3px 0px;
}
</style>