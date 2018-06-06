import axios from "axios";

export default {
    getMarkers: function() {
        return axios.get("/api/userentered");
    },
    // queryNYT: function(url) {
    //     return axios.get(url);
    // },
    saveUserData: function(userdata) {
        return axios.post("/api/userentered", userdata);
    }
    // deleteArticle: function(id) {
    //     console.log("this is api id: " + id)
    //     return axios.delete("/api/articles/" + id);
    // }
    
};