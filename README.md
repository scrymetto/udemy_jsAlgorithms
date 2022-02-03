# JavaScript Algorithms and Data Structures Masterclass

(https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)

## Паттерны
### Frequency counter
Типичная задача - найти анаграмы. Вместо использования цикла в цикле, заводим переменную `obj`, проходим циклом первое слово/массив, каждый элемент/буква - ключ в `obj`. Если такой ключ есть, увеличиваем значение на 1. Затем проходимся вторым циклом по второму слову/массиву - проверяем в `obj` наличие ключа (`obj[arr2[i]]`). Если его нет - возвращаем `false`, иначе отнимаем единицу. 

###Multiple pointers
Типичная задача - найти пару элементу массива/букве в строке (например, найти первую пару значений массива, сумма которых = 0). **Главное условие** - массив должен быть **отсортирован**! Заводим 2 переменные - `let left = 0` и `let right = arr.length-1`. Заводим цикл, в котором проверяем, чему равно сумма этих переменных. Если она больше искомого, сдвигаем `right` на 1 влево (массив отсортирован => следующее значение будет меньше). Если значение меньше искомого, сдвигаем `left` на один вправо. И так до тех пор, пока `left` меньше `right`. Если значение суммы совпало с искомым, возвращаем пару, если нет - возвращаем `null`. Основная идея - не заводить второй цикл, а двигаться по массиву, начиная от разных элементов, одновременно.

### Sliding window
Типичная задача - найти подмассив заданной длины, сумма элементов которого будет максимальной в данном массиве. Основная идея - не заводить второй цикл и пересчитывать всю сумму заново, а двигаться "окном" - найти сумму заданного количества элементов, двигаться вправо, вычитая первый элемент и приплюсовывая следующий. 

### Divide and conquer 
Типичная задача - найти индекс нужного значения в **отсортированном** массиве. Вместо того, чтобы идти по массиву от начала до конца, заводим 3 переменные - `let start = 0`, `let end = arr.length-1` и `let middle`, которая равна количеству элементов, поделенное на 2, предполагая, что это и есть индекс искомого элемента. Если `arr[middle]` больше искомого, устанавливаем `end = middle-1` (так как значение `middle` уже проверили), если меньше, то `start = middle+1`. Повторяем до тех пор, пока `start < end`. 

## Сортировки

### Bubble
Заводим 2 цикла. Сравниваем попарно элементы массива во втором цикле - 0 и 1, затем 1 и 2, затем 2 и 3, и т.д. Тот элемент, который больше, получает больший индекс. Дошли до конца -> запускаем следующую итерацию первого цикла и так до конца. **Оптимизация** - если за весь проход не было перестановок, выходим из цикла. Для этого заводим переменную boolean, которая по умолчанию = true. Если перестановка была, изменяем ее на false. Каждую итерацию первого цикла проверяем условие `if ( boolean ) { break }`

### Selection
Заводим цикл, объявляем переменную `min`, равную `i`, которая по умолчанию считается индексом минимального значения массива. Заводим второй цикл, в котором проверяем, меньше ли следующий элемент, чем `arr[min]`. Если да, то значение `min` становится равно `j`. Таким образом находится наименьший элемент массива. На выходе из второго цикла проверяется, изменилось ли значение переменной `min`. Если да, то элементы `arr[i]` и `arr[min]` меняются местами. 

### Insertion
Объявляем переменную `currentValue`. Заводим цикл (начиная с **первого** элемента (не нулевого!)), в котором присваиваем `currentValue` значение `arr[i]`. Исходим из того, что левая часть массива (до `i`) - уже отсортирована. Заводим второй цикл, в котором счетчик массива начинается со значения `i-1`. При этом должно выполняться условие, что текущее значение **меньше** `currentValue` (так как массив в левой части отсортирован, и если текущее значение больше, значит условие сортировки и так соблюдено и перемещать элемент никуда не нужно). Если `currentValue` меньше последнего в левой части - выполняем `arr[j+1] = arr[j]` - таким образом 'сдвигаем' отсортированный массив на 1 индекс для вставки в него `currentValue` - и идем дальше по второму циклу. Когда условие не выполнится, то в значении `j` у нас будет сохранен индекс элемента, значение которого меньше `currentValue` => выполняем `arr[j+1]=currentValue` - вставляем нужный элемент после него. После этого левая часть массива снова отсортирована, двигаемся по первому циклу дальше.

### Merge 
Делим массив на более мелкие до тех пор, пока в массиве не останется по 1 элементу (рекурсивно - ищем середину, вызываем себя же сначала для левой, потом для правой части. Выход из рекурсии - если длина массива === 1). Массив из 1 элемента всегда отсортирован. Возвращаем функцию мёржа для левой и правой части массива - мелкие массивы объединяются в более крупные. В этой функции заводим две переменные `i` и `j = 0`. Идем параллельно по двум массивам `while`, выход из цикла - когда `i === arr1.length` или `j === arr2.length`. Берем меньший по значению элемент (`arr1[i] | arr2[j]`) и пушим его в новый массив. Счетчик того массива, значение из которого было записано, увеличивается. При выходе из цикла, проверяем, не осталось ли в каком-то массиве еще значения, допушиваем их в возвращаемый массив.

### Quick sort
Вспомогательная функция - вычисление `pivot`. Выбираем рандомный элемент (допустим, первый) - `pivot`. Запоминаем его индекс - `pivotIndex`. Идем по массиву и делим его на правую и левую части: в левой части элементы, которые **меньше** данного, в правой - которые **больше**. То есть смотрим, если элемент массива меньше чем наш `pivot`, это значит, что наш `pivot` должен быть справа от него, поэтому запоминаем, что текущий элемент нужно переместить на место `pivotIndex + 1`, сам же `pivotIndex` инкрементим. Доходим до конца массива и перемещаем наш `pivot` на получившееся место `pivotIndex`. При этом необходимо добавить доп аргументы: **от** какого и **до** какого элемента делать проверку. Для сортировки массива так же добавляем ещё 2 аргумента - `left` & `right`, для того, чтобы мы могли управлять тем, над какой частью массива мы работаем. Запускаем рекурсию - находим `pivot`, массив уже изменен, поэтому этот элемент стоит на нужном месте. Вызываем `quickSort()` для _левой части_ массива (до `pivot`, не включая его), затем для _правой части_ (тоже не включая `pivot`). Условие выхода из рекурсии - если `left` !< `right`. За скобками условия возвращаем массив.

### Radix sort
Подходит только для чисел. Идея в том, что мы не сравниваем их друг с другом, а распределяем по кучкам. Сначала по единицам (все, которые заканчиваются на 1 - в одну кучку, на 2 - в другую и тд). Потом фигачим их в один массив в том порядке, в котором они в кучках, делим по десяткам. Если разряда нет - то в кучку с нулём. И так, пока все числа не окажутся в кучке с нулем. Первая вспомогательная функция - выдача нужного значения разряда. Есть два стула: один со строками (приводим к строке, инвертируем, берем `str[ind]`), второй - c числами (возвращаем остаток от деления на 10 в нужной степени). Вторая - выдать количество разрядов в числе. Можно так же через приведение к строке (просто вернуть ее длину), можно математически: вернуть то, в какой степени 10 дает это число +1. Третья вспомогательная функция - найти самое большое число (по количеству разрядов в нем): в цикле по данному массиву запускается предыдущая функция. Сама сортировка выглядит следующим образом: вычисляется, сколько проходов по циклу будет (через поиск самого длинного числа), запускается цикл, в котором объявляется массив массивов ("кучки" по разрядам), вычисляется значение разряда (сам разряд = counter цикла) и число определяется в нужную кучку. Затем кучки мержатся в один массив, это значение присваивается в исходный массив (чтобы при следующей итерации мы ходили по уже частично отсортированному массиву, иначе зачем это все).

## Data structures
### SLL (Singly linked list)
Однонаправленный(?) список - каждая нода содержит в себе value и ссылку на следующую ноду (не предыдущую!). Сам список имеет начало (`head`) и конец (`tail`) - в которые записываются ссылки на ноды. Методы: `push` (создаем новую ноду, сохраняем ее в ссылку к `tail.next`, переназначаем `tail`), `pop` (итерируемся по списку, стираем ссылку на `next` у предпоследней ноды, переназначаем `tail`, возвращаем стираемую ноду), `shift` (возвращаем `head`, `head.next` делаем новым `head`), `unshift` (создаем новую ноду, в `node.next` пихаем ссылку на `this.head`, определяем новый `head`), `get` (заводим `counter = 0`, говорим, что искомый элемент = `this.head` и в цикле итерируемся, пока `counter < искомого индекса`), `set` (находим через `get` заменяемую ноду И ПРОСТО МЕНЯЕМ `NODE.VAL`, БЛЕАТЬ)