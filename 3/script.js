let str; //Ключ
let needstr; //Наш текст
let arr_RU; //Кодируемый текст
let arr; //строка в виде массива
let needarr; //Представляем строку в виде массива
let arr1; //ключевой алфавит
let vremarr; //Массив в котором я запоминаю позицию символа (буквы)
let res; //результат кодирования
let decres; // результат декодирования

//--------------------------------------------------- Процедура кодирования
function MonoTime() {
   str = document.getElementById("My_Key").value; //Ключевая фраза
   needstr = document.getElementById("My_Text").value; //Наш текст
   arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я']; //Текст, который кодирую
   arr = str.split(''); //Представляем строку в виде массива
   needarr = needstr.split(''); //Представляем строку в виде массива
   arr1 = []; //Здесь будет храниться наш ключевой алфавит
   vremarr = []; //Массив в котором я запоминаю позицию символа (буквы)
   res = ''; //Здесь находится результат кодирования
   decres = ''; // Здесть результат декодирования

  //--------------------------------------------------- удаление лишних символов и приведение к одному регистру
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] == " " || arr[i] == "," || arr[i] == "." || arr[i] == "!" || arr[i] == "?" || arr[i] == ":" || arr[i] == ";" || arr[i] == "-" || arr[i] == "0" || arr[i] == "1" || arr[i] == "2" || arr[i] == "3" || arr[i] == "4" || arr[i] == "5" || arr[i] == "6" || arr[i] == "7" || arr[i] == "8" || arr[i] == "9") {
      arr.splice(i,1)
    }
  }
  arr = arr.join('').toUpperCase();
  arr = arr.split('');
  console.log(arr.join(''));
  //---------------------------------------------------

  //--------------------------------------------------- ключевой алфавит и выброс лишних элементов
  arr1.push(arr[0]);
  for (let j of arr) {
      if (!arr1.includes(j)) {
        arr1.push(j);
      }
  }
  console.log(arr1.join(''));
  //--------------------------------------------------- Добавляю к ключевому алфавиту оставшиеся символы русского алфавита

  for (let j of arr_RU) {
      if (!arr1.includes(j)) {
        arr1.push(j);
      }
  }
  console.log(arr1.join(''));
  console.log(arr_RU.join(''));
  document.getElementById("Res_1").value = arr1.join('');
  document.getElementById("Res_2").value = arr_RU.join('');
  //---------------------------------------------------

  //--------------------------------------------------- Избавляюсь от ненужных символов и преобразую текст, который кодирую, к одному регситру
  for (let i = 0; i < needarr.length; i++) {
    while (needarr[i] == " " || needarr[i] == "," || needarr[i] == "." || needarr[i] == "!" || needarr[i] == "?" || needarr[i] == ":"  || needarr[i] == ";"  || needarr[i] == "-"  || needarr[i] == "0"  || needarr[i] == "1"  || needarr[i] == "2"  || needarr[i] == "3"  || needarr[i] == "4"  || needarr[i] == "5"  || needarr[i] == "6"  || needarr[i] == "7"  || needarr[i] == "8"  || needarr[i] == "9") {
      needarr.splice(i,1)
    }
  }
  needarr = needarr.join('').toUpperCase();
  needarr = needarr.split('');
  console.log(needarr.join(''));
  

  //--------------------------------------------------- Кодирую текст путем сравнивания позиций букв русского алфавита и ключевого алфавита и разбиваю последовательность на группы из 5 символов
  for (let i = 0; i < needarr.length; i++) {
    for (let j = 0; j < arr_RU.length; j++) {
      if (arr_RU[j] == needarr[i])
      {
      vremarr[i] = j;
      break;
      }
    }
  }
  for (let i = 0; i < needarr.length; i++) {
    res+=arr1[vremarr[i]];
  }
  res = res.split('');
  for (let i = 0; i < res.length/6; i++) {
    res.splice(i*6, 0, " ");
  }
  res.splice(0,1)
  document.getElementById("My_res").value = res.join('');
  console.log(res.join(''));
 

  //--------------------------------------------------- Здесь начинается процесс декодирования, я избавляюсь от пробелов, которые вставлял для создания групп
  for (let i = 0; i < res.length; i++) {
    while (res[i] == " ") {
      res.splice(i,1)
    }
  }
 
}


//--------------------------------------------------- Декодирую текст путем сравнивания позиций букв русского алфавита и ключевого алфавита
function NotMonoTime() {

  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] == res[i])
      {
      vremarr[i] = j;
      break;
      }
    }
  }
  for (let i = 0; i < res.length; i++) {
    decres+=arr_RU[vremarr[i]];
  }
  document.getElementById("My_res_de").value = decres;
  console.log(decres);
}
  
