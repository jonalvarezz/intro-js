/*
 * Workshop 1
 * #ws1
 */

MYAPP = {
    data: [
        {
            name: 'Jonathan',
            lastName: 'Alvarez',
            city: 'BGA'
        },
        {
            name: 'Lee',
            lastName: 'Valderrama',
            city: 'PEI'
        },
        {
            name: 'John',
            lastName: 'Doe',
            city: 'BGA'
        }
    ]
};


(function (_data) {
    'use strict';

    // 1. Definir la propiedad data que contendra una lista de objetos

    // 2. Crear una funcion que retorne una nueva lista solo con los nombres
    // hint: usen forEach
    var getNames = function () {
        var temp = [], i, item;
        for (i = 0; item = _data[i++];) {
            temp.push(item.name)
        }

        return temp;
    }

    console.log(getNames());

    // 3. Crear una funcion que retorne una nueva lista solo con las propiedades
    // 'fullName' y 'city'
    // hint: user for para recorrer el array; fullName = name + lastName
    var fullNameAndCity = function () {
        var temp = [], i, item;
        for (i = 0; item = _data[i++];) {
            temp.push({
                fullName: item.name + ' ' + item.lastName,
                city: item.city
            })
        }

        return temp;
    }

    console.log(fullNameAndCity());

    // 4. Module las funciones anteriores en una sola llamada map.
    // hint: map(array, modificador) retorna array siempre
    // Extra bonus: Agreguela dentro del prototipo de Array como myMap.
    var map = function (arr, modifier) {
        var temp = [], i, item;
        for (i = 0; item = arr[i++];) {
            temp.push(modifier(item));
        }

        return temp;
    }
    console.log(map(_data, function (item) {return item.city}));

    // 4 bonus
    Array.prototype.myMap = function (modifier) {
        var temp = [];
        this.forEach(function (item) {
            temp.push(modifier(item))
        });
        return temp;
    }
    var a = _data.myMap(function (item) {return item.name});
    console.log(a);

    //5. Crear una funcion que devuelva un objeto con la siguiente forma:
    // {'BGA': [{person}, {person}], 'PEI': [{person}, {person}] ...}
    // hint: hasOwnProperty
    var groupCity = function () {
        var result = {}
        _data.forEach(function (item) {
            var key = item.city;
            if (result.hasOwnProperty(key)) {
                result[key].push(item);
            }
            else {
                result[key] = [item];
            }
        });
        return result;
    }
    console.log(groupCity());

    // 4. Module las funciones anteriores en una sola llamada reduce.
    // hint: reduce(array, combinador, valor_inicial) retorna array siempre
    // Extra bonus: Agreguela dentro del prototipo de Array como myReduce.
    var reduce = function (arr, combiner, initial) {
      var result = initial;
      arr.forEach(function (item) {
        result = combiner(result, item);
      })
      return result;
    };
    console.log(reduce(_data, function (acc, item) {
      var key = item.city;
      if (acc.hasOwnProperty(key)) {
          acc[key].push(item);
      }
      else {
          acc[key] = [item];
      }
      return acc;
    }, {}));

    // bonus
    Array.prototype.myReduce = function (combiner, initial) {
      var result = initial;
      this.forEach(function (item) {
        result = combiner(result, item);
      })
      return result;
    };

    var reduced = _data.myReduce(function (acc, item) {
      var key = item.city;
      if (acc.hasOwnProperty(key)) {
          acc[key].push(item);
      }
      else {
          acc[key] = [item];
      }
      return acc;
    }, {});

    console.log(reduced);

})(MYAPP.data);
