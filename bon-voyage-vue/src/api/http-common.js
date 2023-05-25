import axios from "axios"

export default axios.create({
    baseURL: "http://localhost:9999/vue",
    headers: {
        "Content-Type": "application/json" //변수이름에 대시가 있으면 따옴표(-되면 none처리됨)
        
    }
});
