import axios from "axios";

export default {
    // Gets jobs from the Github API
    getJobs: function(q) {
      // console.log(q);
      // console.log(loc);
      // return (axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${q.search}&location=${q.location}`));
      //** use the code below when pushing to heroku */
      return (axios.get(`https://quiet-badlands-79780.herokuapp.com/https://jobs.github.com/positions.json?description=${q.search}&location=${q.location}`));
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
        var stringArray = str1.split(  /[.<|/>,;' !=-?!$%&^"●)(_#.\s]+/g);
        for (var i = 0; i < stringArray.length; i++) {
          if (wordCheck(stringArray[i])) {
            console.log("bad Word");
          }
        }
        if (str1.length === 0) {
          return {};
        } else {
          for (var i = 0; i < stringArray.length; i++) {
            if(stringArray[i] == "ability") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "able") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "accessibility") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "accomplish") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "across") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "advanced") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "after") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "agencies") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "agency") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "available") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "become") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "being") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "benefits") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "best") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "brainstorm") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "brand") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "branding") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "brands") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "building") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "build") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "bunch") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "chain") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "chance") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "client") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "clients") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "closely") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "come") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "comfortable") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "common") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "communicate") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "communication") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "computer") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "consumers") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "contact") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "container") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "containers") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "continous") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "contributor") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "control") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "credit") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "cupertino") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "customers") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "dedicated") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "defining") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "demand") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "develop") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "developer") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "developers") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "developing") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "disciplines") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "dispersed") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "diverse") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "docker") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "education") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "embedded") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "empowerment") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "enjoy") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "ensure") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "equivalent") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "excellent") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "exclusively") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "experience") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "exposure") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "extra") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "familiarity") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "focus") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "folks") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "fostered") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "from") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "full-service") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "geographically") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "getting") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "goal") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "google") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "great") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "have") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "headquartered") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "help") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "humblebrag") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "ideas") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "in-demand") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "including") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "independent") {
              stringArray.splice(i, 1);
            } 
            if(stringArray[i] == "individuals") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "integrate") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "involving") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "itself") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "job") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "join") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "journey") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "knowledge") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "learn") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "libraries") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "looking") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "love") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "manage") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "management") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "manager") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "meaningful") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "mesos") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "mission") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "mixture") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "modeling") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "modern") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "more") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "most") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "must") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "onsite") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "order") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "other") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "patterns") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "peers") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "people") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "planning") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "platforms") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "plus") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "potentially") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "prefered") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "primary") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "prior") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "priorities") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "processes") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "project") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "proprietary") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "requirements") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "responsibilities") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "right") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "rise") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "role") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "rooted") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "satisfying") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "science") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "short") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "should") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "sought") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "source") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "specifications") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "spontaneous") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "staffed") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "states") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "still") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "strategy") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "success") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "such") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "suite") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "sunnyvale") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "supply") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "tasks") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "team") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "teams") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "technology") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "technologies") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "tests") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "test") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "that") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "their") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "there") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "these") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "they") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "third-party") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "this") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "through") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "time") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "tools") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "traction") {
              stringArray.splice(i, 1);
            }

             if(stringArray[i] == "united") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "using") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "varying") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "verbal") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "websites") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "well") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "well-known") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "we're") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "what") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "where") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "will") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "willingness") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "with") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "work") {
              stringArray.splice(i, 1);
            }
            
            if(stringArray[i] == "working") {
              stringArray.splice(i, 1);
            }
             if(stringArray[i] == "world") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "writing") {
              stringArray.splice(i, 1);
            }
             if(stringArray[i] == "written") {
              stringArray.splice(i, 1);
            }
            if(stringArray[i] == "years") {
              stringArray.splice(i, 1);
            }
             if(stringArray[i] == "you'll") {
              stringArray.splice(i, 1);
            }
       
                var keyLength = stringArray[i].length;
                var key = stringArray[i];
            if (result[key]) {
              result[key]++;		
            } else if (keyLength <= 3){
              delete result[key];
            } else {
              result[key] = 1;
            }
          }
          }
          return result; 
        }
      
      var resumeWordCount = data.resumeBody.length;
      var resumeObject = countWords(data.resumeBody);
      // console.log(resumeObject);
      var jdObject = countWords(data.jobDescription);
      // console.log(jdObject);
    
      function extend(resumeObject, jdObject) {
      for(var i in jdObject){
        if(!(i in resumeObject)){
          jdObject[i] +=  ", ❌  keyword missing from resume";
          resumeObject[i] = jdObject[i];
        }
      }
      return jdObject;
      }
    
    
      var total = extend(resumeObject, jdObject);
    //   var totalList = extend(resumeObject, jdObject);
    
    
      function addCheckMarkandPercent (total) {
        var final = [];
        var percent = 0;
        var words = 0;
        var correct = 0;
          for (var prop in total) {
            if (total[prop]) {
                words++;
            if(typeof total[prop] === 'number'){
              correct++;
    
              total[prop] += " ✅";
    
            }
          }
          }
          percent = parseFloat((correct/words)*100).toFixed(2);
    
      final.push("JOB MATCH RATE SCORE: " + percent + "%!");
      final.push("RESUME WORD COUNT: " + resumeWordCount);
      final.push("KEYWORD RESULT: ");
      final.push(total);
      return final;
      }
      var output = addCheckMarkandPercent(total);
      console.log(output);
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