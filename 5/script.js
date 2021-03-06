let str; //Ключевая фраза
let needstr; //Наш текст
let arr_RU; //Текст, который кодирую
let arr; //Представляем строку в виде массива
let needarr; //Представляем строку в виде массива
let arr1; //Здесь будет храниться наш ключевой алфавит
let vremarr; //Массив в котором я запоминаю позицию символа (буквы)
let res; //Здесь находится результат кодирования
let decres; // Здесть результат декодирования
let tmp = tmp2 = 0; // Временные переменные
let line = ''; // Строки
let column = ''; // Столбцы


//--------------------------------------------------- Процедура кодирования
function MonoTime() {
   str = document.getElementById("My_Key").value; //Ключевая фраза
   needstr = document.getElementById("My_Text").value; //Наш текст
   arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', '1', '2', '3', '4', '5'];
   arr = str.split(''); //Представляем строку в виде массива
   needarr = needstr.split(''); //Представляем строку в виде массива
   arr1 = []; //Здесь будет храниться наш ключевой алфавит
   vremarr = [
        ['А', 'Б', 'В', 'Г', 'Д', 'Е'],
        ['Ж', 'З', 'И', 'Й', 'К', 'Л'],
        ['М', 'Н', 'О', 'П', 'Р', 'С'],
        ['Т', 'У', 'Ф', 'Х', 'Ц', 'Ч'],
        ['Ш', 'Щ', 'Ы', 'Ь', 'Э', 'Ю'],
        ['Я', '1', '2', '3', '4', '5']
];; //Двумерный массив для строк и столбцов
   res = ''; //Здесь находится результат кодирования
   decres = ''; // Здесть результат декодирования

  //--------------------------------------------------- Избавляюсь от ненужных символов и преобразую фразу к одному регситру
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] == " " || arr[i] == "," || arr[i] == "." || arr[i] == "!" || arr[i] == "?" || arr[i] == ":" || arr[i] == ";" || arr[i] == "-"){
      arr.splice(i,1)
    }
  }
  arr = arr.join('').toUpperCase();
  arr = arr.split('');
  //---------------------------------------------------

  //--------------------------------------------------- Создаю ключевой алфавит путем выбрасывания повторяющихся символов
  arr1.push(arr[0]);
  for (let j of arr) {
      if (!arr1.includes(j)) {
        arr1.push(j);
      }
  }
  //--------------------------------------------------- Добавляю к ключевому алфавиту оставшиеся символы русского алфавита

  for (let j of arr_RU) {
      if (!arr1.includes(j)) {
        arr1.push(j);
      }
  }
  //---------------------------------------------------

  //--------------------------------------------------- Избавляюсь от ненужных символов и преобразую текст, который кодирую, к одному регситру
  for (let i = 0; i < needarr.length; i++) {
    while (needarr[i] == " " || needarr[i] == "," || needarr[i] == "." || needarr[i] == "!" || needarr[i] == "?" || needarr[i] == ":"  || needarr[i] == ";"  || needarr[i] == "-"  || needarr[i] == "0"  || needarr[i] == "1"  || needarr[i] == "2"  || needarr[i] == "3"  || needarr[i] == "4"  || needarr[i] == "5"  || needarr[i] == "6"  || needarr[i] == "7"  || needarr[i] == "8"  || needarr[i] == "9") {
      needarr.splice(i,1)
    }
  }
  needarr = needarr.join('').toUpperCase();
  needarr = needarr.split('');
  //---------------------------------------------------

  //--------------------------------------------------- Кодирую текст путем создания таблицы для кодирования и по ней создаю закодированную фразу
  for (let i = 0; i < arr1.length; i++) {
    if (tmp<6) {
      vremarr[tmp2][tmp] = arr1[i];
      tmp++;
    }
    else {
      i--;
      tmp = 0;
      tmp2++;
    }
  }

  for (let k = 0; k < needarr.length; k++) {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        if (needarr[k] == vremarr[i][j]) {
          line += i;
          column += j;
        }
      }
    }
  }
    document.getElementById("Res_1").value = line;
    document.getElementById("Res_2").value = column;
    let lc = line + column;
    lc = lc.split('');
    for (var i = 0; i < lc.length; i+=2) {
      res += vremarr[lc[i]][lc[i+1]];
    }
    document.getElementById("My_res").value = res;
  //---------------------------------------------------

}
  //---------------------------------------------------

//--------------------------------------------------- Декодирую текст с помощью таблицы
function NotMonoTime() {
  for (var i = 0; i < line.length; i++) {
    decres += vremarr[line[i]][column[i]];
  }
  document.getElementById("My_res_de").value = decres;
}
  //---------------------------------------------------
