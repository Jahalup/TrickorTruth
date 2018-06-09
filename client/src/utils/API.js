import axios from "axios";

export default {
    getMarkers: function() {
        return axios.get("/api/userentered");
    },
    getuserdata: function(usernm) {
        return axios.get("/api/userentered/" + usernm)
    },

    getzipMarkers: function(zip, treat) {
        console.log("this is api zip: " + zip);
        return axios.get("/api/userentered/" + zip + "/" + treat) ;
    },

    getzippeanut: function(peanut, yeso, treat) {
        return axios.get("/api/userentered/" + peanut + "/" + yeso + "/" + treat);
    },
    

    // getziphealthy: function(yesh, healthyzip, treats) {
    //     return axios.get("/api/userentered/" + yesh + "/" + healthyzip + "/" + treats);
    // },

    saveUserData: function(userdata) {
        return axios.post("/api/userentered", userdata);
    }
    // deleteArticle: function(id) {
    //     console.log("this is api id: " + id)
    //     return axios.delete("/api/articles/" + id);
    // }
    
};