(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,r,t){e.exports=t(39)},38:function(e,r,t){},39:function(e,r,t){"use strict";t.r(r);var a=t(0),n=t.n(a),i=t(12),l=t.n(i),m=t(14),p=t(13),s=t.n(p);var o=function(){var e=Object(m.a)(),r=e.register,t=e.handleSubmit,a=e.errors,i=e.watch,l=e.reset;return n.a.createElement("form",{onSubmit:t((function(e){var r=e.name,t=e.email,a=e.password,n=e.confirm;s.a.post("https://test-repo-app.herokuapp.com/",{name:r,email:t,password:a,confirm:n}),l()}))},n.a.createElement("input",{type:"text",name:"name",placeholder:"Enter name",ref:r({required:!0})}),a.name&&"required"===a.name.type&&n.a.createElement("p",null,"Name is required"),n.a.createElement("input",{type:"text",name:"email",placeholder:"Example@youremail.com",ref:r({required:!0,pattern:/^\S+@\S+\.\S+$/})}),a.email&&"required"===a.email.type&&n.a.createElement("p",null,"E-mail is required"),a.email&&"pattern"===a.email.type&&n.a.createElement("p",null,"E-mail provided is invalid"),n.a.createElement("input",{type:"password",name:"password",placeholder:"Enter a password",ref:r({required:!0,minLength:6})}),a.password&&"required"===a.password.type&&n.a.createElement("p",null,"Password is required"),a.password&&"minLength"===a.password.type&&n.a.createElement("p",null,"Password is too short"),n.a.createElement("input",{type:"password",name:"confirm",placeholder:"Confirm password",ref:r({required:!0,validate:function(e){return e===i("password")}})}),a.confirm&&"required"===a.confirm.type&&n.a.createElement("p",null,"Confirm is required"),a.confirm&&"validate"===a.confirm.type&&n.a.createElement("p",null,"Password doesn't match"),n.a.createElement("input",{type:"submit",value:"Register"}))};t(38);var c=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(o,null))};l.a.render(n.a.createElement(c,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.98428358.chunk.js.map