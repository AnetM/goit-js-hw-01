const country = prompt("Куда оформляете доставку?");
// const normalizedCountryInput = country.toUpperCase();
let cost;


switch (country.toUpperCase()) {
    case "Китай":
        cost = 100;
        alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
        break;
    
    case "Чили":
        cost = 250;
        alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
        break;
    
    case "Австралия":
        cost = 170;
        alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
        break;
    
    case "Индия":
        cost = 80;
        alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
        break;
    
    case "Ямайка":
        cost = 120;
        alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
        break;
    
    default:
    alert("В Вашей стране доставка не доступна");
}