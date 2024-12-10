function password_generation_terminal() {
    const number_of_characters = document.getElementById("result").value;

    if (number_of_characters === '' || number_of_characters < 1) {
        alert("Поле заполнено некорректно");
        return;  // Выход, если длина пароля некорректна
    }

    console.log(number_of_characters);

    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const numbers = '0123456789'.split('');
    const specialCharacters = '!@#$%^&*()_+-=[]{};":,.<>?/|`~'.split('');

    const allCharacters = [
        ...lowercaseLetters,
        ...uppercaseLetters,
        ...numbers,
        ...specialCharacters
    ];

    let you_password = "";

    // Генерация пароля
    for (let counter = 0; counter < number_of_characters; counter++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        you_password += allCharacters[randomIndex];
    }

    let safety_index = 2;

    let counter = 0;

    // Проверка наличия одинаковых символов подряд
    for (let i = 0; i < you_password.length; i++) {
        if (you_password[i] === you_password[i + 1]) {
            document.getElementById('check2').innerText = `Старайтесь не допускать двух одинаковых символов подряд`;
            safety_index -= 1;
            counter = 1;
        }
    }

    if (safety_index === 2) {
        document.getElementById('check2').innerText = `В пароле нет двух стоящих подряд символов`;
    }

    console.log(you_password.length);

    // Проверка длины пароля
    if (you_password.length < 8) {
        document.getElementById('check1').innerText = `Пароль слишком короткий`;
        safety_index -= 1;
    } else if (you_password.length === 12) {
        document.getElementById('check1').innerText = `Длина пароля оптимальна`;
        console.log(safety_index);
    } else if (you_password.length > 18) {
        document.getElementById('check1').innerText = `Пароль слишком длинный`;
        safety_index -= 1;
    } else {
        document.getElementById('check1').innerText = `Длина пароля допустима`;
        safety_index -= 1;
    }

    // Оценка надежности пароля
    if (safety_index === 2) {
        document.getElementById('check3').innerText = `Пароль надёжен`;
    } else if (safety_index === 1) {
        document.getElementById('check3').innerText = `Пароль средней надёжности`;
    } else {
        document.getElementById('check3').innerText = `Пароль не надёжен`;
    }

    // Вывод пароля в поле
    document.getElementById('generatedPassword').innerText = you_password;
    document.getElementById('copyButton').style.display = 'inline-block'; // Показываем кнопку после генерации пароля
}

function copyPassword() {
    const passwordText = document.getElementById('generatedPassword').innerText; // Получаем текст пароля

    if (passwordText === '') {
        alert('Пароль еще не сгенерирован!');
        return; // Если пароль еще не сгенерирован, показываем предупреждение и выходим
    }

    navigator.clipboard.writeText(passwordText) // Копируем текст в буфер обмена
        .then(() => {
            alert('Пароль скопирован!'); // Уведомление о том, что пароль скопирован
        })
        .catch(err => {
            console.error('Ошибка при копировании: ', err);
            alert('Не удалось скопировать пароль.'); // Уведомление об ошибке
        });
}

// Открытие модального окна
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const btn = document.getElementById('themeToggle'); // Кнопка для открытия модального окна
    const span = document.getElementById('modalClose');

    // Открыть модальное окно при нажатии кнопки
    btn.onclick = function () {
        modal.style.display = 'block';
    }

    // Закрыть модальное окно при нажатии на "x"
    span.onclick = function () {
        modal.style.display = 'none';
    }

    // Закрыть модальное окно при клике вне его
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});