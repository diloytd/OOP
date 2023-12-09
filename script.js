class Transport {
    constructor(type, brand, price, img){
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.img = img;
    }
    getInfo(){
        return `${this.type} - ${this.brand}`;
    }
    getPrice(){
        return this.price
    }

    }


class Car extends Transport{
    constructor(type, brand, price){
        super (type, brand, price)
        
    }
    getDoorsCount(){
        return 4
    }
    }

class Bike extends Transport{
    constructor(type, brand, price,speed){
        super (type, brand, price)
        this.speed = speed;
    }
    getMaxSpeed(speed){
        return speed
    }
    }


    //Функция - шаблон, которая создает div на страницу, устанавливает стиль. Для любого вида транспорта.

    
    function info(Transport) {
    const Element = document.createElement('div');//Создаём элемент <div>
    Element.style.color = "000";
    Element.style.fontSize = "22px";
    Element.innerHTML =
        `Type: ${Transport.type}<br>
        Brand: ${Transport.brand}<br>
        Price: ${Transport.price}<br>`;
        //Element.innerHTML = `Type: ${this.type} , Brand: ${this.brand}, Price: ${this.price}, Doors: ${getDoorsCount()}`
        document.body.appendChild(Element); 
    }
    
    //Функция - шаблон для машин

    function car (Car){
        const Element = document.createElement('div');
        Element.style.fontSize = "22px";
        Element.innerHTML = `Doors: ${Car.getDoorsCount()}`
        document.body.appendChild(Element);
    }
    

    function bike (Bike, speed){
        const Element = document.createElement('div');
        speed = Bike.getMaxSpeed(speed);
        Element.style.fontSize = "22px";
        Element.innerHTML = `Speed: ${speed}`
        document.body.appendChild(Element)
    }



    // Функция- шаблон, которая добавляет картинку на страницу


    function addImage(Transport,  imagePath) {
        let image = document.createElement("img");
        image.src = imagePath;
        image.width = "250";
        image.height = "200"
        image.innerHTML = `imagePath ${Transport.img}`
        document.body.appendChild(image);
        }

const data =  [
    {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];  
    let id1 = data[0];  //получение первого объекта из массива
    id1 = new Car("car", "Audi", 4300000, 4)  // Внесение данных из объекта
    info(id1)  //  Функция - шаблон, которая создает div на страницу, устанавливает стиль. Для любого вида транспорта.
    car(id1) // Функция car  Для машины с указанием дверей
    addImage(id1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg') // Функция, кторая добавляет фото объекта на страницу
     
    // добавлен первый элемент на страницу

    let id2 = data[1];
    id2 = new Car("car", "Mercedes-Benz", 2800000)
    info(id2)
    car(id2)
    addImage(id2, 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg' )

     // добавлен второй элемент на страницу

    let id3 = data[2];
    id3 = new Bike('bike', 'Harley-Davidson', 1300000)
    info(id3);
    bike(id3, 210);
    addImage(id3,'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg')


    // добавлен третий элемент на странице. Не реагирует на скорость

    let id4 = data[3];
    id4 = new Bike('bike', 'Harley-Davidson', 1400000)
    info(id4);
    bike(id4, 220);
    addImage(id4,'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png')
