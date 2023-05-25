
const routeStore={
    namespaced: true,
    state: {
        routeMarkers:[],
        markerInterest:"",
    },
    getters :{

    },
    mutations: {
        ROUTE_MARKER_ADD: (state, marker) => {
            state.routeMarkers.push(marker);
        },
        SET_MARKER_INTEREST:(state,marker)=> {
            state.markerInterest=marker;
        }
    },
    actions :{
        putNewMarkerToRouteMarker({commit}, newMarker){
            commit("ROUTE_MARKER_ADD",newMarker);
        },
        setMarkerInterest({commit},marker){
            commit("SET_MARKER_INTEREST",marker);
        }

        // getMyReviewList ({ commit })  {
        //     myPageReview(
        //         ({ data }) => {
        //             commit("SET_REVIEW_LIST", data);
        //         },
        //         (error) => {
        //             console.log(error);
        //         }
        //     );
        // },
    },
};
export default routeStore;