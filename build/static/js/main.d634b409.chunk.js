(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,r,a){e.exports=a(39)},38:function(e,r,a){},39:function(e,r,a){"use strict";a.r(r);var t=a(0),n=a.n(t),i=a(12),l=a.n(i),m=a(14),p=a(13),s=a.n(p);var o=function(){var e=Object(m.a)(),r=e.register,a=e.handleSubmit,t=e.errors,i=e.watch,l=e.reset;return n.a.createElement("form",{onSubmit:a((function(e){var r=e.name,a=e.email,t=e.password,n=e.confirm;s.a.post("/api/form",{name:r,email:a,password:t,confirm:n}),l()}))},n.a.createElement("input",{type:"text",name:"name",placeholder:"Enter name",ref:r({required:!0})}),t.name&&"required"===t.name.type&&n.a.createElement("p",null,"Name is required"),n.a.createElement("input",{type:"text",name:"email",placeholder:"Example@youremail.com",ref:r({required:!0,pattern:/^\S+@\S+\.\S+$/})}),t.email&&"required"===t.email.type&&n.a.createElement("p",null,"E-mail is required"),t.email&&"pattern"===t.email.type&&n.a.createElement("p",null,"E-mail provided is invalid"),n.a.createElement("input",{type:"password",name:"password",placeholder:"Enter a password",ref:r({required:!0,minLength:6})}),t.password&&"required"===t.password.type&&n.a.createElement("p",null,"Password is required"),t.password&&"minLength"===t.password.type&&n.a.createElement("p",null,"Password is too short"),n.a.createElement("input",{type:"password",name:"confirm",placeholder:"Confirm password",ref:r({required:!0,validate:function(e){return e===i("password")}})}),t.confirm&&"required"===t.confirm.type&&n.a.createElement("p",null,"Confirm is required"),t.confirm&&"validate"===t.confirm.type&&n.a.createElement("p",null,"Password doesn't match"),n.a.createElement("input",{type:"submit",value:"Register"}))};a(38);var c=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(o,null))};l.a.render(n.a.createElement(c,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d634b409.chunk.js.map