<template>
    <div class="dashboard">
        <like-card></like-card>
        <div class="tableGroup">
            <div class="table-head">
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Compass.png"
                     alt="Airplane" class="head-logo"/>
            </div>
            <div class="table">
                <div class="table-body">
                    <div class="table-responsive">
                        <table>
                            <thead>
                            <tr>
                                <th>작성 날짜</th>
                                <th>제목</th>
                                <th>소요일</th>
                                <th>Buttons</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    lorem
                                </td>
                                <td>
                                    lorem
                                </td>
                                <td>
                                    lorem
                                </td>
                                <td>
                                    <div class="btn-group">
                                        <a href="" title="View">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                        <a href="" title="Edit">
                                            <i class="fa fa-pencil"></i>
                                        </a>
                                        <a href="" title="Delete">
                                            <i class="fa fa-trash"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    lorem
                                </td>
                                <td>
                                    lorem
                                </td>
                                <td>
                                    lorem
                                </td>
                                <td>
                                    <div class="btn-group">
                                        <a href="" title="View">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                        <a href="" title="Edit">
                                            <i class="fa fa-pencil"></i>
                                        </a>
                                        <a href="" title="Delete">
                                            <i class="fa fa-trash"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    lorem
                                </td>
                                <td>
                                    lorem
                                </td>
                                <td>
                                    lorem
                                </td>
                                <td>
                                    <div class="btn-group">
                                        <a href="" title="View">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                        <a href="" title="Edit">
                                            <i class="fa fa-pencil"></i>
                                        </a>
                                        <a href="" title="Delete">
                                            <i class="fa fa-trash"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    lorem
                                </td>
                                <td>
                                    lorem
                                </td>
                                <td>
                                    lorem
                                </td>
                                <td>
                                    <div class="btn-group">
                                        <a href="" title="View">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                        <a href="" title="Edit">
                                            <i class="fa fa-pencil"></i>
                                        </a>
                                        <a href="" title="Delete">
                                            <i class="fa fa-trash"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    lorem
                                </td>
                                <td>
                                    lorem
                                </td>
                                <td>
                                    lorem
                                </td>
                                <td>
                                    <div class="btn-group">
                                        <a href="" title="View">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                        <a href="" title="Edit">
                                            <i class="fa fa-pencil"></i>
                                        </a>
                                        <a href="" title="Delete">
                                            <i class="fa fa-trash"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <review-card></review-card>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
const attractionStore = "attractionStore";
const reviewStore = "reviewStore";
import LikeCard from "@/components/user/LikeCard"
import ReviewCard from "@/components/user/ReviewCard"


export default {
    name: 'MyPage',
    data() {
        return {}
    },
    components: {
        LikeCard,
        ReviewCard,
    },
    created() {
        this.getLikeAttraction();
        this.getMyReviewList();
    },
    methods : {
        ...mapActions(attractionStore,["getLikeAttraction"]),
        ...mapActions(reviewStore,["getMyReviewList"]),
    }
}
</script>

<style>
.dashboard {
    padding-top: 30px;
    display: flex;
    flex-flow: row wrap;
}


.table {
    flex: 0 1 50%;
    background: #ffffff;
    border-radius: 6px;
    border: 1px solid #deebfd;
    box-shadow: 0 3px 10px rgba(62, 85, 120, .045);
    padding-left: 6px;
    margin-left: -45px;
    margin-top: 30px;
    padding-top: 5px;
    z-index: -1;
}

.tableGroup {
    display: flex;
    box-shadow: 0 3px 10px rgba(62, 85, 120, .045);
    margin: 0 8px 30px 0px;
    padding-left: 0px;
    width: 100%;
    flex-flow: row wrap;
}

.table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
}

.table .table-head {

    border-bottom: 1px solid #eee;
    padding: 15px 0px 0px 15px;
}

.table .table-body {
    padding: 15px;
    //margin-top: ;
    margin-left: 30px;
}

.table .table-body table {
    width: 100%;
    border-collapse: collapse;
}

.table table thead tr th {
    padding: 0 10px;
    height: 50px;
    vertical-align: middle;
    color: #666;
    font-weight: 500;
    border-bottom-color: #e2e8f0;
    background-color: #f7f8f9;
    border-top-width: 1px;
    border-bottom-width: 1px;
}

.table tbody tr td, .table tbody tr th {
    padding: 10px;
    border-bottom: 1px solid #eee;
    vertical-align: middle;
    font-size: 14px;
    color: #212529;
    text-align: center;
}

.btn-group {
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-group a {
    padding: 3px;
    width: 26px;
    height: 26px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    margin: 0 5px;
    color: #fff;
    background-color: #5dae8b;
    border-color: #5dae8b;
    border-radius: 0.375rem;
    font-weight: 500;
}

.btn-group a {
    text-align: center;
    line-height: 25px;
    display: block;
}

@media only screen and (max-width: 768px) {
    .table {
        flex: 1 1 100%;
        overflow-x: scroll;
    }
}


.head-logo {
    width: 90px;
}
</style>