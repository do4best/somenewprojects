const http = require('http');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("company.db",(err)=>{
    if(err) throw err;
})
db.run(
    `CREATE TABLE IF NOT EXISTS Products(
    ProductId INTEGER PRIMARY KEY AUTOINCREMENT,
        ProductName TEXT NOT NULL,
        SupplierId INTEGER,
        CategoryId INTEGER,
        Unit TEXT,
        Price float
     )`,err =>err? console.log("Table Created Successfully"):console.log(err)
)
const search = (callback)=>{
    db.all('SELECT * FROM Products',(err,rows)=>{
        if(err) {
            console.log(err)
        }else {
            callback(rows)
        }
    })
};

const insertData = db.prepare(
    `INSERT INTO Products(ProductName,SupplierId,CategoryId,Unit,Price) VALUES (?,?,?,?,?)`,err => {
        if (err){
            console.log(err)
        }else{
            console.log(`Database Inserted Successfully`);
        }
    }
)
const deleteData = db.prepare(`
DELETE FROM Products WHERE ProductId= ?`,(err)=>{
    if (err){
        console.log(err)
    }else{
        console.log(`Database Deleted Successfully`);
    }
})

const updateData = db.prepare(`
UPDATE Products SET ProductName= ?,
                    SupplierId = ?,
                    CategoryId = ?,
                    Unit = ?,
                    Price = ?
                    WHERE ProductId= ?`,
    (err)=>{
    if (err){
        console.log(err)
    }else{
        console.log(`Database Updated Successfully`);
    }
    })
const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    search((result)=>{
        res.write(JSON.stringify(result));
        res.end();
    })

    if (req.method == "POST"){
        let body = '';
        req.on('data', (chunk)=>{
            body += chunk;
        })
        req.on('end', ()=>{
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            insertData.run(
                parsedBody.ProductName,
                parsedBody.SupplierId,
                parsedBody.CategoryId,
                parsedBody.Unit,
                parsedBody.Price
            );
            console.log("Successfully Updated Successfully");
        })
    }else if(req.method == "DELETE"){
        let body = '';
        req.on('data', (chunk)=>{
            body += chunk;
        })
        req.on('end', ()=>{
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            deleteData.run(parsedBody.ProductId)
            console.log("Successfully Deleted Successfully");
        })
    }else if(req.method == "PUT"){
        let body = '';
        req.on('data', (chunk)=>{
            body += chunk;
        })
        req.on('end', ()=>{
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            insertData.run(
                parsedBody.ProductName,
                parsedBody.SupplierId,
                parsedBody.CategoryId,
                parsedBody.Unit,
                parsedBody.Price
            );
            console.log("Successfully Updated Successfully");
        })
    }
})
const port = process.env.PORT || 3000;
server.listen(port, err => {
    if (err) throw err;
    console.log(`Server listening on port ${port}`);
})