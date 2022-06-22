export default function api() {
    const getRandomNumber = function () {
        return Math.random() * 500;
    };

    const getFn = function () {
        return new Promise((resolve) => {
            setTimeout(() => {
                const firstName = localStorage.getItem('firstName');
                const lastName = localStorage.getItem('lastName');
                const age = localStorage.getItem('age');
                resolve({
                    firstName,
                    lastName,
                    age,
                });
            }, getRandomNumber());
        });
    };
    const saveFn = function (firstName, lastName, age) {
        return new Promise((resolve) => {
            setTimeout(() => {
                localStorage.setItem('firstName', firstName);
                localStorage.setItem('lastName', lastName);
                localStorage.setItem('age', age);
                resolve('success');
            }, getRandomNumber());
        });
    };

    const deleteFn = function () {
        return new Promise((resolve) => {
            setTimeout(() => {
                localStorage.removeItem('firstName');
                localStorage.removeItem('lastName');
                localStorage.removeItem('age');
                resolve('success');
            }, getRandomNumber());
        });
    };

    return {
        get: getFn,
        save: saveFn,
        delete: deleteFn,
    };
}
