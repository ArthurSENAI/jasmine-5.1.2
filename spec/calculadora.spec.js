describe("Teste Calculadora", function(){
        it("Somas válidas", function(){
            expect(soma(1,2)).toBe(3);
            expect(soma(9,9)).toBe(18);
        });

        it("Somas inválidas", function(){
            expect(soma("a",2)).toBe("Erro");
            expect(soma(9,"b")).toBe("Erro");
        });

        it("Subtrações válidas", function(){
            expect(subtracao(5,2)).toBe(3);
            expect(subtracao(10,5)).toBe(5);
        });

        it("Multiplicação válidas", function(){
            expect(multiplicacao(2,3)).toBe(6);
            expect(multiplicacao(5,5)).toBe(25);
        });

        it("Divisão válidas", function(){
            expect(divisao(10,2)).toBe(5);
            expect(divisao(20,4)).toBe(5);
        });

    }
);