var mongoose=require("mongoose");
//var dbURI="mongodb+srv://mekan32:1234@mekanbul.ehouueb.mongodb.net/mekanbul?retryWrites=true&w=majority";
var dbURI="mongodb://127.0.0.1/mekanbul";
mongoose.connect(dbURI);
function kapat(msg,callback){
        mongoose.connection.close(function(){
                console.log(msg);
                callback();

        });
        
}
process.on("SIGINI",function(){
        kapat("Uygulama kapatıldı",function(){
                process.exit(0);
        });
});
mongoose.connection.on("connected",function(){
        console.log(dbURI+" adresindeki veritabanına bağlanıldı.");
});
mongoose.connection.on("disconnected",function(){
        console.log("Bağlantı koptu.");
});
mongoose.connection.on("error",function(){
        console.log("Bağlantı hatası.");
});

require("./mekansema");