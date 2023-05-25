<template>
    <div>
        <div class="menu" id="menu">
            <div class="menu-logo">
                <img :src="userInfo.profileImg" class="profile-img" alt="">
            </div>
            <!--      <div class="menu-name">-->
            <!--        <h2>김싸피 (ssafy)</h2>-->
            <!--      </div>-->
            <div class="menu-list">
                <div class="menu-list-title">
                    User Info
                    <b-button v-b-modal.modal-center style="margin-left: 10px" @click="setDefault">정보 수정하기</b-button>
                    <b-modal id="modal-center" centered title="정보 수정하기">
                        <div class="modal-body">
                            <div>
                                <label for="profileImg" class="col-form-label">프로필이미지:</label>
                                <input type="file" accept="image/*" id="profileImg"/>
                            </div>
                            <div class="form-group">
                                <label for="name" class="col-form-label">이름 변경</label>
                                <div >
                                <b-input type="text"  v-model="updateUser.name"  id="name" style="width: 85%; display: inline-block"/><img
                                v-if="updateUser.name"
                                src="../../assets/signup/ok.svg"
                                alt=""
                                />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="ageRange" class="col-form-label">연령대 </label>
                                <div class="button_action">
                                    <span v-for="n in (0,9)" v-bind:key="n"                                    >
                                    <pretty-radio class="p-icon p-curve p-jelly" name="ageRange"  color="primary"
                                    v-model="age" :value="n*10+'~'+(n*10+9)">
                                        <i slot="extra" class="icon mdi mdi-check"></i>
                                        {{n*10+"~"+(n*10+9)}}
                                    </pretty-radio></span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="pw" class="col-form-label">Message:</label>
                                <div>
                                    <b-input
                                        v-model="updateUser.pw"
                                        type="password"
                                        placeholder="6글자 이상으로 만들어주세요"
                                        style="width: 85%; display: inline-block"
                                        required

                                    /><img v-if="updateUser.pw.length >= 6" src="../../assets/signup/ok.svg" alt="" />
                                </div>
                                <div class="password_bar">
                                    <div :class="{ bar: true, green: updateUser.pw.length >= 1 }"></div>
                                    <div :class="{ bar: true, green: updateUser.pw.length >= 3 }"></div>
                                    <div :class="{ bar: true, green: updateUser.pw.length > 5 }"></div>

                                </div>
                                <label for="password_confimation">비밀번호 확인</label>
                                <div>
                                    <b-input
                                        v-model="updateUser.password_confirmation"
                                        type="password"
                                        placeholder="비밀번호 입력..."
                                        required
                                        style="width: 85%; display: inline-block"
                                    />
                                    <img v-if="updateUser.pw === updateUser.password_confirmation" src="../../assets/signup/ok.svg" alt="" /><img
                                    v-else
                                    src="../../assets/signup/not_ok.svg"
                                    alt=""
                                />
                                </div>
                            </div>
                        </div>
                    </b-modal>
                </div>
                <ul>
                    <li>{{ userInfo.name }}</li>
                    <li>{{ userInfo.loginId }}</li>
                    <li>{{ userInfo.ageRange }}</li>
                    <li>{{ userInfo.email }}</li>
                </ul>

            </div>
        </div>
        <div class="sidebar-list" id="sidebar">
            <div class="sidebar-list-item">
                <router-link to="/">
                    <i class="fa fa-home"></i>
                    <span class="tooltip">Dashboard</span>
                </router-link>
            </div>
            <div class="sidebar-list-item">
                <router-link to="/about">
                    <i class="fa fa-user"></i>
                    <span class="tooltip">About</span>
                </router-link>
            </div>
            <div class="sidebar-list-item">
                <a href="">
                    <i class="fa fa-download"></i>
                    <span class="tooltip">Download</span>
                </a>
            </div>
            <div class="sidebar-list-item">
                <a href="">
                    <i class="fa fa-calendar"></i>
                    <span class="tooltip">Calendar</span>
                </a>
            </div>
            <div class="sidebar-list-item">
                <a href="">
                    <i class="fa fa-star"></i>
                    <span class="tooltip">Star</span>
                </a>
            </div>
            <div class="sidebar-list-item">
                <a href="">
                    <i class="fa fa-shopping-bag"></i>
                    <span class="tooltip">Products</span>
                </a>
            </div>
            <div class="sidebar-list-item">
                <a href="">
                    <i class="fa fa-clock-o"></i>
                    <span class="tooltip">Time</span>
                </a>
            </div>
            <div class="sidebar-list-item">
                <a href="">
                    <i class="fa fa-cogs"></i>
                    <span class="tooltip">Config</span>
                </a>
            </div>
            <div class="sidebar-list-item">
                <a href="">
                    <i class="fa fa-sitemap"></i>
                    <span class="tooltip">Sitemap</span>
                </a>
            </div>
            <div class="sidebar-list-item">
                <a href="">
                    <i class="fa fa-sign-out"></i>
                    <span class="tooltip">Sign out</span>
                </a>
            </div>
        </div>
    </div>

</template>

<script>
import PrettyRadio from "pretty-checkbox-vue/radio"
import {mapState} from "vuex";
import {register} from "@/api/user";

const userStore = "userStore";
export default {

    name: 'MyPageNav',
    data() {
        return {
            updateUser:{
                pw: "",
                name: "",
                password_confirmation: "",
                profileImg:"",
                ageRange:"",
            },
            isActive: false,
            age:""
        }
    },
    methods: {
        setDefault(){
            this.updateUser.name = this.userInfo.name;
            this.updateUser.profileImg = this.userInfo.profileImg;
        },
        setActive(user) {
            console.log(this.age);
            console.log(user.pw);
            if (
                user.pw.length >= 6 &&
                user.loginId != "" &&
                user.name != "" &&
                user.email != "" &&
                user.pw === user.password_confirmation
            ) {
                console.log("되나?");
                const validateEemail = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+/;
                if (validateEemail.test(user.email)) {
                    console.log("된다!");
                    this.isActive = true;
                    user.ageRange=this.age;
                } else {
                    this.isActive = false;
                }
            } else {
                this.isActive = false;
            }
        },
        register(){
            register(
                this.updateUser,
                () => {
                    alert("회원가입 성공! 로그인 창으로 이동합니다");
                    this.$router.push({ name: "login" });
                },
                async () => {
                    alert("회원가입 실패");
                }
            );
        }
    },
    computed: {
        ...mapState(userStore, ["userInfo"]),
    },
    components : {
        PrettyRadio,
    },
    watch: {
        updateUser: {
            deep: true,
            handler() {
                this.setActive(this.updateUser);
            }
        },
    },
}
</script>

<style>
.menu {
    width: 300px;
    float: left;
}

.nav {
    width: 80px;
    height: 100%;
    display: inline-block;
    background-color: #5DAE8B;
    position: fixed;
}

.nav-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}

.nav-logo img {
    width: 50px;
    padding: 10px;
    vertical-align: middle;
}

.nav-mobile {
    display: none;
}

@media only screen and (max-width: 768px) {
    .nav {
        height: auto;
    }

    .nav-mobile {
        display: block;
        cursor: pointer;
        position: absolute;
        right: -3rem;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.4rem;
        padding: 2px 0.5rem 0;
        border-radius: 2px;
    }

    .nav-mobile i {
        font-size: 30px;
        color: #5CAD8A;
    }
}

.menu {
    height: 100%;
    background: #fff;
    box-shadow: 0px 0px 40px 0px rgba(82, 63, 105, 0.1);
}

.menu-logo {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 200px;
}

.menu-logo img {
    box-shadow: 0px 5px 5px 0px rgba(44, 44, 44, 0.2);
    border: 2px solid #ccd4e8;
    padding: 4px;
    border-radius: 50%;
    margin-top: 90px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.menu-name {
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}

.menu-name h2 {
    text-align: center;
    margin-top: 50px;
    font-size: 17px;
}

.menu-name-social-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.menu-name-social-icons a {
    margin: 0px 10px 10px;
    color: #41B883;
    background: #ebeef6;
    border-radius: 4px;
    padding: 10px;
    width: 20px;
    height: 20px;
    text-align: center;
}

@media only screen and (max-width: 768px) {
    .menu {
        left: -100%;
        transition: all 500ms ease-in-out;
    }

    .showMenu {
        left: 5rem;
    }

}

.header-top {
    position: fixed;
    top: 0;
    width: 100%;
    height: 71px;
    padding: 0rem;
    background-color: #fff;
    transition: all .2s ease;
    box-shadow: 0px 0px 40px 0px rgba(82, 63, 105, 0.1);
}

.header-top-content {
    padding-left: 370px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-top-content input[type='text'] {
    border: 1px solid #e2e8f5;
    background-color: #ffffff;
    height: 30px;
    border-radius: 6px;
    width: 232px;
    padding: 5px 10px;
}

.options-user {
    padding-right: 25px;
    list-style: none;
}

.options-user a.options-user-head {
    font-size: 20px;
    border: 1px solid #e2e8f5;
    padding: 10px;
    border-radius: 4px;
    color: #99CDA9;
}

.options-user ul li {
    position: relative;
}

.options-user li ul {
    display: none;
    background-color: #ffffff;
    width: 100%;
    border-radius: 0;
    box-shadow: 0px 0px 40px 0px rgba(82, 63, 105, 0.1);
    border: 1px solid #deebfd;
    position: absolute;
    top: 70px;
    left: auto;
    right: 10px;
    bottom: auto;
    width: 230px;
    border-width: 1px;
    border-radius: 6px;
    list-style: none;
}

.options-user li ul:before {
    content: '';
    position: absolute;
    top: -8.5px;
    right: 24px;
    border-bottom: 9px solid #fff;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
}

.options-user li ul li a {
    position: relative;
    padding: 8px 15px;
    height: 38px;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #000;
    border-bottom: 1px solid #eee;
}

.options-user li ul li a:hover {
    background-color: #eee;
}

.options-user li ul li a i {
    margin-right: 10px;
}

.options-user li a:hover .options-user li ul {
    visibility: visible;
}

@media only screen and (max-width: 768px) {
    .header-top-content input[type="text"] {
        width: 60%;
    }

    .header-top-content {
        padding-left: 132px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .options-user {
        margin-top: 0px;
    }
}

.sidebar-list {
    position: fixed;
    top: 12%;

    display: flex;
    flex-direction: column;
    width: 80px;
}

.sidebar-list-item {
    flex: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 15px 0;
    position: relative;
}

.sidebar-list-item i {
    color: #fff;
    font-size: 25px;
    display: block;
    line-height: 1;
}

.sidebar-list-item .tooltip {
    visibility: hidden;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 20px;
    font-size: 12px;
    border-radius: 6px;
    position: absolute;
    top: 0;
    left: 80%;
    min-width: 45px;
}

.sidebar-list-item:hover .tooltip {
    visibility: visible;
}

@media only screen and (max-width: 768px) {
    .sidebar-list {
        left: -100%;
        transition: all 300ms ease-in-out;
        background-color: #5CAD8A;
        height: 100%;
    }

    .showSidebar {
        left: 0%;
        top: 0;
    }
}

.menu-list {
    padding: 15px 25px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    margin-top: 65px;
}

.menu-list ul {
    list-style: none;
    margin-top: 20px;
}

.menu-list ul li {
    font-size: 16px;
    color: #2d3240;
    padding: 10px 0;
    display: block;
    font-weight: 400;
    line-height: 1;
}

.menu-list ul li a:hover {
    color: #99cda9;
}

.menu-list-title {
    padding: 0;
    border-top: 0;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
    font-size: 18px;
    color: #000;
    font-weight: 600;
    position: relative;
    margin: 15px 0px 0px 30px;
}

.menu-list-title::before {
    content: "";
    display: block;
    width: 50px;
    height: 1px;
    background-color: #99CDA9;
    position: absolute;
    bottom: -1px;
    left: 0;
}

.dropdown {
    position: relative;
    display: block;
    transition: all 300ms ease-in-out;
}

.dropdown-content {
    display: none;
    min-width: 160px;
    margin: 5px 20px;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    color: #99cda9;
}

.show {
    display: block !important;
}

.menu-list-item-2 {
    display: flex;
    align-items: center;
    /*justify-content: space-between;*/
}

.menu-list-item-2 {
    background-color: #f9f9f9;
    margin-bottom: 10px;
}

.menu-list-item-2 h5 {
    margin: 0;
    padding-left: 10px;
}

.menu-list-item-2 i {
    background: #ebeef6;
    padding: 10px;
    width: 20px;
    height: 20px;
    text-align: center;
}

.menu-list::-webkit-scrollbar {
    width: 5px;
}

.menu-list::-webkit-scrollbar-track {
    background-color: #f4f4f4;
}

.menu-list::-webkit-scrollbar-thumb {
    background-color: #f1f1f1;
}

.menu-list::-webkit-scrollbar-thumb:hover {
    background: #99CDA9;
}

.profile-img {
    width: 100px;
}
.form-group img {
    width: 2em;
    margin: 0 0.5em;
}
.password_bar .bar {
    display :inline-block;
    width: 25%;
    height: 6px;
    background-color: #ebecf0;
    border-radius: 1em;
    margin: 6px;
}

.password_bar .green {
    background-color: #6dd16d;
}
</style>