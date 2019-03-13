const path = require("path");
const router = require("express").Router();
const jobRoutes = require("./jobs");
const githubRoutes = require("./github");
const resumeRoutes = require("./resumes");

// Job routes
router.use("/jobs", jobRoutes);

// Resume routes
router.use("/resumes", resumeRoutes);


// github Routes
router.use("/github", githubRoutes);



// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
