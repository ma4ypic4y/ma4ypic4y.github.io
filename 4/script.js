let str; //Ключевая фраза
let needstr; //Наш текст
let arr_RU; //Текст, который кодирую
let arr; //Представляем строку в виде массива
let vrarr2; //Массив ключа
let vrarr3; // Строка с ключем
let trans; // Доп массив с размером vrarr2
let needarr; //Представляем строку в виде массива
let result; //Результат

//--------------------------------------------------- Процедура кодирования


function MonoTime() {
   str = document.getElementById("My_Key").value; //Ключевая фраза
   needstr = document.getElementById("My_Text").value; //Наш текст
   arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я']; //Текст, который кодирую
   arr = str.split(''); //Представляем строку в виде массива
   needarr = needstr.split(''); //Представляем строку в виде массива
   arr1 = []; //Здесь будет храниться наш ключевой алфавит
   vrarr2 = [];
   trans = [];
   vrarr3 = "";


  //--------------------------------------------------- Избавляюсь от ненужных символов и преобразую фразу к одному регситру
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] == " " || arr[i] == "," || arr[i] == "." || arr[i] == "!" || arr[i] == "?" || arr[i] == ":" || arr[i] == ";" || arr[i] == "-" || arr[i] == "0" || arr[i] == "1" || arr[i] == "2" || arr[i] == "3" || arr[i] == "4" || arr[i] == "5" || arr[i] == "6" || arr[i] == "7" || arr[i] == "8" || arr[i] == "9") {
      arr.splice(i,1)
    }
  }
  arr = arr.join('').toUpperCase();
  arr = arr.split('');
  //---------------------------------------------------

  //--------------------------------------------------- Создаю ключ последовательности
  vrarr2.length = arr.length;
  let k = 0;
  for (let j = 0; j < arr_RU.length; j++)
    for (let i = 0; i < arr.length; i++)
        if (arr[i] == arr_RU[j])
            vrarr2[i] = k++;
   vrarr2.forEach (
     function (t) {
    vrarr3 += t + 1;
  });
  document.getElementById("Res_1").value = vrarr3;
  //---------------------------------------------------

  //--------------------------------------------------- Избавляюсь от ненужных символов и преобразую текст, который кодирую, к одному регситру
  for (let i = 0; i < needarr.length; i++) {
    while (needarr[i] == " " || needarr[i] == "," || needarr[i] == "." || needarr[i] == "!" || needarr[i] == "?" || needarr[i] == ":"  || needarr[i] == ";"  || needarr[i] == "-"  || needarr[i] == "0"  || needarr[i] == "1"  || needarr[i] == "2"  || needarr[i] == "3"  || needarr[i] == "4"  || needarr[i] == "5"  || needarr[i] == "6"  || needarr[i] == "7"  || needarr[i] == "8"  || needarr[i] == "9") {
      needarr.splice(i,1)
    }
  }
  needarr = needarr.join('').toUpperCase();
  //---------------------------------------------------

  //--------------------------------------------------- Кодирую текст
      for (let i = 0; i < needarr.length % vrarr2.length; i++)
       needarr += needarr[i];

       result = "";
      for (let i = 0; i < needarr.length; i += vrarr2.length)
      {
          trans.length = vrarr2.length;

          for (let j = 0; j < vrarr2.length; j++)
              trans[vrarr2[j]] = needarr[i + j];

          for (let j = 0; j < vrarr2.length; j++)
              result += trans[j];
      }
      result = result.split('');
      for (let i = 0; i < result.length/6; i++) {
        result.splice(i*6, 0, " ");
      }
      result.splice(0,1)
      result = result.join('');
      document.getElementById("My_res").value = result;
  //--------------------------------------------------- ДЕКОДИРОВАНИЕ

  //--------------------------------------------------- минус пробелы для создания групп
  result = result.split('');
  for (let i = 0; i < result.length; i++) {
    while (result[i] == " ") {
      result.splice(i,1)
    }
  }
  //---------------------------------------------------
}
  //---------------------------------------------------

  //--------------------------------------------------- Декодирую текст
  function NotMonoTime() {
    result1 = "";
    for (let i = 0; i < result.length; i += vrarr2.length)
    {
        trans.length = vrarr2.length;

        for (let j = 0; j < vrarr2.length; j++)
            trans[j] = result[i + vrarr2[j]];

        for (let j = 0; j < vrarr2.length; j++)
            result1 += trans[j];
    }
    document.getElementById("My_res_de").value = result1;
  }
  //---------------------------------------------------
