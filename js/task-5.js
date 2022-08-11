const country = prompt("Куда оформляете доставку?");
// const normalizedCountryInput = country.toUpperCase();
let cost;

switch (country.toLowerCase()) {
    case "китай":
        cost = 100;
        alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
        break;
    
    case "чили":
        cost = 250;
        alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
        break;
    
    case "австралия":
        cost = 170;
        alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
        break;
    
    case "индия":
        cost = 80;
        alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
        break;
    
    case "ямайка":
        cost = 120;
        alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
        break;
    
    default:
    alert("В Вашей стране доставка не доступна");
}