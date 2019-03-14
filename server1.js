const express = require('express');
const app = express();
const request = require('request');
const bodyParser =require('body-parser')

app.use(express.static('./dist'));
app.use(bodyParser.urlencoded({
    extended:false// 是否为深度解析。true 深度，false 非深度
}))
// 首页的接口 
app.get(/bd/,function(req,res){
    let url = `http://tingapi.ting.baidu.com${req.url.substr(3)}`;
    request(url,function(err,responseText,body){
        if(!err && responseText.statusCode===200){
            let data = JSON.parse(body);
            res.json(
                data
            )
        }else{
            res.json({
                ok:-1,
                err
            })
        }
    })
})
app.listen(80,()=>console.log('SUCCESS'))


