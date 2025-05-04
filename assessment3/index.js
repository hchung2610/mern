const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/createUser', (req, res) => {
    const {name , session, address, age}  = req.query; 
    
    /* check for invalid params */
    if (!name || !session || ! address || !age) {
        return res.status(400).json({
            error : "All params are required"
        }
        )
    } else {
        if (!/^[a-zA-Z0-9._-]{3,20}$/.test(name)) {
            return res.status(400).json({
                error : "Name should be between 3 and 20 characters and can only contain letters, numbers, dots, underscores, and hyphens."
            })
        }

        if (age < 0){
            return res.status(400).json({
                error : "Age should be a positive number"
            })
        }
    }

    const userInfo = {
        name, 
        session,
        address,
        age
    };

    const filePath = path.join(__dirname, 'userInfo.json');
    fs.writeFile(
        filePath,
        JSON.stringify(userInfo, null, 2),
        'utf-8',
        (err) => {
            if (err) {
                console.error('Failed to wrtie userInfo.json', err);
                return res.status(500).json({error: 'Could not save the user info to file'})
            }
            res.json({success: true, user: userInfo})
        }
    );
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}: http://localhost:${port}`)
})