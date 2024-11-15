function getReduction(price, age) {
	if (age > 25) {
		return price * 1;
	} else if (age <= 25) {
		return price * 0.3;
	} else if (age <= 18) {
		return price * 0.5;
	} else if (age < 5) {
		return price * 0;
	}
}

console.log(getReduction(10, 5)); // Résultat attendu: 0
console.log(getReduction(150, 25)); // Résultat attendu: 45
