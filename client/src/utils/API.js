import axios from "axios";

export default {

    // retrieveuser: function(user) {
    //     return axios.get("/api/searchuser/" + user)
    // },

    getMarkers: function() {
        return axios.get("/api/userentered");
    },
    getuserdata: function(usernm) {
        return axios.get("/api/userentered/" + usernm)
    },

    updateuser: function(userfirstname, userdata) {
        console.log(userfirstname);
        console.log(userdata);
        return axios.put("/api/userentered/" + userfirstname, userdata);
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