var $2A20x$fastify = require("fastify");


      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequiree314"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequiree314"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("bo0Av", function(module, exports) {

const app = $2A20x$fastify();
app.get("/", (request, reply)=>reply.send({
        hello: "world"
    }));
if (undefined === module) // called directly i.e. "node app"
app.listen({
    port: 3000
}, (err)=>{
    if (err) console.error(err);
    console.log("server listening on 3000");
});
else // required as a module => executed on aws lambda
module.exports = app;

});


parcelRequire("bo0Av");

//# sourceMappingURL=index.js.map
