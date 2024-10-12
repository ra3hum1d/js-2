// 1. Температура за Цельсієм та Фаренгейтом
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`Температура в Фаренгейтах: ${fahrenheit}`);

// 2. Кількість днів у місяці та години/хвилини
let daysInMonth = 30; // Наприклад, 30 днів
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log(`Години в місяці: ${hoursInMonth}, Хвилини в місяці: ${minutesInMonth}`);

// 3. Рівень здоров'я та енергії гравця
let health = 100;
let energy = 80;
health -= 20; // Зменшити здоров'я на 20
energy -= 15; // Зменшити енергію на 15
console.log(`Здоров'я гравця: ${health}, Енергія гравця: ${energy}`);

// 4. Сума покупки та знижка 10%
let purchaseAmount = 200; // Сума покупки
let discount = purchaseAmount * 0.1; // Знижка
let finalAmount = purchaseAmount - discount; // Остаточна сума
console.log(`Сума після знижки: ${finalAmount}`);

// 5. Округлення числа до меншого
let floatingNumber = 5.7;
let flooredNumber = Math.floor(floatingNumber);
console.log(`Округлене число: ${flooredNumber}`);

// 6. Рядок з плаваючою комою
let floatString = "3.14";
let parsedFloat = parseFloat(floatString);
console.log(`Перетворене число з рядка: ${parsedFloat}`);

// 7. Рядок з цілим числом
let integerString = "42";
let parsedInt = parseInt(integerString);
console.log(`Перетворене ціле число з рядка: ${parsedInt}`);

// 8. Квадратний корінь числа
let number = 16;
let squareRoot = Math.sqrt(number);
console.log(`Квадратний корінь числа: ${squareRoot}`);

// 9. Цілочисельне значення та рядок
let integerValue = 25;
let stringNumber = "10";
let convertedInt = parseInt(stringNumber);
console.log(`Цілочисельне значення з рядка: ${convertedInt}`);
let stringValue = integerValue.toString();
console.log(`Цілочисельне значення в рядку: ${stringValue}`);