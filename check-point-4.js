
const hobbies=["leitura", "corrida", "pintura", "cozinhar", "dançar"];

hobbies.forEach(function(hobby) {
    console.log("Olá, eu sou o hobby " + hobby + "!");
    });


    const bookTitles = hobbies.map(function(hobby) {
        return "O incrível mundo de " + hobby;
        });
        console.log(bookTitles);

        
        const dHobbies = hobbies.filter(function(hobby) {
            return hobby[0] === 'd';
          });
          
          console.log(dHobbies);
    
          
          const runningPosition = hobbies.findIndex(function(hobby) {
            return hobby === 'correr';
          });
          

          console.log("Correr está na posição: " + runningPosition);
          const allHobbies = hobbies.reduce(function(accumulator, hobby) {
            return accumulator + " e " + hobby;
          }, "");
          

          console.log("Meus hobbies são: " + allHobbies);
          const hasLongHobby = hobbies.some(function(hobby) {
            return hobby.length > 8;
          });
          

          console.log("Eu tenho um hobby com mais de 8 letras? " + hasLongHobby);
          const hobbyWithZ = hobbies.find(function(hobby) {
            return hobby.includes('z');
          });
          
          console.log("Meu primeiro hobby com a letra 'z' é: " + hobbyWithZ);


          const hobbiesDoisAoQuatro = hobbies.slice(1, 4); // Lembre-se que os índices começam em 0

          console.log("Meus hobbies do segundo ao quarto são: ", hobbiesDoisAoQuatro);
                                                  