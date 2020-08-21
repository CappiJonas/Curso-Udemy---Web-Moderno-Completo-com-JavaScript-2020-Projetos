let comparaComThis = function (param) {
  console.log(this === param);
};

comparaComThis(global);
comparaComThis(this);

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

//prettier-ignore
let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);
comparaComThisArrow(this);

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj); // arrow function é mais forte que bind
comparaComThisArrow(module.exports);
