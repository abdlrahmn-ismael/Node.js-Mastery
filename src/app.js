import express from "express"
const app = express();

/*==============================================
======= Routes
==============================================*/







/*==============================================
======= Config
==============================================*/
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
