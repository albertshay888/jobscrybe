import axios from "axios";

export default {
    // Gets jobs from the Github API
    getJobs: function(q) {
      // console.log(q);
      // console.log(loc);
      return (axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${q.search}&location=${q.location}`));
      //** use the code below when pushing to heroku */
      // return (axios.get(`https://quiet-badlands-79780.herokuapp.com/https://jobs.github.com/positions.json?description=${q.search}&location=${q.location}`));
    },
    // Gets all saved jobs
    getSavedJobs: function() {
      return axios.get("/api/jobs");
    },
    // Deletes the saved job with the given id
    deleteJobs: function(id) {
      // return axios.delete("/api/jobs/" + id);
      return axios.delete(`/api/jobs/` + id);
    },
    // Saves a job to the database
    saveJob: function(jobData) {
      return axios.post(`/api/jobs/${jobData.user}`, jobData);  
    },

    addResume: function(data){
      console.log(data)
      return axios.post("/api/saveResume", data);
    },
 

    logout: function(){
      return axios.get("/logout");
    },

    getResumes: function(user) {
      return axios.get("/api/resume/" + user);
    },
   
    // Deletes the saved resume with the given id
    deleteResume: function(id) {
      return axios.delete("/api/resume/" + id);
    },

  
    calculateAlgo: function(data){
      console.log('running algorithm');
      console.log(data.resumeBody);
      console.log(data.jobDescription);

      var badWords = ["with", "have", "also", "inform"];
      var badWordsMap = {};
      badWords.forEach(function(a) { badWordsMap[a] = 1});
    
    
      
      function wordCheck(word){
        return badWordsMap[word] ? true : false;
      }
    
    
      // first function
      function countWords(str) {
        var result = {};
        var str1 = str.toLowerCase();
        var stringArray = str1.split(  /[.<|/>,;' !-?!$%&^"●)(_#.\s]+/g);
        for (var i = 0; i < stringArray.length; i++) {
          if (wordCheck(stringArray[i])) {
            console.log("bad Word");
          }
        }
        if (str1.length === 0) {
          return {};
        } else {
          for (var i = 0; i < stringArray.length; i++) {
                var keyLength = stringArray[i].length;
                var key = stringArray[i];
            if (result[key]) {
              result[key]++;		
            } else if (keyLength < 3){
              delete result[key];
            } else {
              result[key] = 1;
            }
          }
          }
          return result; 
        }
      
      // first function call
      var resumeObject = countWords(data.resumeBody);
    
     // second function call
      var jdObject = countWords(data.jobDescription);
    
      var resumeWordCount = data.resumeBody.length;
      
      // second function
      function extend(resumeObject, jdObject) {
      for(var i in jdObject){
        if(!(i in resumeObject)){
          jdObject[i] +=  ", ❌  keyword missing from resume";
          resumeObject[i] = jdObject[i];
        }
      }
      return jdObject;
      }
    
      // third function call
      var total = extend(resumeObject, jdObject);
    
       console.log(total)
    
    // third function 
    function addCheckMarkandPercent (total) {
        var final = {};
        var percent = 0;
        var words = 0;
        var correct = 0;
          for (var prop in total) {
            if (total[prop]) {
                words++;
            if(typeof total[prop] === 'number'){
              correct++;
            //   total[prop] += " ✅";
            }
          }
          }
          percent = ((correct/words)*100).toFixed(2);
        
         
      final["Score"] = parseFloat(percent);
      final["Word Count"] = resumeWordCount;
      return final;
      }
    
      // last function call
      var output = addCheckMarkandPercent(total);
      // console.log(output);



      return output;
    },



//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   },
  signUp: function(info){
    return axios.post("/api/signup/", info);
  },
  logIn: function(info){
    // console.log("login works")
    return axios.post("/api/login/", info);
  }
};