describe('Számítás tesztelése', () => { 
    it('Sikeres teszt 1: magasság: 20, szélesség: 10, hossz: 30, eredmény: 3000', () => {     
        let actual = calcTerfogat(20, 10, 30);
        let expected = 3000;  
        expect(actual).toBeCloseTo(expected, 0.01);  
    });

    it('Sikeres teszt 2: magasság: 30, szélesség: 30, hossz: 60, eredmény: 36000', () => {     
        let actual = calcTerfogat(30, 30, 60);
        let expected = 36000;  
        expect(actual).toBeCloseTo(expected, 0.01);  
    });
});